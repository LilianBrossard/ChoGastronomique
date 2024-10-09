import Image from "next/image";
export default function Card() {
  return (
    <div className="flex items-center overflow-hidden">
      <div className=" w-screen h-screen p-2 lg:p-12 xl:px-48">
        <div className=" xl:block xl:p-4 xl:hover:bg-black duration-500 ease-in-out h-full">
          <div className="flex flex-col xl:flex-row justify-start lg:justify-around h-full p-2 xl:p-8 xl:hover:bg-orange-500 transition-colors duration-500 ease-in-out">
            <div>
              <Image
                src={`/quinoa.jpg`}
                alt="salade"
                width="2000"
                height="2000"
                style={{ objectFit: "cover" }}
                className="max-w-[96%] xl:w-full h-[30vh] xl:h-full rounded-tl-3xl rounded-tr-3xl xl:rounded-tr-none xl:rounded-bl-3xl "
              />
            </div>
            <div className="w-10 h-4"></div>
            <div className="flex flex-col justify-around items-start text-slate-200 w-full xl:w-full">
              <h1 className="font-[family-name:var(--font-strike)] text-slate-200 text-2xl lg:text-4xl xl:text-6xl">
                Salade de Quinoa aux Légumes Grillés
              </h1>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Ingrédient
                </h3>

                <ul className="pl-4">
                  <li>
                    <p>200 g de quinoa</p>
                  </li>
                  <li>
                    <p>1 courgette, coupée en rondelles</p>
                  </li>
                  <li>
                    <p>1 poivron rouge, coupé en lanières</p>
                  </li>
                  <li>
                    <p>100 g de feta émiettée</p>
                  </li>
                  <li>
                    <p>2 cuillères à soupe d’huile d’olive</p>
                  </li>
                  <li>
                    <p>Jus d’un citron</p>
                  </li>
                  <li>
                    <p>Quelques feuilles de menthe fraîche</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Instructions
                </h3>
                <ul className="pl-4">
                  <li>
                    <p>
                      Fais cuire le quinoa selon les instructions du paquet et
                      laisse refroidir.
                    </p>
                  </li>
                  <li>
                    <p>
                      Préchauffe le four à 200°C. Dispose les légumes sur une
                      plaque de cuisson, arrose-les d’huile d’olive, sale et
                      poivre. Fais griller pendant 20 minutes.
                    </p>
                  </li>
                  <li>
                    <p>
                      Mélange le quinoa, les légumes grillés, la feta et le jus
                      de citron dans un grand bol.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen h-screen p-2 lg:p-12 xl:px-48">
        <div className=" xl:block xl:p-4 xl:hover:bg-black duration-500 ease-in-out h-full">
          <div className="flex flex-col xl:flex-row justify-start lg:justify-around h-full p-2 xl:p-8 xl:hover:bg-orange-500 transition-colors duration-500 ease-in-out">
            <div>
              <Image
                src={`/Omelette.jpg`}
                alt="salade"
                width="2000"
                height="2000"
                style={{ objectFit: "cover" }}
                className="max-w-[96%] xl:w-full h-[30vh] xl:h-full rounded-tl-3xl rounded-tr-3xl xl:rounded-tr-none xl:rounded-bl-3xl "
              />
            </div>
            <div className="w-10 h-4"></div>
            <div className="flex flex-col justify-around items-start text-slate-200 w-full xl:w-full">
              <h1 className="font-[family-name:var(--font-strike)] text-slate-200 text-2xl lg:text-4xl xl:text-6xl">
                Omelette aux Champignons et Épinards
              </h1>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Ingrédient
                </h3>

                <ul className="pl-4">
                  <li>
                    <p>3 oeufs</p>
                  </li>
                  <li>
                    <p>100 g de champignons, tranchés</p>
                  </li>
                  <li>
                    <p>50 g d’épinards frais</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Instructions
                </h3>
                <ul className="pl-4">
                  <li>
                    <p>Fais chauffer l’huile d’olive dans une poêle.</p>
                  </li>
                  <li>
                    <p>
                      Ajoute les champignons et fais-les revenir jusqu’à ce
                      qu’ils soient dorés.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ajoute les épinards et fais cuire jusqu’à ce qu’ils soient
                      flétris.
                    </p>
                  </li>
                  <li>
                    <p>
                      Bat les œufs avec du sel et du poivre, puis verse-les dans
                      la poêle.
                    </p>
                  </li>
                  <li>
                    <p>
                      Fais cuire jusqu’à ce que l’omelette soit prise, puis
                      plie-la en deux avant de servir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen h-screen p-2 lg:p-12 xl:px-48">
        <div className=" xl:block xl:p-4 xl:hover:bg-black duration-500 ease-in-out h-full">
          <div className="flex flex-col xl:flex-row justify-start lg:justify-around h-full p-2 xl:p-8 xl:hover:bg-orange-500 transition-colors duration-500 ease-in-out">
            <div>
              <Image
                src={`/pates.jpg`}
                alt="salade"
                width="2000"
                height="2000"
                style={{ objectFit: "cover" }}
                className="max-w-[96%] xl:w-full h-[30vh] xl:h-full rounded-tl-3xl rounded-tr-3xl xl:rounded-tr-none xl:rounded-bl-3xl "
              />
            </div>
            <div className="w-10 h-4"></div>
            <div className="flex flex-col justify-around items-start text-slate-200 w-full xl:w-full">
              <h1 className="font-[family-name:var(--font-strike)] text-slate-200 text-2xl lg:text-4xl xl:text-6xl">
                Pâtes à l’Ail et au Parmesan
              </h1>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Ingrédient
                </h3>

                <ul className="pl-4">
                  <li>
                    <p>200 g de pâtes (spaghetti ou linguine)</p>
                  </li>
                  <li>
                    <p>3 gousses d’ail, émincées</p>
                  </li>
                  <li>
                    <p>50 g de parmesan râpé</p>
                  </li>
                  <li>
                    <p>Persil frais, haché (optionnel)</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Instructions
                </h3>
                <ul className="pl-4">
                  <li>
                    <p>
                      Fais cuire les pâtes selon les instructions du paquet.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dans une poêle, fais chauffer l’huile d’olive et ajoute
                      l’ail. Fais revenir jusqu’à ce qu’il soit doré.
                    </p>
                  </li>
                  <li>
                    <p>
                      Égoutte les pâtes et ajoute-les à la poêle. Mélange bien
                      pour enrober les pâtes d’huile et d’ail.
                    </p>
                    <p>
                      Ajoute le parmesan, mélange encore, et assaisonne avec du
                      sel et du poivre.
                    </p>
                    <p>Garnis de persil frais avant de servir, si désiré.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen h-screen p-2 lg:p-12 xl:px-48">
        <div className=" xl:block xl:p-4 xl:hover:bg-black duration-500 ease-in-out h-full">
          <div className="flex flex-col xl:flex-row justify-start lg:justify-around h-full p-2 xl:p-8 xl:hover:bg-orange-500 transition-colors duration-500 ease-in-out">
            <div>
              <Image
                src={`/avocat.jpg`}
                alt="salade"
                width="2000"
                height="2000"
                style={{ objectFit: "cover" }}
                className="max-w-[96%] xl:w-full h-[30vh] xl:h-full rounded-tl-3xl rounded-tr-3xl xl:rounded-tr-none xl:rounded-bl-3xl "
              />
            </div>
            <div className="w-10 h-4"></div>
            <div className="flex flex-col justify-around items-start text-slate-200 w-full xl:w-full">
              <h1 className="font-[family-name:var(--font-strike)] text-slate-200 text-2xl lg:text-4xl xl:text-6xl">
                Tartines à l’avocat
              </h1>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Ingrédient
                </h3>

                <ul className="pl-4">
                  <li>
                    <p>2 avocats mûrs</p>
                  </li>
                  <li>
                    <p>
                      4 tranches de pain (de préférence complet ou aux céréales)
                    </p>
                  </li>
                  <li>
                    <p>1 citron</p>
                  </li>
                  <li>
                    <p>Flocons de piment rouge (facultatif)</p>
                  </li>
                  <li>
                    <p>Huile d’olive (facultatif)</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-strike)] text-orange-300">
                  Instructions
                </h3>
                <ul className="pl-4">
                  <li>
                    <p>
                      Coupez les avocats en deux, retirez le noyau et récupérez
                      la chair dans un bol. Écrasez-la à la fourchette jusqu’à
                      obtenir une consistance crémeuse.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ajoutez le jus de citron, une pincée de sel et de poivre à
                      l’avocat écrasé. Mélangez bien. Vous pouvez également
                      ajouter des flocons de piment rouge pour un peu de
                      piquant.
                    </p>
                  </li>
                  <li>
                    <p>
                      Faites griller les tranches de pain jusqu’à ce qu’elles
                      soient dorées et croustillantes.
                    </p>
                  </li>
                  <li>
                    <p>
                      Étalez généreusement l’avocat assaisonné sur les tranches
                      de pain grillé. Arrosez d’un filet d’huile d’olive si vous
                      le souhaitez.
                    </p>
                  </li>
                  <li>
                    <p>
                      Servez immédiatement, éventuellement avec une salade verte
                      en accompagnement.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
