const MAKO_API_BASE =
  process.env.MAKO_API_BASE ?? "https://api.atsmako.com";
const MAKO_OFFICE_ID =
  process.env.MAKO_OFFICE_ID ?? "5712f193-3e59-4bd1-8b5d-ab7740577743";

export const MAKO_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const MAKO_MAX_RESUME_BYTES = 10 * 1024 * 1024;

type MakoAddress = {
  country_code: string | null;
  street_number: string | null;
  street_name: string | null;
  suite_unit_number: string | null;
  city: string | null;
  state_id: string | null;
  zipcode: string | null;
};

export type MakoApplicationInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  resume: {
    name: string;
    type: string;
    bytes: Uint8Array;
  };
};

type MakoValidationResponse = {
  valid?: boolean;
  application_id?: string;
  resume_file?: {
    upload_url?: string;
    file_id?: string;
    file_key?: string;
  };
};

function emptyAddress(): MakoAddress {
  return {
    country_code: null,
    street_number: null,
    street_name: null,
    suite_unit_number: null,
    city: null,
    state_id: null,
    zipcode: null,
  };
}

function applicantPayload(
  input: Omit<MakoApplicationInput, "resume">,
  resumeFile: Record<string, string>,
) {
  return {
    first_name: input.firstName,
    last_name: input.lastName,
    phone: input.phone,
    email_address: input.email,
    address: emptyAddress(),
    message: input.message,
    office_id: MAKO_OFFICE_ID,
    resume_file: resumeFile,
  };
}

async function makoFetch(path: string, body: unknown) {
  const response = await fetch(`${MAKO_API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  let data: unknown = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    throw new Error(
      typeof data === "string" && data
        ? data
        : `Mako request failed (${response.status})`,
    );
  }

  return data;
}

export function digitsOnlyPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1")
    ? digits.slice(1)
    : digits;
}

export function resumeContentType(fileName: string, type: string) {
  if (type && MAKO_RESUME_TYPES.includes(type as (typeof MAKO_RESUME_TYPES)[number])) {
    return type;
  }

  const ext = fileName.split(".").pop()?.toLowerCase();
  if (ext === "pdf") return "application/pdf";
  if (ext === "doc") return "application/msword";
  if (ext === "docx") {
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }
  return "";
}

export async function submitMakoApplication(input: MakoApplicationInput) {
  const contentType = resumeContentType(input.resume.name, input.resume.type);
  const validation = (await makoFetch("/api/applicants/apply-here/validation", {
    ...applicantPayload(input, {
      name: input.resume.name,
      content_type: contentType,
    }),
  })) as MakoValidationResponse;

  // Mako treats an invalid/duplicate validation as a successful apply.
  if (!validation.valid) {
    return { status: "received" as const };
  }

  const uploadUrl = validation.resume_file?.upload_url;
  const applicationId = validation.application_id;
  if (!uploadUrl || !applicationId) {
    throw new Error("Mako did not return an upload URL for the resume.");
  }

  const upload = await fetch(uploadUrl, {
    method: "PUT",
    headers: { "Content-Type": contentType || "application/octet-stream" },
    body: Buffer.from(input.resume.bytes),
  });

  if (!upload.ok) {
    throw new Error(`Resume upload failed (${upload.status}).`);
  }

  await makoFetch(`/api/applicants/apply-here/${applicationId}`, {
    ...applicantPayload(input, {
      upload_url: uploadUrl,
      file_id: validation.resume_file?.file_id ?? "",
      file_key: validation.resume_file?.file_key ?? "",
      name: input.resume.name,
    }),
  });

  return { status: "submitted" as const };
}
