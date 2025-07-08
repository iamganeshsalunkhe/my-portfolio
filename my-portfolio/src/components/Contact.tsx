import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-32 px-4 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/50 relative overflow-hidden"
    >
      {/* Enhanced background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-br from-pink-400/5 to-violet-500/5 rounded-full blur-2xl" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_60%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 select-none">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Get In Touch
            </h2>
            <div className="mt-4 h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg" />
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's work together
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:bg-white/80 hover:border-blue-200/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">
                    Email
                  </p>
                  <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 w-11/12 md:w-full">
                    ganeshsalunkhe1998@gmail.com
                  </span>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:bg-white/80 hover:border-emerald-200/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative p-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">
                    Phone
                  </p>
                  <span className="text-lg font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                    +91 9834610263
                  </span>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:bg-white/80 hover:border-orange-200/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative p-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medium text-slate-500 mb-1">
                    Location
                  </p>
                  <span className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-300 w-11/12 md:w-full">
                    Pune/Sangli, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating orb effect */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125" />

            <CardHeader className="relative z-10 pb-6">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Send me a message
              </CardTitle>
              <CardDescription className="text-base text-slate-600">
                I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10 select-none">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 border-2 border-slate-200 focus:border-blue-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white text-black w-11/12 md:w-full"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 border-2 border-slate-200 focus:border-blue-400 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white focus:bg-white text-black w-11/12 md:w-full"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2 w-full">
                  <Label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-11/12 min-h-[100px] md:min-h-[140px] px-4 py-3 border-2 border-slate-200 rounded-md bg-white/80 backdrop-blur-sm text-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus:border-blue-400 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 resize-none hover:bg-white focus:bg-white text-black  "
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className=" md:w-full h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base font-semibold relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>
            </CardContent>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Card>
        </div>
      </div>
    </section>
  );
};
