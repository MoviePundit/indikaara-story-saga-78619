import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  animationType?: "fade" | "wave" | "slide";
}

export const AnimatedText = ({ 
  text, 
  className = "", 
  staggerDelay = 50,
  animationType = "wave"
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const characters = text.split("");

  const getAnimationClass = (index: number) => {
    const baseDelay = `${index * staggerDelay}ms`;
    
    switch (animationType) {
      case "fade":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4";
      case "slide":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-4";
      case "wave":
      default:
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8";
    }
  };

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${getAnimationClass(index)}`}
          style={{
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

interface GradientTextProps {
  text: string;
  className?: string;
}

export const GradientText = ({ text, className = "" }: GradientTextProps) => {
  return (
    <span className={`bg-gradient-hero bg-clip-text text-transparent animate-gradient ${className}`}>
      {text}
    </span>
  );
};

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const TypewriterText = ({ 
  text, 
  className = "",
  speed = 100 
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
