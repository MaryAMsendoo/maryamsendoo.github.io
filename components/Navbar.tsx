"use client";

import { useEffect, useState, type CSSProperties } from "react";

export default function Navbar() {
  // Same behaviour as the original scroll script: shrink + darken after 50px.
  const [scrollStyle, setScrollStyle] = useState<CSSProperties>();

  useEffect(() => {
    const onScroll = () => {
      setScrollStyle(
        window.scrollY > 50
          ? { padding: "0.5rem 2rem", backgroundColor: "rgba(41, 34, 45, 0.95)" }
          : { padding: "1rem 2rem", backgroundColor: "var(--primary)" }
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={scrollStyle}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/Assets/Images/logo1.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feature">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
