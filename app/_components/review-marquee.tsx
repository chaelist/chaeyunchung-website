"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  quote: string;
  author: string;
};

type ReviewMarqueeProps = {
  reviews: Review[];
};

export default function ReviewMarquee({ reviews }: ReviewMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(0.15);
  const [isSlow, setIsSlow] = useState(false);
  const [isVertical, setIsVertical] = useState(false);
  const repeatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateMode = () => {
      offsetRef.current = 0;
      setIsVertical(mediaQuery.matches);
    };

    updateMode();
    mediaQuery.addEventListener("change", updateMode);

    return () => mediaQuery.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    let animationFrame = 0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const track = trackRef.current;

      if (track) {
        const delta = time - lastTime;
        const loopSize = isVertical ? track.scrollHeight / 2 : track.scrollWidth / 2;

        offsetRef.current -= speedRef.current * delta;

        if (Math.abs(offsetRef.current) >= loopSize) {
          offsetRef.current += loopSize;
        }

        track.style.transform = isVertical
          ? `translate3d(0, ${offsetRef.current}px, 0)`
          : `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      lastTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVertical]);

  useEffect(() => {
    speedRef.current = isVertical ? (isSlow ? 0.035 : 0.075) : (isSlow ? 0.06 : 0.15);
  }, [isSlow, isVertical]);

  return (
    <div
      className={`review-marquee ${isVertical ? "review-marquee--vertical" : ""}`}
      onMouseEnter={() => setIsSlow(true)}
      onMouseLeave={() => setIsSlow(false)}
      onClick={() => {
        if (isVertical) {
          setIsSlow((current) => !current);
        }
      }}
    >
      <div className="review-track" ref={trackRef}>
        {repeatedReviews.map((review, index) => (
          <blockquote className="review-card" key={`${review.author}-${index}`}>
            <p>{review.quote}</p>
            <footer>{review.author}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
