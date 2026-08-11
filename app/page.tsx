import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <div style={{ background: "#F5F8FD", minHeight: "100vh" }}>
      <SiteHeader active="home" />

      <div
        style={{
          background: "linear-gradient(180deg,#DDEAFB 0%,#F5F8FD 100%)",
        }}
      >
        <div
          className="grid-split pad-hero"
          style={{ maxWidth: 1160, margin: "0 auto" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#2760D8",
              }}
            >
              B2B Client Acquisition · Tampa, FL
            </div>
            <h1 className="h1-hero">
              Where great careers start from scratch.
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: 19,
                lineHeight: 1.6,
                color: "#3A5075",
                maxWidth: 520,
              }}
            >
              We represent Fortune 500 brands across Tampa — and we promote 100%
              from within. No experience needed, just the drive to grow.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{
                  padding: "15px 26px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Apply in 60 seconds →
              </Link>
              <Link
                href="/careers"
                className="btn-secondary"
                style={{
                  padding: "15px 26px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                See your path
              </Link>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 12 }}>
              <div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#1740A0" }}>
                  100%
                </div>
                <div style={{ fontSize: 14, color: "#3A5075" }}>
                  promotion from within
                </div>
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#1740A0" }}>
                  75
                </div>
                <div style={{ fontSize: 14, color: "#3A5075" }}>
                  offices nationwide
                </div>
              </div>
            </div>
          </div>
          <div className="media-lg">
            <ImageSlot
              id="home-hero"
              shape="rounded"
              radius={16}
              src="https://cpc-ms.netlify.app/assets/photos/hero-presentation.png"
              placeholder="Team presentation photo"
            />
          </div>
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
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "36px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
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
            The brands we represent, face to face
          </div>
          <div
            style={{
              display: "flex",
              gap: 44,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cpc-ms.netlify.app/assets/clients/att-business.png"
              alt="AT&T Business"
              style={{ height: 30, opacity: 0.75 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cpc-ms.netlify.app/assets/clients/verizon.png"
              alt="Verizon"
              style={{ height: 30, opacity: 0.75 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cpc-ms.netlify.app/assets/clients/google.png"
              alt="Google"
              style={{ height: 30, opacity: 0.75 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cpc-ms.netlify.app/assets/clients/amazon.png"
              alt="Amazon"
              style={{ height: 30, opacity: 0.75 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cpc-ms.netlify.app/assets/clients/intuit.png"
              alt="Intuit"
              style={{ height: 30, opacity: 0.75 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cpc-ms.netlify.app/assets/clients/staples.png"
              alt="Staples"
              style={{ height: 30, opacity: 0.75 }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cpc-ms.netlify.app/assets/clients/nrg.png"
              alt="NRG"
              style={{ height: 30, opacity: 0.75 }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
        className="pad-section"
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
            Why people stay
          </div>
          <h2 className="h2-section">
            A place that&apos;s actually built for growing.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.6,
              color: "#3A5075",
            }}
          >
            We&apos;re a B2B client acquisition team in Tampa — and we believe
            the best leaders are the ones who&apos;ve done the work themselves.
          </p>
        </div>
        <div className="grid-3">
          {[
            {
              title: "Promote from within",
              body: "We never hire managers from outside. Every leader earned their seat by doing the role first — and so will you.",
            },
            {
              title: "Mentorship, not guesswork",
              body: "AI-assisted, classroom, and hands-on training from day one — guided by people who were where you are months ago.",
            },
            {
              title: "Real work, real results",
              body: "Localized campaigns for Fortune 500 telecom, energy, and office-supply clients — measured by outcomes, not hours.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(39,96,216,0.15)",
                borderRadius: 14,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxShadow: "0 2px 12px rgba(23,64,160,0.06)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1740A0",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#3A5075",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
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
              id="home-team"
              shape="rounded"
              radius={16}
              src="https://cpc-ms.netlify.app/assets/photos/team-lounge.png"
              placeholder="Team lounge photo"
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
              The work
            </div>
            <h2 className="h2-section">
              Winning business, one conversation at a time.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Based in Tampa, we partner with Fortune 500 companies to build
              high-performing, localized B2B campaigns — sitting across the desk
              from the owners, CEOs, and managers who make the call.
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
                "Telecommunications, natural gas & office supply",
                "Exclusive B2B channel partner for the Tampa market",
                "Consulting decision-makers across every industry",
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
        className="pad-section"
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 48,
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
            Your journey
          </div>
          <h2 className="h2-section">
            From day one to running your own market.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.6,
              color: "#3A5075",
            }}
          >
            There&apos;s no seniority here — only growth. Here&apos;s the path,
            and most of it moves faster than you&apos;d think.
          </p>
        </div>
        <div className="grid-4">
          {[
            {
              n: "01",
              title: "Entry Level",
              body: "Learn the fundamentals of sales and build consistency on real accounts.",
            },
            {
              n: "02",
              title: "Team Lead",
              body: "Train others, find your voice in public speaking, and become a top performer.",
            },
            {
              n: "03",
              title: "Assistant Manager",
              body: "Learn to evaluate talent and manage a profitable, growing team.",
            },
            {
              n: "04",
              title: "Location Director",
              body: "Oversee a market, hit targets, and grow the next generation of leaders.",
            },
          ].map((step) => (
            <div
              key={step.n}
              style={{
                borderTop: "3px solid #2760D8",
                background: "#FFFFFF",
                borderRadius: "0 0 14px 14px",
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                boxShadow: "0 2px 12px rgba(23,64,160,0.06)",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 900, color: "#2760D8" }}>
                {step.n}
              </div>
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>
                {step.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#3A5075",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <Link href="/careers" style={{ fontWeight: 700, fontSize: 16 }}>
          See careers & benefits →
        </Link>
      </div>

      <div
        style={{
          background: "#E3EDFB",
          borderTop: "1px solid rgba(39,96,216,0.1)",
        }}
      >
        <div
          className="pad-section-sm"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 640,
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
              Local office, national backbone
            </div>
            <h2 className="h2-section">
              Built up since 1999.
            </h2>
          </div>
          <div className="grid-4">
            {[
              {
                stat: "1999",
                label: "The year we started — from one office.",
              },
              {
                stat: "75",
                label: "Offices across the United States today.",
              },
              {
                stat: "$150B",
                label: "In fiber & 5G investment by our partners.",
              },
              {
                stat: "#1",
                label: "In small-business satisfaction for our client.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <div
                  style={{ fontSize: 44, fontWeight: 900, color: "#1740A0" }}
                >
                  {item.stat}
                </div>
                <div style={{ fontSize: 15, color: "#3A5075" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              borderLeft: "3px solid #2760D8",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                fontStyle: "italic",
                color: "#1740A0",
              }}
            >
              “Work hard. Have fun. Get things done.”
            </div>
            <div style={{ fontSize: 15, color: "#3A5075" }}>
              — The culture at Cornerstone Consulting
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,#1740A0,#2760D8)" }}>
        <div
          className="cta-row pad-cta"
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
              style={{ fontWeight: 900, color: "#FFFFFF" }}
            >
              Your future team is waiting.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              We&apos;re hiring entry-level candidates in Tampa right now. No
              experience required — just bring the drive.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-white"
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
      </div>

      <SiteFooter />
    </div>
  );
}
