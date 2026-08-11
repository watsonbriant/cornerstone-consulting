import Link from "next/link";

export function SiteFooter() {
  return (
    <div style={{ background: "#0B1F3D", color: "#C7D6EE" }}>
      <div
        className="grid-footer site-footer-pad"
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "64px 24px 40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.05,
            }}
          >
            <span style={{ fontWeight: 900, fontSize: 19, color: "#FFFFFF" }}>
              CORNERSTONE
            </span>
            <span
              style={{
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.44em",
                color: "#7FA8F5",
              }}
            >
              CONSULTING
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.6,
              color: "#8FA5C6",
              maxWidth: 300,
            }}
          >
            A Tampa-based B2B client acquisition team. We build careers from the
            ground up and promote 100% from within.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 14,
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Explore
          </div>
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/about" className="footer-link">
            About
          </Link>
          <Link href="/careers" className="footer-link">
            Careers
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 14,
            color: "#8FA5C6",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Office
          </div>
          <span>Tampa, Florida</span>
          <span>Mon–Fri · 9am–6pm</span>
          <Link href="/contact" className="footer-link">
            Get directions
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 14,
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Connect
          </div>
          <Link href="/contact" className="footer-link">
            Apply now
          </Link>
          <a href="#" className="footer-link">
            LinkedIn
          </a>
          <a href="#" className="footer-link">
            Instagram
          </a>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(147,177,222,0.15)" }}>
        <div
          className="site-footer-pad"
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 13,
            color: "#8FA5C6",
          }}
        >
          <span>© 2026 Cornerstone Consulting. All rights reserved.</span>
          <span>Established 1999 · 75 offices nationwide</span>
        </div>
      </div>
    </div>
  );
}
