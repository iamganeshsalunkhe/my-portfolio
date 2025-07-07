import { Button } from "../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block mt-10">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in delay-200">
          Ganesh Salunkhe
        </h1>

        <div className="relative mb-4 animate-fade-in delay-300">
          <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
            Full Stack Developer
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
          Passionate about creating functional and beautiful web applications that
          solve real-world problems
        </p>

        <div className="flex justify-center gap-4 mb-10 animate-fade-in delay-700">
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 hover:shadow-lg transition-all duration-200"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 hover:shadow-lg transition-all duration-200"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 hover:shadow-lg transition-all duration-200"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-6 mb-16 animate-fade-in delay-1000">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Get In Touch
          </Button>
        </div>

        <Button
          variant="link"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="animate-bounce hover:animate-none hover:scale-110 transition-transform duration-200"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};
