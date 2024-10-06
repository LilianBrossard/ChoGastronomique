"use client";
import { useState } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="absolute w-full h-screen -z-20 bg-slate-950">
        <Image
          src={`/pizza.jpg`}
          alt="pizza"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={`transition-all duration-700 ease-in-out ${
            isOpen ? "blur-lg opacity-30" : "blur-none"
          }`}
        />
      </div>
      <div className=" h-2 lg:h-8"></div>
      <div className="mx-2 lg:mx-8 mb-2 lg:mb-8 p-2 lg:p-4 border-4 border-orange-400 rounded-xl bg-slate-800 flex flex-row justify-start items-end flex-wrap">
        <h1 className="font-[family-name:var(--font-strike)] text-orange-500 text-4xl lg:text-6xl xl:text-8xl">
          Pizza au Poulet et Pesto
        </h1>
        <button
          onClick={handleClick}
          className="flex flex-row justify-start flex-nowrap items-end animate-pulse"
        >
          {!isOpen && (
            <span className="text-sky-300 pr-4">Voir la recette</span>
          )}
          {isOpen && (
            <span className="text-sky-300 pr-4">Masquer la recette</span>
          )}
          <Image
            src={`./arrow.svg`}
            alt="scroll"
            width="25"
            height="25"
            className={`transition-transform duration-700 ${
              isOpen ? "rotate-180" : "rotate-0"
            } pl-2`}
          />
        </button>
      </div>
      <div
        className={`transition-transform duration-700 ${
          isOpen ? "translate-x-0 scale-100" : "translate-x-[110%] scale-75"
        } bg-slate-700  lg:w-3/4 mx-2 lg:ml-[20%] p-2 lg:p-4 rounded-xl`}
      >
        <Image
          src={`./cross.svg`}
          alt="cross"
          width="40"
          height="40"
          className="absolute top-0 right-0 z-10"
          onClick={handleClick}
        />
        <div className="flex flex-col lg:flex-row justify-around lg:items-center text-slate-200">
          <div>
            <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
              Ingrédient
            </h3>
            <ul className="pl-4">
              <li>
                <h4 className="pt-2 text-sky-300">Pour la pâte</h4>
                <ul className="pl-4">
                  <li>
                    <p>500 g de farine</p>
                  </li>
                  <li>
                    <p>1 sachet de levure de boulanger</p>
                  </li>
                  <li>
                    <p>300 ml d’eau tiède</p>
                  </li>
                  <li>
                    <p>2 cuillères à soupe d’huile d’olive</p>
                  </li>
                  <li>
                    <p>1 cuillère à café de sel</p>
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="pt-2 text-sky-300">Pour la garniture</h4>
                <ul className="pl-4">
                  <li>
                    <p>200 g de sauce pesto (maison ou du commerce)</p>
                  </li>
                  <li>
                    <p>300 g de filets de poulet, coupés en morceaux</p>
                  </li>
                  <li>
                    <p>200 g de mozzarella râpée</p>
                  </li>
                  <li>
                    <p>100 g de tomates cerises, coupées en deux</p>
                  </li>
                  <li>
                    <p>1 oignon rouge, finement tranché</p>
                  </li>
                  <li>
                    <p>50 g de parmesan râpé</p>
                  </li>
                  <li>
                    <p>Quelques feuilles de basilic frais</p>
                  </li>
                  <li>
                    <p>Sel et poivre au goût</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <div>
              <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                Instructions
              </h3>
              <ul className="pl-4">
                <li>
                  <h4 className="pt-2 text-sky-300">Préparation de la pâte</h4>
                  <ul className="pl-4">
                    <li>
                      <p>Dans un grand bol, mélange la farine et le sel.</p>
                    </li>
                    <li>
                      <p>
                        Dissous la levure dans l’eau tiède et laisse reposer
                        pendant 5 minutes.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ajoute l’eau avec la levure et l’huile d’olive au
                        mélange de farine. Pétris jusqu’à obtenir une pâte lisse
                        et élastique.
                      </p>
                    </li>
                    <li>
                      <p>
                        Couvre le bol avec un torchon humide et laisse lever
                        pendant environ 1 heure, jusqu’à ce que la pâte double
                        de volume.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4 className="pt-2 text-sky-300">
                    Préparation de la garniture
                  </h4>
                  <ul className="pl-4">
                    <li>
                      <p>Préchauffe le four à 220°C.</p>
                    </li>
                    <li>
                      <p className="text-wrap">
                        Dans une poêle, fais revenir les morceaux de poulet avec
                        un peu d’huile d’olive jusqu’à ce qu’ils soient dorés.
                        Assaisonne avec du sel et du poivre.
                      </p>
                    </li>
                    <li>
                      <p>
                        Étale la pâte sur une surface farinée et transfère-la
                        sur une plaque de cuisson.
                      </p>
                    </li>
                    <li>
                      <p>Étale la sauce pesto sur la pâte.</p>
                    </li>
                    <li>
                      <p>
                        Répartis les morceaux de poulet, les tomates cerises, et
                        l’oignon rouge sur la pizza.
                      </p>
                    </li>
                    <li>
                      <p>Saupoudre de mozzarella et de parmesan râpé.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4 className="pt-2 text-sky-300">Cuisson </h4>
                  <ul className="pl-4">
                    <li>
                      <p>
                        Enfourne la pizza pendant 15-20 minutes, jusqu’à ce que
                        la croûte soit dorée et le fromage fondu et légèrement
                        doré.
                      </p>
                    </li>
                    <li>
                      <p>
                        À la sortie du four, garnis avec quelques feuilles de
                        basilic frais.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
