import { Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Creative Director",
    bio: "With 15 years in traditional crafts, Priya bridges heritage and contemporary design.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "Arjun Patel",
    role: "Head of Artisan Relations",
    bio: "Connecting with artisan communities across India to preserve and promote their craft.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
  },
  {
    name: "Meera Reddy",
    role: "Sustainability Lead",
    bio: "Ensuring every product meets our high standards for environmental responsibility.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Karthik Menon",
    role: "Operations Director",
    bio: "Making sure quality and craftsmanship reach customers worldwide seamlessly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

export const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals dedicated to celebrating craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'animate-rotate-in' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="relative flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-xl object-cover ring-2 ring-border group-hover:ring-primary/50 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
