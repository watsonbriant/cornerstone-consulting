import { ContactForm } from "@/components/ContactForm";
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
          className="pad-page-hero"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
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
          <h1 className="h1-page">
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
        className="grid-split--contact"
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "24px 24px 96px",
        }}
      >
        <ContactForm />

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
                height: 260,
                marginTop: 6,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <ImageSlot
                id="contact-map"
                shape="rounded"
                radius={12}
                src="/IMG_0468.jpeg"
                alt="Team gathered in the Tampa office"
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
