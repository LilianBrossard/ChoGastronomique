"use client";
import { useRef } from "react";
import Card from "./Cardsscroll";
import { motion, useScroll, useTransform } from "framer-motion";

// font-[family-name:var(--font-aquire)]
export default function ScrollSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <section ref={targetRef} className="relative h-[500vh] bg-orange-700">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden py-6">
        <motion.div style={{ x }}>
          <Card />
        </motion.div>
      </div>
    </section>
  );
}
