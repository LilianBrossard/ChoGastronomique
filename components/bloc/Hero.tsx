"use client";
import styles from "./Hero.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/usemousePosition";
import Image from "next/image";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-xl sm:text-2xl lg:text-4xl xl:text-6xl p-4 md:p-16 lg:p-48 xl:p-64 text-black overflow-x-hidden"
        >
          Bienvenue sur
          <br />
          <span className="font-[family-name:var(--font-aquire)] text-2xl sm:text-4xl lg:text-6xl xl:text-8xl flex flex-row justify-start">
            CHO&apos;GASTRONOMIQUE
            <Image
              src={`./cookb.svg`}
              alt="scroll"
              width="90"
              height="90"
              className="hidden lg:block pl-4"
            />
          </span>
          Découvrez des recettes exquises et savoureuses pour éveiller vos
          papilles !
        </p>
      </motion.div>

      <div className={styles.body}>
        <p className="text-xl sm:text-2xl lg:text-4xl xl:text-6xl p-4 md:p-16 lg:p-48 xl:p-64 text-slate-300 overflow-x-hidden">
          Bienvenue sur
          <br />
          <span className="font-[family-name:var(--font-aquire)] text-sky-500 text-2xl sm:text-4xl lg:text-6xl xl:text-8xl flex flex-row justify-start">
            CHO&apos;GASTRONOMIQUE
            <Image
              src={`./cook.svg`}
              alt="scroll"
              width="90"
              height="90"
              className="hidden lg:block pl-4"
            />
          </span>
          Découvrez des recettes exquises et savoureuses pour éveiller vos
          papilles !
        </p>
      </div>
      <div className="absolute animate-bounce w-full flex flex-row justify-center bottom-0">
        <Image src={`./scroll.svg`} alt="scroll" width="50" height="50" />
      </div>
    </div>
  );
}
