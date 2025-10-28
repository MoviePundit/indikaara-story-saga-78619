import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-story.jpg";

export const StoryHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A journey of passion, innovation, and tradition woven together to create something extraordinary
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <a
              href="#origin"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:scale-105"
            >
              Discover Our Journey
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
