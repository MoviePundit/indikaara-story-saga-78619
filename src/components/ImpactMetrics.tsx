import { Users, Globe, PackageCheck, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const metrics = [
  {
    icon: Users,
    value: "100+",
    label: "Artisan Partners",
    description: "Skilled craftspeople we collaborate with",
  },
  {
    icon: Globe,
    value: "25",
    label: "Countries Reached",
    description: "Global community of customers",
  },
  {
    icon: PackageCheck,
    value: "10K+",
    label: "Products Delivered",
    description: "Authentic items shipped worldwide",
  },
  {
    icon: Sparkles,
    value: "95%",
    label: "Satisfaction Rate",
    description: "Happy customers who return",
  },
];

export const ImpactMetrics = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-gradient-section">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Making a difference in communities and lives around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-soft ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center group-hover:animate-glow">
                <metric.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
