import { ArrowRight, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "@/components/AnimatedText";

export const StoryCallToAction = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-gradient-section relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div ref={ref} className={`text-center space-y-8 transition-all duration-700 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-hero flex items-center justify-center shadow-glow animate-glow hover:scale-125 hover:rotate-12 transition-all duration-300">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            <AnimatedText 
              text="Be Part of Our Story" 
              animationType="wave"
              staggerDelay={90}
            />
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <AnimatedText 
              text="Join us in celebrating the artistry of traditional craftsmanship. Every purchase supports artisans and preserves cultural heritage."
              animationType="fade"
              staggerDelay={20}
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="/"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:scale-110"
            >
              Explore Our Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#origin"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-border bg-card text-foreground font-medium hover:border-primary/50 hover:shadow-soft transition-all hover:scale-110"
            >
              Learn More About Us
            </a>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span>Fair Trade</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Sustainable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
