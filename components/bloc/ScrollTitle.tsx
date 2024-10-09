"use client";
import { useRef } from "react";
import Card from "./Cardsscroll";
import { motion, useScroll, useTransform } from "framer-motion";

// font-[family-name:var(--font-aquire)]
export default function ScrollTitle() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);
  return (
    <section ref={targetRef} className="relative h-[350vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden py-6">
        <motion.div style={{ x }}>
          <h1 className="font-[family-name:var(--font-aquire)] text-[300px] uppercase text-nowrap ">
            Encore plus de nos plats
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
