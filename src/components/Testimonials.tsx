import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AnimatedText } from "@/components/AnimatedText";

const testimonials = [
  {
    quote: "The craftsmanship is extraordinary. Every piece tells a story and you can feel the passion that went into creating it.",
    author: "Sarah Mitchell",
    role: "Interior Designer, London",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    quote: "Supporting Indikaara means supporting real artisans. The quality is unmatched and the cultural richness is beautiful.",
    author: "David Chen",
    role: "Collector, Singapore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    quote: "I've been buying from Indikaara for years. Their commitment to sustainability and tradition is truly inspiring.",
    author: "Aisha Rahman",
    role: "Sustainability Advocate, Dubai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <AnimatedText 
              text="What People Say" 
              animationType="wave"
              staggerDelay={110}
            />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <AnimatedText 
              text="Stories from our global community"
              animationType="fade"
              staggerDelay={35}
            />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`group p-8 rounded-2xl bg-card border border-border hover:shadow-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6 group-hover:rotate-12 group-hover:text-primary/50 transition-all duration-300" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 group-hover:scale-110 transition-all duration-300"
                />
                <div>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
