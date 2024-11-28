"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

//  className="font-[family-name:var(--font-stike)]"
export default function LastTitle() {
  const controls = useAnimation();
  const ref = useRef(null);

  const textContent = "Bon appétit !";
  const letters = Array.from(textContent).map((char) =>
    char === " " ? "\u00A0" : char
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div style={{ display: "inline-block w-full" }} ref={ref}>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <h1 className="font-[family-name:var(--font-aquire)] text-white text-xl md:text-2xl lg:text-4xl xl:text-6xl uppercase text-wrap text-center px-4 py-16">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: index * 0.1, duration: 1 }}
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
