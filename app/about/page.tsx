import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <div style={{ background: "#F5F8FD", minHeight: "100vh" }}>
      <SiteHeader active="about" />

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
            Home / About
          </div>
          <h1 className="h1-page" style={{ maxWidth: 760 }}>
            We build people, not just campaigns.
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
            Cornerstone Consulting is a Tampa-based B2B client acquisition team
            — part of a national organization that grew from a single office in
            1999 to 75 across the country.
          </p>
        </div>
      </div>

      <div
        className="grid-split pad-section-sm"
        style={{ maxWidth: 1160, margin: "0 auto" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2760D8",
            }}
          >
            Our story
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.7,
              color: "#0B1F3D",
              fontWeight: 600,
            }}
          >
            It started in 1999 with one office and one belief: the best leaders
            are the ones who&apos;ve done the work themselves.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#3A5075",
            }}
          >
            Over the next two decades, that belief built a national footprint —
            75 offices across the United States, with residential, retail, and
            business-to-business teams. The Tampa office is where we focus on
            B2B: representing Fortune 500 brands and winning new business face
            to face.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#3A5075",
            }}
          >
            What never changed is how we grow. We don&apos;t hire managers from
            the outside. Everyone starts at entry level, because we want our
            leaders to have personally done everything they&apos;ll one day
            teach. No seniority. 100% promotion from within.
          </p>
        </div>
        <div className="media-md">
          <ImageSlot
            id="about-meeting"
            shape="rounded"
            radius={16}
            src="https://cpc-ms.netlify.app/assets/photos/about-meeting.png"
            placeholder="Team meeting photo"
          />
        </div>
      </div>

      <div
        style={{
          background: "#E3EDFB",
          borderTop: "1px solid rgba(39,96,216,0.1)",
          borderBottom: "1px solid rgba(39,96,216,0.1)",
        }}
      >
        <div
          className="pad-section"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 44,
          }}
        >
          <div
            style={{
              maxWidth: 640,
              display: "flex",
              flexDirection: "column",
              gap: 14,
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
              What we stand on
            </div>
            <h2 className="h2-section">
              Five things we never compromise.
            </h2>
          </div>
          <div className="grid-5">
            {[
              {
                title: "Integrity",
                body: "Do what's right, even when it's hard.",
              },
              {
                title: "Professionalism",
                body: "Sharp, prepared, accountable.",
              },
              { title: "Attitude", body: "Coachable, positive, hungry." },
              {
                title: "Systems",
                body: "Process that makes results repeatable.",
              },
              {
                title: "Responsibility",
                body: "We own every outcome.",
              },
            ].map((value) => (
              <div
                key={value.title}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(39,96,216,0.15)",
                  borderRadius: 14,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  boxShadow: "0 2px 12px rgba(23,64,160,0.06)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#1740A0",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "#3A5075",
                  }}
                >
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg,#1740A0,#2760D8)",
          color: "#FFFFFF",
        }}
      >
        <div
          className="grid-split--rev pad-section"
          style={{ maxWidth: 1160, margin: "0 auto" }}
        >
          <div className="media-sm">
            <ImageSlot
              id="about-training"
              shape="rounded"
              radius={16}
              src="https://cpc-ms.netlify.app/assets/photos/coaching.png"
              placeholder="Hands-on training photo"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#A8C4F5",
              }}
            >
              How we train
            </div>
            <h2 className="h2-section">
              AI, classroom & hands-on — from day one.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              New team members aren&apos;t left to figure it out. You&apos;ll
              learn through a structured blend of AI-assisted tools, classroom
              fundamentals, and real-world reps alongside people who were in
              your shoes months ago.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {[
                "Fundamentals of sales & client management",
                "Public speaking & transfer of knowledge",
                "Hiring, finance, marketing & branding as you rise",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: "#A8C4F5", fontWeight: 900 }}>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="cta-row pad-section-sm"
        style={{ maxWidth: 1160, margin: "0 auto" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 620,
          }}
        >
          <h2
            className="h2-section"
            style={{ fontWeight: 900, color: "#0B1F3D" }}
          >
            Want to meet the team?
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.6,
              color: "#3A5075",
            }}
          >
            The fastest way to understand Cornerstone is a conversation.
            Let&apos;s set one up.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-primary"
          style={{
            padding: "16px 30px",
            borderRadius: 8,
            fontWeight: 800,
            fontSize: 17,
          }}
        >
          Apply Now →
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
