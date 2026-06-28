import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Footer — NUSANTARAYA
 * Domain, sosial media, sumber (placeholder).
 */
export function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface mt-auto">
      <div className="nusa-container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Image
              src="/assets/branding/NUSANTARAYA-full-Logo.svg"
              alt="NUSANTARAYA"
              width={160}
              height={36}
              className="h-7 w-auto"
            />
            <p className="text-sm text-text-secondary max-w-xs">
              Satu Peta, Ribuan Cerita. Platform eksplorasi digital Indonesia
              yang menyatukan peta, budaya, kuliner, dan perjalanan.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                Jelajahi
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Peta Indonesia", href: "/map" },
                  { label: "Arsip Budaya", href: "/archive" },
                  { label: "Atlas Kuliner", href: "/nusarasa" },
                  { label: "Rute Perjalanan", href: "/routes" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
                Lainnya
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Passport", href: "/passport" },
                  { label: "Tentang", href: "/about" },
                  { label: "Sumber Data", href: "/about#sumber" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Kompetisi
            </h4>
            <p className="text-sm text-text-secondary">
              Dibuat untuk kompetisi
              <br />
              <span className="font-semibold text-text-primary">
                Nusantara Digital City
              </span>
            </p>
            <p className="text-xs text-text-muted mt-3">
              © 2026 NUSANTARAYA. Mufalah Code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
