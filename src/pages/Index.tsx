
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Feedback from "@/components/Feedback";
import Vision from "@/components/Vision";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Feedback />
        <Vision />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
