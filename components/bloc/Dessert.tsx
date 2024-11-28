"use client";
import Image from "next/image";

export default function Dessert() {
  return (
    <div className="w-full flex flex-col gap-4 xl:gap-16 p-4 xl:p-16">
      <div className="w-full flex flex-col lg:flex-row justify-around gap-4 xl:gap-16">
        <div className="w-11/12 min-h-96 flex flex-col justify-between pb-4 bg-black border-white border-2 rounded-3xl hover:scale-105 hover:bg-[#111111] transition-all duration-300">
          <Image
            src={`/cheesecake.jpg`}
            alt="cheesecake"
            width="2000"
            height="2000"
            style={{ objectFit: "cover" }}
            className="w-full h-48 rounded-tr-3xl rounded-tl-3xl"
          />
          <h2 className="text-2xl font-[family-name:var(--font-strike)] p-4">
            Cheesecake au citron et au miel
          </h2>
          <div className="p-4">
            <p>
              Écrase les biscuits digestifs pour obtenir une base croustillante.
            </p>
            <p>Mélange le fromage frais, le miel et le jus de citron.</p>
            <p>
              Verse la préparation sur la base et réfrigère pendant au moins 4
              heures.
            </p>
          </div>
        </div>
        <div className="w-11/12 min-h-96 flex flex-col justify-between pb-4 bg-black border-white border-2 rounded-3xl hover:scale-105 hover:bg-[#111111] transition-all duration-300">
          <Image
            src={`/moussechocolat.jpg`}
            alt="mousse"
            width="2000"
            height="2000"
            style={{ objectFit: "cover" }}
            className="w-full h-48 rounded-tr-3xl rounded-tl-3xl"
          />
          <h2 className="text-2xl font-[family-name:var(--font-strike)] p-4">
            Mousse au chocolat et framboises
          </h2>
          <div className="p-4">
            <p>Fais fondre le chocolat noir au bain-marie.</p>
            <p>Mélange le chocolat fondu avec des jaunes d œufs et du sucre.</p>
            <p>
              Incorpore délicatement les blancs en neige et ajoute les
              framboises.
            </p>
          </div>
        </div>
        <div className="w-11/12 min-h-96 flex flex-col justify-between pb-4 bg-black border-white border-2 rounded-3xl hover:scale-105 hover:bg-[#111111] transition-all duration-300">
          <Image
            src={`/tartelette.jpg`}
            alt="tartelette"
            width="2000"
            height="2000"
            style={{ objectFit: "cover" }}
            className="w-full h-48 rounded-tr-3xl rounded-tl-3xl"
          />
          <h2 className="text-2xl font-[family-name:var(--font-strike)] p-4">
            Tartelette aux fraises et crème pâtissière
          </h2>
          <div className="p-4">
            <p>Prépare une pâte sablée et fais-la cuire à blanc.</p>
            <p>Prépare une crème pâtissière et laisse-la refroidir.</p>
            <p>
              Garnis les tartelettes de crème pâtissière et dispose les fraises
              coupées en tranches sur le dessus.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-around gap-4 xl:gap-16">
        <div className="w-11/12 min-h-96 flex flex-col justify-between pb-4 bg-black border-white border-2 rounded-3xl hover:scale-105 hover:bg-[#111111] transition-all duration-300">
          <Image
            src={`/brownie.jpg`}
            alt="brownie"
            width="2000"
            height="2000"
            style={{ objectFit: "cover" }}
            className="w-full h-48 rounded-tr-3xl rounded-tl-3xl"
          />
          <h2 className="text-2xl font-[family-name:var(--font-strike)] p-4">
            Brownie au chocolat et noix
          </h2>
          <div className="p-4">
            <p>Fais fondre le chocolat et le beurre au bain-marie.</p>
            <p>
              Mélange les œufs et le sucre, puis ajoute le mélange
              chocolat-beurre.
            </p>
            <p>
              Incorpore la farine et les noix hachées, puis fais cuire au four à
              180°C pendant 25 minutes.
            </p>
          </div>
        </div>
        <div className="w-11/12 min-h-96 flex flex-col justify-between pb-4 bg-black border-white border-2 rounded-3xl hover:scale-105 hover:bg-[#111111] transition-all duration-300">
          <Image
            src={`/tiramisu.png`}
            alt="tiramisu"
            width="2000"
            height="2000"
            style={{ objectFit: "cover" }}
            className="w-full h-48 rounded-tr-3xl rounded-tl-3xl"
          />
          <h2 className="text-2xl font-[family-name:var(--font-strike)] p-4">
            Tiramisu classique
          </h2>
          <div className="p-4">
            <p>Prépare un mélange de mascarpone, jaunes d œufs et sucre.</p>
            <p>Trempe les biscuits à la cuillère dans du café fort.</p>
            <p>
              Alterne des couches de biscuits imbibés et de crème de mascarpone,
              puis saupoudre de cacao en poudre. Réfrigère pendant au moins 4
              heures.
            </p>
          </div>
        </div>
        <div className="w-11/12 min-h-96 flex flex-col justify-between pb-4 bg-black border-white border-2 rounded-3xl hover:scale-105 hover:bg-[#111111] transition-all duration-300">
          <Image
            src={`/pannacotta.jpg`}
            alt="pannacotta"
            width="2000"
            height="2000"
            style={{ objectFit: "cover" }}
            className="w-full h-48 rounded-tr-3xl rounded-tl-3xl"
          />
          <h2 className="text-2xl font-[family-name:var(--font-strike)] p-4">
            Panna cotta à la vanille et coulis de fruits rouges
          </h2>
          <div className="p-4">
            <p>
              Fais chauffer de la crème avec du sucre et une gousse de vanille.
            </p>
            <p>Ajoute de la gélatine et laisse refroidir dans des moules.</p>
            <p>
              Prépare un coulis de fruits rouges et verse-le sur la panna cotta
              démoulée juste avant de servir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
