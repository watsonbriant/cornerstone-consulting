"use client";

import Link from "next/link";
import { useState } from "react";

export type SitePage = "home" | "about" | "careers" | "contact";

export function SiteHeader({ active }: { active: SitePage }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          href="/"
          onClick={close}
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

        <nav className={`site-header__links${open ? " open" : ""}`}>
          <Link
            href="/"
            onClick={close}
            className={active === "home" ? "nav-link-active" : "nav-link"}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={close}
            className={active === "about" ? "nav-link-active" : "nav-link"}
          >
            About
          </Link>
          <Link
            href="/careers"
            onClick={close}
            className={active === "careers" ? "nav-link-active" : "nav-link"}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={close}
            className={active === "contact" ? "nav-link-active" : "nav-link"}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={close}
            className="btn-primary"
            style={{
              padding: "11px 20px",
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            Apply Now →
          </Link>
        </nav>

        <button
          type="button"
          className="site-header__burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
