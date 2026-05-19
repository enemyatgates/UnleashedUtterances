"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <img
            src="/logo-placeholder.svg"
            alt="Unleashed Utterances"
            width={36}
            height={36}
          />
          <span className={styles.siteName}>Unleashed Utterances</span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
