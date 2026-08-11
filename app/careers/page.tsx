import Link from "next/link";
import { ImageSlot } from "@/components/ImageSlot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type BenefitRow = {
  name: string;
  nameWeight: number;
  nameColor: string;
  bg: string;
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c1Color: string;
  c2Color: string;
  c3Color: string;
  c4Color: string;
};

function getBenefitRows(): BenefitRow[] {
  const CHECK = "#2760D8";
  const DASH = "#B9C8E2";
  const header: BenefitRow = {
    name: "Benefit",
    nameWeight: 800,
    nameColor: "#0B1F3D",
    bg: "#E9F0FB",
    c1: "Entry Level",
    c2: "Team Lead",
    c3: "Assistant Mgr",
    c4: "Location Director",
    c1Color: "#1740A0",
    c2Color: "#1740A0",
    c3Color: "#1740A0",
    c4Color: "#1740A0",
  };
  const data: [string, number, number, number, number][] = [
    ["Training bonuses", 1, 0, 0, 0],
    ["Commission", 1, 1, 1, 1],
    ["Weekly bonuses", 1, 1, 1, 1],
    ["Travel opportunities", 1, 1, 1, 1],
    ["On-going mentorship", 1, 1, 1, 1],
    ["Corporate discounts", 0, 1, 1, 1],
    ["Expense reports", 0, 0, 1, 1],
    ["Salary", 0, 0, 1, 1],
    ["Profit sharing", 0, 0, 1, 1],
    ["Company credit card", 0, 0, 0, 1],
    ["Medical / dental / vision", 0, 0, 0, 1],
  ];
  const rows = data.map(([name, a, b, c, d]) => ({
    name,
    nameWeight: 600,
    nameColor: "#0B1F3D",
    bg: "#FFFFFF",
    c1: a ? "✓" : "—",
    c2: b ? "✓" : "—",
    c3: c ? "✓" : "—",
    c4: d ? "✓" : "—",
    c1Color: a ? CHECK : DASH,
    c2Color: b ? CHECK : DASH,
    c3Color: c ? CHECK : DASH,
    c4Color: d ? CHECK : DASH,
  }));
  return [header, ...rows];
}

export default function CareersPage() {
  const benefitRows = getBenefitRows();

  return (
    <div style={{ background: "#F5F8FD", minHeight: "100vh" }}>
      <SiteHeader active="careers" />

      <div
        style={{
          background: "linear-gradient(180deg,#DDEAFB 0%,#F5F8FD 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "80px 24px 64px",
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
            Home / Careers
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 56,
              lineHeight: 1.06,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              maxWidth: 760,
              textWrap: "pretty",
            }}
          >
            No experience. No ceiling. No kidding.
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
            We start everyone at entry level on purpose — so every leader has
            done the work first. Here&apos;s exactly how you grow, and what you
            earn along the way.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "88px 24px",
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
            Your path
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Four steps, one direction — up.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 20,
          }}
        >
          {[
            {
              n: "01",
              title: "Entry Level",
              body: "Learn the fundamentals of sales and display consistency on live client accounts.",
            },
            {
              n: "02",
              title: "Team Lead",
              body: "Train others, transfer knowledge, build public speaking, become a top performer.",
            },
            {
              n: "03",
              title: "Assistant Manager",
              body: "Learn to evaluate talent, manage a profitable team, and own client management.",
            },
            {
              n: "04",
              title: "Location Director",
              body: "Oversee a market, hit targets, drive business development, and grow your people.",
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
            padding: "96px 24px",
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
              Compensation & benefits
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              The further you go, the more you earn.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.6,
                color: "#3A5075",
              }}
            >
              Benefits compound at every level — here&apos;s exactly what unlocks
              as you grow.
            </p>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(39,96,216,0.15)",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(23,64,160,0.06)",
            }}
          >
            {benefitRows.map((row) => (
              <div
                key={row.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(39,96,216,0.1)",
                  background: row.bg,
                }}
              >
                <div
                  style={{
                    padding: "13px 20px",
                    fontSize: 15,
                    fontWeight: row.nameWeight,
                    color: row.nameColor,
                  }}
                >
                  {row.name}
                </div>
                <div
                  style={{
                    padding: "13px 12px",
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 800,
                    color: row.c1Color,
                  }}
                >
                  {row.c1}
                </div>
                <div
                  style={{
                    padding: "13px 12px",
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 800,
                    color: row.c2Color,
                  }}
                >
                  {row.c2}
                </div>
                <div
                  style={{
                    padding: "13px 12px",
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 800,
                    color: row.c3Color,
                  }}
                >
                  {row.c3}
                </div>
                <div
                  style={{
                    padding: "13px 12px",
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 800,
                    color: row.c4Color,
                  }}
                >
                  {row.c4}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "96px 24px",
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
            More than sales
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            You&apos;ll learn how a business actually runs.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.6,
              color: "#3A5075",
            }}
          >
            As you move up, you take on the real levers of the organization —
            not just selling, but building.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {[
            {
              title: "Hiring & staffing",
              body: "Identify, recruit, and develop talent for your own growing team.",
            },
            {
              title: "Marketing & branding",
              body: "Advertising, creative, and positioning for localized campaigns that win.",
            },
            {
              title: "Finance & operations",
              body: "Budgets, expense management, and running a profitable market.",
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
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "96px 24px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#A8C4F5",
              }}
            >
              Culture
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
              }}
            >
              We work hard. We also actually have fun.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Growth is the goal, but the grind is a lot better with people you
              like. Here&apos;s some of what a year looks like:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "Weekly team outings",
                "Regional conferences",
                "Trips for top performers",
                "Team-building events",
                "Philanthropic events",
                "Recognition nights",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    borderRadius: 999,
                    padding: "9px 18px",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              position: "relative",
              height: 380,
              minWidth: 0,
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            <ImageSlot
              id="careers-culture"
              shape="rounded"
              radius={16}
              src="https://cpc-ms.netlify.app/assets/photos/culture-conversation.png"
              placeholder="Team culture photo"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "88px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
        }}
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
            style={{
              margin: 0,
              fontSize: 40,
              fontWeight: 900,
              letterSpacing: "-0.01em",
              color: "#0B1F3D",
            }}
          >
            Ready to start — and not stay there?
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.6,
              color: "#3A5075",
            }}
          >
            We&apos;re hiring entry-level candidates in Tampa right now.
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
