import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

const OutlineCards = () => {
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = e.target;
    const cursorEl = cursorRef.current;

    const isCardHover = el.classList.contains("outline-card");

    if (isCardHover) {
      const { width, height, top, left } = el.getBoundingClientRect();

      cursorEl.style.transition = "0.25s all";
      cursorEl.style.width = `${width + HOVER_PADDING}px`;
      cursorEl.style.height = `${height + HOVER_PADDING}px`;
      cursorEl.style.borderRadius = "24px"; // rounded shape around card
      cursorEl.style.top = `${top + window.scrollY + height / 2}px`;
      cursorEl.style.left = `${left + width / 2}px`;
    } else {
      cursorEl.style.transition = "0s all";
      cursorEl.style.width = `${CURSOR_WIDTH}px`;
      cursorEl.style.height = `${CURSOR_WIDTH}px`;
      cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
      cursorEl.style.top = `${e.clientY + window.scrollY}px`;
      cursorEl.style.left = `${e.clientX}px`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="overflow-hidden bg-neutral-50 px-8 py-24"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-screen-xl mx-auto px-6">
        <Card
          title="Competitive Math Club"
          href="https://competitivemathclub.vercel.app/"
          bgUrl="/math.png"
        />
        <Card
          title="Hearts of Baking"
          href="https://heartsofbaking.vercel.app/"
          bgUrl="/baking.png"
        />
        <Card
          title="AI Pioneers"
          href="https://aipioneers.vercel.app/"
          bgUrl="/ai.png"
        />
        <Card
          title="CHS Bike Club"
          href="https://chs-bike-club.vercel.app/"
          bgUrl="/bike.png"
        />
      </div>
      <Cursor cursorRef={cursorRef} />
    </section>
  );
};

const Card = ({ bgUrl, title, href }) => {
  return (
    <a
      href={href}
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="outline-card flex w-72 h-56 flex-col justify-end overflow-hidden rounded-2xl bg-neutral-400 shadow-xl shadow-neutral-900/30 transition-transform duration-300 hover:scale-[1.05]"
    >
      <div className="pointer-events-none flex items-center justify-between bg-black/40 p-6 text-xl font-semibold text-white backdrop-blur-sm">
        <h3>{title}</h3>
        <FiArrowRight />
      </div>
    </a>
  );
};

const Cursor = ({ cursorRef }) => {
  return (
    <div
      ref={cursorRef}
      style={{
        width: 0,
        height: 0,
        borderRadius: CURSOR_WIDTH,
        top: 0,
        left: 0,
      }}
      className="hover-cursor pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 border border-neutral-900"
    />
  );
};

export default OutlineCards;
