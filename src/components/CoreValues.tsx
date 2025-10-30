import { Heart, Lightbulb, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "@/components/AnimatedText";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into everything we create, driven by love for our craft and community.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries while respecting traditions, we blend old and new seamlessly.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building meaningful relationships with artisans, customers, and partners worldwide.",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Unwavering commitment to quality and craftsmanship in every detail.",
    color: "primary",
  },
];

export const CoreValues = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-gradient-section">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <AnimatedText 
              text="Our Core Values" 
              animationType="wave"
              staggerDelay={100}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <AnimatedText 
              text="The principles that drive us forward every day"
              animationType="fade"
              staggerDelay={30}
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105 ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-xl bg-${value.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                  <value.icon className={`w-7 h-7 text-${value.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
