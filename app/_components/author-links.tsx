"use client";

import { useState } from "react";

const email = "cyc.cecile@gmail.com";

export default function AuthorLinks() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="author-links" aria-label="Author links">
      <button className="author-link" type="button" onClick={copyEmail} aria-label="이메일 주소 복사">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.75 6.5h14.5v11H4.75z" />
          <path d="m5.25 7 6.75 5.45L18.75 7" />
        </svg>
      </button>
      <a
        className="author-link"
        href="https://www.instagram.com/cyc.shads/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.2 3.8h9.6a3.4 3.4 0 0 1 3.4 3.4v9.6a3.4 3.4 0 0 1-3.4 3.4H7.2a3.4 3.4 0 0 1-3.4-3.4V7.2a3.4 3.4 0 0 1 3.4-3.4Z" />
          <path d="M8.7 12a3.3 3.3 0 1 0 6.6 0 3.3 3.3 0 0 0-6.6 0Z" />
          <path d="M16.7 7.3h.01" />
        </svg>
      </a>
      <a
        className="author-link author-link--brunch"
        href="https://brunch.co.kr/@cyc-cecile"
        target="_blank"
        rel="noreferrer"
        aria-label="Brunch"
      >
        b
      </a>
      <span className={`author-links__copied ${copied ? "author-links__copied--visible" : ""}`} role="status">
        이메일이 복사되었습니다.
      </span>
    </div>
  );
}
