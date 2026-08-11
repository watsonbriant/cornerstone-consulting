import { ImageSlot } from "@/components/ImageSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <div style={{ background: "#F5F8FD", minHeight: "100vh" }}>
      <SiteHeader active="contact" />

      <div
        style={{
          background: "linear-gradient(180deg,#DDEAFB 0%,#F5F8FD 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "80px 24px 56px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2760D8",
            }}
          >
            Home / Contact
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 56,
              lineHeight: 1.06,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textWrap: "pretty",
            }}
          >
            Let&apos;s talk.
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 19,
              lineHeight: 1.6,
              color: "#3A5075",
              maxWidth: 680,
            }}
          >
            Fill out the form below and a member of our Tampa team will reach
            out within one business day. It takes about 60 seconds.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "24px 24px 96px",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        <form
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(39,96,216,0.15)",
            borderRadius: 16,
            padding: 36,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            boxShadow: "0 2px 12px rgba(23,64,160,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{ fontSize: 14, fontWeight: 700, color: "#1740A0" }}
              >
                First name
              </label>
              <input type="text" name="firstName" className="field-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{ fontSize: 14, fontWeight: 700, color: "#1740A0" }}
              >
                Last name
              </label>
              <input type="text" name="lastName" className="field-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{ fontSize: 14, fontWeight: 700, color: "#1740A0" }}
              >
                Email
              </label>
              <input type="email" name="email" className="field-input" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{ fontSize: 14, fontWeight: 700, color: "#1740A0" }}
              >
                Phone
              </label>
              <input type="tel" name="phone" className="field-input" />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 14, fontWeight: 700, color: "#1740A0" }}>
              I&apos;m interested in
            </label>
            <select name="interest" className="field-input">
              <option>Entry-level / B2B sales</option>
              <option>Management track</option>
              <option>Internship</option>
              <option>Just learning more</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 14, fontWeight: 700, color: "#1740A0" }}>
              Why are you interested? (optional)
            </label>
            <textarea
              name="message"
              rows={4}
              className="field-input"
              style={{ resize: "vertical" }}
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{
              border: "none",
              borderRadius: 8,
              padding: "16px 24px",
              fontSize: 16,
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Submit application →
          </button>
          <div style={{ fontSize: 13, color: "#7288AB", lineHeight: 1.5 }}>
            By submitting you agree to be contacted about career opportunities
            at Cornerstone Consulting.
          </div>
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#2760D8",
              }}
            >
              What happens next
            </div>
            {[
              {
                n: "1",
                title: "We review your info",
                body: "A real person on our team reads every application.",
              },
              {
                n: "2",
                title: "A quick conversation",
                body: "We'll set up a relaxed call or in-person chat to get to know you.",
              },
              {
                n: "3",
                title: "Come see the floor",
                body: "Spend a day with the team and decide if it's the right fit.",
              },
            ].map((step) => (
              <div
                key={step.n}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#2760D8",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  {step.n}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <div style={{ fontWeight: 800, fontSize: 16 }}>
                    {step.title}
                  </div>
                  <div
                    style={{ fontSize: 14, color: "#3A5075", lineHeight: 1.5 }}
                  >
                    {step.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              background: "#E3EDFB",
              border: "1px solid rgba(39,96,216,0.15)",
              borderRadius: 16,
              padding: 26,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#2760D8",
              }}
            >
              Visit us
            </div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Tampa, Florida</div>
            <div style={{ fontSize: 15, color: "#3A5075" }}>
              Monday–Friday · 9:00am – 6:00pm
            </div>
            <div
              style={{
                position: "relative",
                height: 180,
                marginTop: 6,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <ImageSlot
                id="contact-map"
                shape="rounded"
                radius={12}
                placeholder="Map / office photo"
              />
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
