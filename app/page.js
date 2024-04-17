
import Navbar from "./components/NavBar/page";
import HeroSection from "./components/HeroSection/page";
import AboutSection from './components/AboutSection/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
