import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "@/components/AnimatedText";

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Founded with a vision to celebrate traditional craftsmanship",
  },
  {
    year: "2019",
    title: "First Workshop",
    description: "Opened our first collaborative space for artisans",
  },
  {
    year: "2020",
    title: "Going Digital",
    description: "Launched our online platform to reach global audiences",
  },
  {
    year: "2022",
    title: "Expansion",
    description: "Partnered with 100+ artisans across multiple regions",
  },
  {
    year: "2024",
    title: "Today",
    description: "Leading the way in sustainable, authentic craftsmanship",
  },
];

export const Timeline = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <AnimatedText 
              text="Our Journey" 
              animationType="wave"
              staggerDelay={120}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <AnimatedText 
              text="Key milestones that shaped who we are today"
              animationType="fade"
              staggerDelay={30}
            />
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } transition-all duration-700 ${isVisible ? (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Year Badge */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold shadow-glow animate-glow hover:scale-125 transition-transform duration-300 z-10">
                  {milestone.year}
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  } ml-20 md:ml-0`}
                >
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:shadow-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
