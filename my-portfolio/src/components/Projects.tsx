import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Mobile Shopping Application",
      description:
        "Designed and developed a full-stack web application using a microfrontend architecture for modular frontend experiences, a monolithic backend for centralized business logic, and a single shared database for consistent data management.",
      image:
        "https://plus.unsplash.com/premium_photo-1670863088251-500151f2117b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vYmlsZSUyMHNob3BwaW5nJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
      technologies: [
        "Microservice Architecture",
        "JavaScript",
        "React.js",
        "Node.js",
        "MySQL",
        "Sequelize",
        "Stripe",
        "AWS S3",
        "Tailwind CSS",
        "DaisyUI",
        "Tailwind UI",
      ],
      githubUrl:
        "https://github.com/iamganeshsalunkhe/mobile-shopping-application",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Hotel Booking Application",
      description:
        "Built a full-stack Hotel Booking Platform (HBP) from scratch using a monolithic architecture with React for the frontend, Node.js and Express for the backend, and MySQL with sequelize ORM for the database. Included separate dashboards for vendors, and customers, each with role-specific functionalities",
      image:
        "https://images.unsplash.com/photo-1695806109708-f5d5a2da99bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBib29raW5nJTIwYXBwbGljYXRpb25zfGVufDB8fDB8fHww",
      technologies: [
        "Monolithic",
        "JavaScript",
        "React.js",
        "Node.js",
        "MySQL",
        "Sequelize",
        "Express.js",
        "JWT",
        "DaisyUI",
        "Tailwind UI",
      ],
      githubUrl: "https://github.com/iamganeshsalunkhe/Hotel-Booking-Project",
      liveUrl: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-br from-slate-50/30 to-blue-50/20 relative overflow-hidden"
    >
      {/* Simplified background decoration */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-100/20 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200/60 bg-white/90 backdrop-blur-sm hover:-translate-y-2 group ${
                project.featured ? "ring-1 ring-blue-200/50 shadow-lg" : ""
              }`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-slate-700 border-slate-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 select-none">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium text-sm shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                    GitHub Repo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
