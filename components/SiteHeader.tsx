import Link from "next/link";

export type SitePage = "home" | "about" | "careers" | "contact";

export function SiteHeader({ active }: { active: SitePage }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(245,248,253,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(39,96,216,0.12)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.05,
            color: "#0B1F3D",
          }}
        >
          <span
            style={{
              fontWeight: 900,
              fontSize: 20,
              letterSpacing: "0.01em",
              color: "#0B1F3D",
            }}
          >
            CORNERSTONE
          </span>
          <span
            style={{
              fontWeight: 600,
              fontSize: 10,
              letterSpacing: "0.44em",
              color: "#2760D8",
            }}
          >
            CONSULTING
          </span>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          <Link
            href="/"
            className={active === "home" ? "nav-link-active" : "nav-link"}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={active === "about" ? "nav-link-active" : "nav-link"}
          >
            About
          </Link>
          <Link
            href="/careers"
            className={active === "careers" ? "nav-link-active" : "nav-link"}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={active === "contact" ? "nav-link-active" : "nav-link"}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="btn-primary"
            style={{
              padding: "11px 20px",
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
