import React, { useState, useEffect, useRef, useCallback } from "react";

export default function Home({
  images = [
    "/driveway-small.png",
    "/driveway-big.png",
    "/materials.jpeg",
  ],
  intervalMs = 5000,
}) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Navigation functions
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  const goTo = (i) => setIndex(i);

  // Auto-play
  useEffect(() => {
    if (!intervalMs) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearTimeout(timeoutRef.current);
  }, [index, images.length, intervalMs]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div style={styles.container} aria-roledescription="carousel">
      <div
        style={{
          ...styles.slidesWrapper,
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              ...styles.slide,
              minWidth: `${100 / images.length}%`,
              backgroundImage: `url(${src})`,
            }}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      <button onClick={prev} aria-label="Previous slide" style={{ ...styles.arrow, left: 20 }}>
        ‹
      </button>

      <button onClick={next} aria-label="Next slide" style={{ ...styles.arrow, right: 20 }}>
        ›
      </button>

      <div style={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            style={{
              ...styles.dot,
              background: i === index ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
              transform: i === index ? "scale(1.1)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    overflow: "hidden",
    background: "#000",
  },
  slidesWrapper: {
    display: "flex",
    height: "100%",
    transition: "transform 500ms ease",
  },
  slide: {
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "opacity 300ms ease",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    border: "none",
    width: 56,
    height: 56,
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: 30,
    lineHeight: "56px",
    textAlign: "center",
    userSelect: "none",
  },
  dots: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: 28,
    display: "flex",
    gap: 10,
    zIndex: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
};