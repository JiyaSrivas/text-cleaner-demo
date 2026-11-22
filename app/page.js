import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ApiReference from "./components/ApiReference";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Demo />
        <Features />
        <HowItWorks />
        <ApiReference />
      </main>
      <Footer />
    </>
  );
}
