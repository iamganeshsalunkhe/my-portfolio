import { Button } from "../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 px-4 relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/5 dark:from-blue-400/20 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/5 to-cyan-500/10 dark:from-emerald-400/15 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-pink-400/5 to-violet-500/5 dark:from-pink-400/15 dark:to-violet-500/15 rounded-full blur-2xl" />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <AnimatedSection animation="scale-up" delay={200}>
          <div className="mb-8">
            <div className="relative inline-block mt-20">
              <img
                src="https://images.unsplash.com/photo-1619251598810-b086ea2c030a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20 dark:border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-slate-100 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            Ganesh Salunkhe
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="relative mb-4">
            <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
              Full Stack Developer
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={800}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications
            that solve real-world problems
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale-up" delay={1000}>
          <div className="flex justify-center gap-4 mb-10">
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:scale-110 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={1200}>
          <div className="flex justify-center gap-6 mb-16">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={1400}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="animate-none hover:animate-none hover:scale-110 transition-transform duration-200"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
