
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 space-y-4 md:space-y-6 pb-8 md:pb-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter gradient-text animate-slide-in">
              Sustainable AI for a Greener Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Reducing carbon footprints one prompt at a time. Our mission is to make AI more environmentally friendly without sacrificing performance.
            </p>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-[500px] aspect-square md:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-500/20 to-cyan-500/20 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Sustainable AI Visualization"
                className="rounded-2xl object-cover w-full h-full mix-blend-luminosity opacity-90 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
