import ScrollSection from "@/components/bloc/ScrollSection";
import ScrollTitle from "@/components/bloc/ScrollTitle";
import Hero from "@/components/bloc/Hero";
import FirstR from "@/components/bloc/FirstR";
import StickySlide from "@/components/bloc/stickySlide";
import DessertTitle from "@/components/bloc/DessertTitle";
import Dessert from "@/components/bloc/Dessert";
import LastTitle from "@/components/bloc/LastTitle";
import Footer from "@/components/bloc/Footer";

// font-[family-name:var(--font-aquire)]
export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-br from-orange-500 via-orange-700 to-orange-500 overflow-y-hidden">
        <Hero />
      </div>
      <div className="w-full h-screen">
        <FirstR />
      </div>
      <ScrollSection />
      <div className="bg-black text-2xl text-white w-full">
        <ScrollTitle />
      </div>
      <div className="w-full">
        <StickySlide />
      </div>
      <div className="bg-white w-full border-y-orange-500 border-y-8">
        <DessertTitle />
      </div>
      <div className="w-full min-h-screen heroBg">
        <Dessert />
      </div>
      <div className="w-full h-48 text-white">
        <LastTitle />
      </div>
      <div className="w-full h-8 text-sky-700">
        <Footer />
      </div>
    </main>
  );
}
