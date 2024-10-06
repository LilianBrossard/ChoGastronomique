import ScrollSection from "@/components/bloc/ScrollSection";
import Hero from "@/components/bloc/Hero";
import FirstR from "@/components/bloc/FirstR";

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
      <div className="bg-slate-500 text-2xl text-white w-full h-screen"></div>
    </main>
  );
}
