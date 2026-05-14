import GradientBackground from "./components/GradientBackground";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import HintStack from "./components/HintStack";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <GradientBackground />
      <TopBar />

      <div className="flex-1 flex flex-col justify-center px-6 py-8 z-10 max-w-md mx-auto w-full">
        <Hero />
        <HintStack />
        <LeadForm />
      </div>

      <Footer />
    </main>
  );
}
