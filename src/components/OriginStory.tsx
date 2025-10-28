import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const OriginStory = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="origin" className="py-24 px-6 bg-gradient-section">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Where It All Began
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Indikaara was born from a simple yet powerful idea: to bridge the gap between 
                traditional craftsmanship and modern innovation. Our founders recognized the 
                untapped potential in combining time-honored techniques with contemporary design.
              </p>
              <p>
                What started as a small workshop has grown into a movement, celebrating the 
                richness of our heritage while embracing the possibilities of tomorrow.
              </p>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="aspect-square rounded-2xl bg-gradient-hero shadow-glow animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
