"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  className: string;
  ariaLabel?: string;
  labelledBy?: string;
};

export default function RevealSection({ children, className, ariaLabel, labelledBy }: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.12
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${className} reveal-section ${isVisible ? "reveal-section--visible" : ""}`}
      ref={sectionRef}
      aria-label={ariaLabel}
      aria-labelledby={labelledBy}
    >
      {children}
    </section>
  );
}
