import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { WebGLBackground } from "@/components/WebGLBackground";
import { AnimatedText, GradientText } from "@/components/AnimatedText";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-section overflow-hidden">
      {/* WebGL Particle Animation */}
      <WebGLBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
      
      <ThemeToggle />
      <div className="relative z-10 text-center space-y-8 px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          <AnimatedText 
            text="Welcome to " 
            className="bg-gradient-hero bg-clip-text text-transparent"
            animationType="wave"
            staggerDelay={80}
          />
          <GradientText text="Indikaara" className="animate-pulse" />
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "600ms" }}>
          <AnimatedText 
            text="Discover our journey of passion, tradition, and innovation"
            animationType="fade"
            staggerDelay={30}
          />
        </p>
        <div className="animate-scale-up" style={{ animationDelay: "400ms" }}>
          <Link
            to="/story"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:scale-110 animate-glow"
          >
            Read Our Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
