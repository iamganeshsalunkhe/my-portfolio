import { Card, CardContent } from "../components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden ">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-muted/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection animation="slide-left" delay={400}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=400&fit=crop"
              alt="Working on laptop"
              className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={600}>
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-normal text-gray-500">
                  I’m a dedicated full-stack web developer with a strong
                  foundation in the MERN stack, currently focused on building
                  scalable, real-world applications from scratch. Whether it’s
                  designing intuitive UIs with React and Tailwind or managing
                  data flows using Express and MongoDB/MySQL, I approach every
                  project with curiosity and a commitment to clean, maintainable
                  code.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed font-normal text-gray-500">
                  Outside of development, I’m deeply invested in sharpening my
                  problem-solving skills through daily DSA practice and staying
                  consistent with my personal fitness routine. I believe success
                  is built on discipline, not luck — and I bring that same
                  mindset to every project, challenge, and opportunity in tech.
                </p>
              </div>

              <Card className="border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-8">
                  <h3 className="font-semibold mb-6 text-xl text-primary">
                    Quick Facts
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                      <span className="text-2xl">🧠</span>
                      <span className="font-medium">
                        Self-Taught Full Stack Developer
                      </span>
                    </li>
                    <li className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                      <span className="text-2xl">📚</span>
                      <span className="font-medium">
                        Always Learning – From Docs, Projects & Mistakes
                      </span>
                    </li>
                    <li className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                      <span className="text-2xl">💡 </span>
                      <span className="font-medium">
                        {" "}
                        Believer in consistency {">"} motivation
                      </span>
                    </li>
                    <li className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                      <span className="text-2xl">☕</span>
                      <span className="font-medium">Coffee Enthusiast</span>
                    </li>
                    <li className="flex items-center gap-3 hover:text-foreground transition-colors duration-200">
                      <span className="text-2xl">🏋️‍♂️</span>
                      <span className="font-medium">Fitness Freak</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
