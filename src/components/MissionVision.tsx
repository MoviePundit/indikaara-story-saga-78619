import { Target, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const MissionVision = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mission & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that shape everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`group p-10 rounded-2xl border border-border bg-card hover:shadow-soft transition-all duration-500 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
            <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-6 group-hover:animate-glow">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower artisans and creators by providing a platform that celebrates 
              their craft while making it accessible to a global audience. We strive to 
              preserve traditional techniques while fostering innovation.
            </p>
          </div>

          <div className={`group p-10 rounded-2xl border border-border bg-card hover:shadow-soft transition-all duration-500 delay-200 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become a global leader in sustainable and culturally-rich products, 
              setting new standards for quality and authenticity. We envision a world 
              where tradition and innovation coexist harmoniously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
