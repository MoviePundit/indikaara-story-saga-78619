import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-section">
      <div className="text-center space-y-8 px-6 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Welcome to Indikaara
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Discover our journey of passion, tradition, and innovation
        </p>
        <Link
          to="/story"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:scale-105"
        >
          Read Our Story
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Index;
