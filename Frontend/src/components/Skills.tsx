import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Code, Database, Globe, Cpu ,Server,Cloud} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
      gradient: "from-cyan-400/20 via-blue-500/20 to-indigo-600/20",
      iconGradient: "from-cyan-400 to-blue-600",
      borderGradient: "from-cyan-200/30 to-blue-300/30",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST API's", "Microservices"],
      gradient: "from-emerald-400/20 via-green-500/20 to-teal-600/20",
      iconGradient: "from-emerald-400 to-green-600",
      borderGradient: "from-emerald-200/30 to-green-300/30",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Sequelize", "Mongoose"],
      gradient: "from-cyan-400/20 via-blue-500/20 to-indigo-600/20",
      iconGradient: "from-cyan-400 to-blue-600",
      borderGradient: "from-cyan-200/30 to-blue-300/30",
    },
    {
      title: "Dev Tools",
      icon: Code,
      skills: ["Git", "GitHub", "Docker", "Postman", "Figma"],
      gradient: "from-amber-400/20 via-orange-500/20 to-red-500/20",
      iconGradient: "from-amber-400 to-orange-600",
      borderGradient: "from-amber-200/30 to-orange-300/30",
    },
    {
      title: "Development Practices",
      icon: Cpu,
      skills: ["MVCS Architecture", "Agile Methodology", "CI/CD"],
      gradient: "from-violet-400/20 via-purple-500/20 to-fuchsia-600/20",
      iconGradient: "from-violet-400 to-purple-600",
      borderGradient: "from-violet-200/30 to-purple-300/30",
    },
    {
      title: "Cloud & Integrations",
      icon: Cloud, 
      skills: ["AWS S3", "Razorpay"],
      gradient: "from-sky-400/20 via-blue-500/20 to-indigo-600/20",
      iconGradient: "from-sky-400 to-blue-600",
      borderGradient: "from-sky-200/30 to-blue-300/30",
    },
  ];

  return (
    <section 
    id="skills"
    className="py-32 px-4 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 dark:from-slate-900/50 dark:via-background dark:to-slate-800/30 relative overflow-hidden select-none">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-violet-400/5 to-pink-600/5 rounded-full blur-2xl" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                Skills & Technologies
              </h2>
              <div className="mt-4 h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg" />
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light">
              Crafting digital experiences with modern technologies
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2  xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              animation="scale-up"
              delay={400 + index * 150}
            >
              <Card
                key={category.title}
                className="group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-105`}
                />

                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                  style={{ padding: "2px" }}
                >
                  <div className="h-full w-full bg-white dark:bg-slate-900 rounded-lg" />
                </div>

                {/* Floating orb effect */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-125" />

                <CardHeader className="text-center relative z-10 pb-6">
                  <div className="mb-6 relative flex justify-center">
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Icon container with gradient */}
                    <div
                      className={`relative p-4 rounded-2xl bg-gradient-to-br ${category.iconGradient} shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12`}
                    >
                      <category.icon className="h-8 w-8 text-white relative z-10" />
                    </div>
                  </div>

                  <CardTitle
                    className={`text-2xl font-bold bg-gradient-to-r ${category.iconGradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                  >
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 pb-8">
                  <div className="flex flex-wrap gap-2.5 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer backdrop-blur-sm "
                        style={{
                          animationDelay: `${index * 150 + skillIndex * 100}ms`,
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.iconGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
