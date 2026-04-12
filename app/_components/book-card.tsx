"use client";

import Image from "next/image";
import { useState } from "react";

type BookCardProps = {
  book: {
    title: string;
    subtitle: string;
    description: string;
    synopsis: string;
    backdrop: string;
    alt: string;
    href: string;
  };
  index: number;
};

export default function BookCard({ book, index }: BookCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const synopsisId = `book-synopsis-${index}`;

  return (
    <article className="book-card">
      <div className={`book-card__visual ${index % 2 === 1 ? "book-card__visual--reverse" : ""}`}>
        <Image
          className="book-card__backdrop"
          src={book.backdrop}
          alt={book.alt}
          width={2040}
          height={1620}
          priority={index === 0}
        />
      </div>

      <div className="book-card__body">
        <h2>
          {book.title}
          <span>{book.subtitle}</span>
        </h2>
        <p>{book.description}</p>

        <button
          className="synopsis-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls={synopsisId}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span>줄거리</span>
          <span className="synopsis-toggle__mark" aria-hidden="true" />
        </button>

        <div
          className={`synopsis-panel ${isOpen ? "synopsis-panel--open" : ""}`}
          id={synopsisId}
          aria-hidden={!isOpen}
        >
          <p>{book.synopsis}</p>
        </div>

        <a className="ghost-link" href={book.href} target="_blank" rel="noreferrer">
          온라인 서점으로 이동
        </a>
      </div>
    </article>
  );
}
