"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="Future Labs Africa home">
          <Image src="/images/logo.png" alt="Future Labs Africa" width={689} height={458} priority />
        </a>
        <nav className="nav__links" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#enrollment" className="btn btn--lime nav__cta" onClick={() => setOpen(false)}>
            Hire Talent / Enroll
          </a>
        </nav>
        <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
