import {
  digitsOnlyPhone,
  MAKO_MAX_RESUME_BYTES,
  resumeContentType,
  submitMakoApplication,
} from "@/lib/mako";

const INTEREST_OPTIONS = new Set([
  "Entry-level / B2B sales",
  "Management track",
  "Internship",
  "Just learning more",
]);

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function badRequest(message: string) {
  return Response.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return badRequest("Could not read the application form.");
  }

  const firstName = asString(form.get("firstName"));
  const lastName = asString(form.get("lastName"));
  const email = asString(form.get("email"));
  const phone = digitsOnlyPhone(asString(form.get("phone")));
  const interest = asString(form.get("interest"));
  const why = asString(form.get("message"));
  const smsOptIn = asString(form.get("smsOptIn")) === "true";
  const resume = form.get("resume");

  if (!firstName || !lastName) {
    return badRequest("First and last name are required.");
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return badRequest("A valid email address is required.");
  }
  if (phone.length !== 10) {
    return badRequest("Enter a 10-digit US phone number.");
  }
  if (!smsOptIn) {
    return badRequest("SMS opt-in is required to submit an application.");
  }
  if (!(resume instanceof File) || resume.size === 0) {
    return badRequest("Please attach your resume.");
  }
  if (resume.size > MAKO_MAX_RESUME_BYTES) {
    return badRequest("Resume must be 10MB or smaller.");
  }
  if (!resumeContentType(resume.name, resume.type)) {
    return badRequest("Resume must be a PDF, DOC, or DOCX file.");
  }
  if (interest && !INTEREST_OPTIONS.has(interest)) {
    return badRequest("Please choose a valid interest option.");
  }

  const messageParts = [
    interest ? `Interested in: ${interest}` : "",
    why,
  ].filter(Boolean);

  try {
    const result = await submitMakoApplication({
      firstName,
      lastName,
      email,
      phone,
      message: messageParts.join("\n\n"),
      resume: {
        name: resume.name,
        type: resume.type,
        bytes: new Uint8Array(await resume.arrayBuffer()),
      },
    });

    return Response.json({
      ok: true,
      status: result.status,
    });
  } catch (error) {
    console.error("Mako apply failed", error);
    return Response.json(
      {
        error:
          "We could not submit your application right now. Please try again or apply at the link on this page.",
      },
      { status: 502 },
    );
  }
}
