"use client";
import { useState } from "react";
import Image from "next/image";

export default function StickySlide() {
  const [isOpen1, setIsOpen1] = useState(false);

  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);

  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
  };
  return (
    <div className="relative bg-white font-[family-name:var(--font-strike)] transition-all duration-700 ease-in-out w-full">
      <div className="sticky top-0 h-screen">
        <Image
          src={`/riz.jpg`}
          alt="salade"
          width="2000"
          height="2000"
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>
      <div className="sticky top-0 h-screen flex flex-col xl:flex-row justify-around items-center backdrop-blur-xl backdrop-opacity-90">
        <div
          className={`w-[90%] xl:w-1/4 lg:min-h-1/3 p-2 xl:p-8 bg-orange-600 border-[16px]  border-black transition-opacity duration-200 ${
            isOpen1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-around items-start text-slate-200 w-full xl:w-full">
            <h3 className="font-[family-name:var(--font-strike)] text-sky-300">
              Ingrédient
            </h3>
            <ul className="pl-4">
              <li>
                <p>200 g de riz basmati</p>
              </li>
              <li>
                <p>1 courgette, coupée en rondelles</p>
              </li>
              <li>
                <p>1 poivron rouge, coupé en lanières</p>
              </li>
              <li>
                <p>1 carotte, coupée en dés</p>
              </li>
              <li>
                <p>100 g de pois chiches cuits</p>
              </li>
              <li>
                <p>2 cuillères à soupe d’huile d’olive</p>
              </li>
              <li>
                <p>Jus d’un citron</p>
              </li>
              <li>
                <p>Quelques feuilles de coriandre fraîche</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[90%] text-center xl:w-1/3 lg:min-h-1/3">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-black mb-8">
            Riz aux légumes grillés
          </h1>
          <button
            onClick={handleClick1}
            className="ml-4 p-2 px-4 flex flex-row justify-around items-center bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-100 ease-in-out group border-black border-0 hover:border-4"
          >
            <h3 className="px-2 group-hover:scale-105 transition-all duration-100 ease-in-ou">
              Cuisinons
            </h3>
            <span className="block transform transition-all opacity-0 translate-x-8 duration-100 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <Image src={`/cook.svg`} alt="go" width="24" height="24" />
            </span>
          </button>
        </div>
        <div
          className={`w-[90%] xl:w-1/4 lg:min-h-1/3 p-2 xl:p-8 bg-orange-600 border-[16px]  border-black transition-opacity duration-200 ${
            isOpen1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="font-[family-name:var(--font-strike)] text-sky-300">
            Instructions
          </h3>
          <ul className="pl-4">
            <li>
              <p>
                Fais cuire le riz basmati selon les instructions du paquet et
                laisse refroidir.
              </p>
            </li>
            <li>
              <p>
                Préchauffe le four à 200°C. Dispose les légumes sur une plaque
                de cuisson, arrose-les d’huile d’olive, sale et poivre. Fais
                griller pendant 20 minutes.
              </p>
            </li>
            <li>
              <p>
                Mélange le riz, les légumes grillés, les pois chiches et le jus
                de citron dans un grand bol. Garnis avec la coriandre fraîche.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sticky top-0 h-screen">
        <Image
          src={`/saumon.jpg`}
          alt="salade"
          width="2000"
          height="2000"
          style={{ objectFit: "cover" }}
          className="w-full h-full "
        />
      </div>
      <div className="sticky top-0 h-screen flex flex-col xl:flex-row justify-around items-center backdrop-blur-xl backdrop-opacity-90">
        <div
          className={`w-[90%] xl:w-1/4 lg:min-h-1/3 p-2 xl:p-8 bg-orange-600 border-[16px] border-black transition-opacity duration-200 ${
            isOpen2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-around items-start text-slate-200 w-full xl:w-full">
            <h3 className="font-[family-name:var(--font-strike)] text-sky-300">
              Ingrédients
            </h3>
            <ul className="pl-4">
              <li>
                <p>200 g de pâtes (penne ou farfalle)</p>
              </li>
              <li>
                <p>150 g de saumon fumé, coupé en dés</p>
              </li>
              <li>
                <p>100 g de petits pois surgelés</p>
              </li>
              <li>
                <p>200 ml de crème fraîche</p>
              </li>
              <li>
                <p>1 oignon, finement haché</p>
              </li>
              <li>
                <p>2 cuillères à soupe d&apos;huile d&apos;olive</p>
              </li>
              <li>
                <p>Jus d&apos;un demi-citron</p>
              </li>
              <li>
                <p>Quelques brins d&apos;aneth frais</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[90%] text-center xl:w-1/3 lg:min-h-1/3">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-black mb-8">
            Pâtes au saumon fumé et petits pois
          </h1>
          <button
            onClick={handleClick2}
            className="ml-4 p-2 px-4 flex flex-row justify-around items-center bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-100 ease-in-out group border-black border-0 hover:border-4"
          >
            <h3 className="px-2 group-hover:scale-105 transition-all duration-100 ease-in-out">
              Cuisinons
            </h3>
            <span className="block transform transition-all opacity-0 translate-x-8 duration-100 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <Image src={`/cook.svg`} alt="go" width="24" height="24" />
            </span>
          </button>
        </div>
        <div
          className={`w-[90%] xl:w-1/4 lg:min-h-1/3 p-2 xl:p-8 bg-orange-600 border-[16px] border-black transition-opacity duration-200 ${
            isOpen2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="font-[family-name:var(--font-strike)] text-sky-300">
            Instructions
          </h3>
          <ul className="pl-4">
            <li>
              <p>
                Fais cuire les pâtes selon les instructions du paquet et
                égoutte-les.
              </p>
            </li>
            <li>
              <p>
                Dans une poêle, fais revenir l&apos;oignon haché dans
                l&apos;huile d&apos;olive jusqu&apos;à ce qu&apos;il soit
                translucide.
              </p>
            </li>
            <li>
              <p>
                Ajoute les petits pois surgelés et fais-les cuire pendant 5
                minutes.
              </p>
            </li>
            <li>
              <p>
                Ajoute la crème fraîche et le jus de citron, puis mélange bien.
              </p>
            </li>
            <li>
              <p>
                Ajoute les dés de saumon fumé et l&apos;aneth frais. Mélange
                bien pour enrober les pâtes de la sauce.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="sticky top-0 h-screen">
        <Image
          src={`/tajine.jpg`}
          alt="salade"
          width="2000"
          height="2000"
          style={{ objectFit: "cover" }}
          className="w-full h-full "
        />
      </div>
      <div className="sticky top-0 h-screen flex flex-col xl:flex-row justify-around items-center backdrop-blur-xl backdrop-opacity-90">
        <div
          className={`w-[90%] xl:w-1/4 lg:min-h-1/3 p-2 xl:p-8 bg-orange-600 border-[16px] border-black transition-opacity duration-200 ${
            isOpen3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-around items-start text-slate-200 w-full xl:w-full">
            <h3 className="font-[family-name:var(--font-strike)] text-sky-300">
              Ingrédients
            </h3>
            <ul className="pl-4">
              <li>
                <p>4 cuisses de poulet</p>
              </li>
              <li>
                <p>200 g d&apos;abricots secs</p>
              </li>
              <li>
                <p>100 g d&apos;amandes effilées</p>
              </li>
              <li>
                <p>2 oignons, finement hachés</p>
              </li>
              <li>
                <p>2 cuillères à soupe de miel</p>
              </li>
              <li>
                <p>2 cuillères à soupe d&apos;huile d&apos;olive</p>
              </li>
              <li>
                <p>1 cuillère à café de cannelle</p>
              </li>
              <li>
                <p>1 cuillère à café de cumin</p>
              </li>
              <li>
                <p>1 pincée de safran</p>
              </li>
              <li>
                <p>Sel et poivre</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[90%] text-center xl:w-1/3 lg:min-h-1/3">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-black mb-8">
            Tajine de poulet aux abricots et amandes
          </h1>
          <button
            onClick={handleClick3}
            className="ml-4 p-2 px-4 flex flex-row justify-around items-center bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-100 ease-in-out group border-black border-0 hover:border-4"
          >
            <h3 className="px-2 group-hover:scale-105 transition-all duration-100 ease-in-out">
              Cuisinons
            </h3>
            <span className="block transform transition-all opacity-0 translate-x-8 duration-100 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              <Image src={`/cook.svg`} alt="go" width="24" height="24" />
            </span>
          </button>
        </div>
        <div
          className={`w-[90%] xl:w-1/4 lg:min-h-1/3 p-2 xl:p-8 bg-orange-600 border-[16px] border-black transition-opacity duration-200 ${
            isOpen3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="font-[family-name:var(--font-strike)] text-sky-300">
            Instructions
          </h3>
          <ul className="pl-4">
            <li>
              <p>
                Chauffe l&apos;huile d&apos;olive dans un tajine ou une grande
                poêle. Fais revenir les cuisses de poulet jusqu&apos;à ce
                qu&apos;elles soient dorées.
              </p>
            </li>
            <li>
              <p>
                Ajoute les oignons hachés et fais-les revenir jusqu&apos;à ce
                qu&apos;ils soient translucides.
              </p>
            </li>
            <li>
              <p>
                Ajoute le miel, la cannelle, le cumin, le safran, le sel et le
                poivre. Mélange bien.
              </p>
            </li>
            <li>
              <p>
                Ajoute les abricots secs et un peu d&apos;eau. Couvre et laisse
                mijoter à feu doux pendant 45 minutes.
              </p>
            </li>
            <li>
              <p>
                Fais griller les amandes effilées dans une poêle sèche
                jusqu&apos;à ce qu&apos;elles soient dorées.
              </p>
            </li>
            <li>
              <p>
                Au moment de servir, garnis le tajine avec les amandes grillées.
                Accompagne de couscous ou de pain marocain.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
