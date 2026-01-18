import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">
            <span className="text-primary">Sujeeththan</span> Portfolio
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">
              Full-Stack Developer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter sm:text-5xl">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:300%_auto] animate-gradient-x">
                Kanagalingam Sujeeththan
              </span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
              Passionate developer with hands-on experience building responsive and scalable web applications.
              Skilled in designing RESTful APIs and creating intuitive user interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] shrink-0">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
            
            {/* Animated Circular Border Wrapper */}
            <div className="relative w-full h-full rounded-full p-1 overflow-hidden group">
              {/* Rotating Gradient Border - "Running" effect */}
              <div className="absolute inset-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-primary)_20deg,transparent_45deg)] group-hover:animate-[spin-slow_3s_linear_infinite]"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden ring-4 ring-primary/20 z-10 bg-background">
                <Image
                  src="/profile.jpeg"
                  alt="Kanagalingam Sujeeththan"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6 relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
              </h2>
              <div className="prose dark:prose-invert text-muted-foreground">
                <p>
                  Passionate Full-Stack Developer with hands-on experience building responsive and scalable web applications.
                  Skilled in designing RESTful APIs, integrating databases, and creating intuitive user interfaces.
                  Seeking opportunities to grow as a Full-Stack or Web Developer in a fast-paced tech environment.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium break-all">sujeethsujeeth487@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-sm font-medium">+94 76 050 5419</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-medium">Vavuniya, Srilanka</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React.js (Beginner)", "Next.js (Beginner)", "Node.js", "Express.js", "MongoDB"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              <h3 className="text-2xl font-bold tracking-tight mt-8">Certifications</h3>
              <Card>
                <CardHeader className="py-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-base">Legacy Responsive Web Design V8</CardTitle>
                      <CardDescription>Completed</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section id="experience" className="bg-secondary/20 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center">Education</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-background border-none shadow-lg">
                <CardHeader>
                  <div className="mb-2 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <CardTitle>UKI TECHNOLOGY SCHOOL</CardTitle>
                  <CardDescription>2025 - 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">MERN Stack Course</p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-lg">
                <CardHeader>
                  <div className="mb-2 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <CardTitle>GCE Advanced Level (A/L) - Technology</CardTitle>
                  <CardDescription>2022 - 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>Science for Technology: S</li>
                    <li>Engineering Technology: S</li>
                    <li>Information and Communication Technology: S</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-lg">
                <CardHeader>
                  <div className="mb-2 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <CardTitle>GCE Ordinary Level (O/L)</CardTitle>
                  <CardDescription>2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-1 mt-2">
                    <li>Tamil: A</li>
                    <li>English: C</li>
                    <li>History: C</li>
                    <li>Mathematics: C</li>
                    <li>Science: S</li>
                    <li>Commerce: S</li>
                    <li>Health Science: B</li>
                    <li>Music: B</li>
                    <li>Religion: C</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tighter mb-10 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="flex flex-col h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>KlickJet</CardTitle>
                <CardDescription>Online Grocery Ordering Platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "TypeScript", "Node.js", "MongoDB"].map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  A comprehensive platform for ordering groceries online. Built with a full modern stack including authentication and database integration.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href="https://klickjet.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> View Project
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-2" asChild>
                  <a href="https://github.com/Sujeeththan/KlickJet-client" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 2 */}
            <Card className="flex flex-col h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Show Tracker</CardTitle>
                <CardDescription>TV Show Tracking Application</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript (ES6)"].map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Keep track of your favorite TV shows. Features a clean UI and data persistence using local storage.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href="https://show-tracker-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> View Project
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-2" asChild>
                  <a href="https://github.com/Sujeeththan/show-tracker" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Project 3 */}
            <Card className="flex flex-col h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Todo App</CardTitle>
                <CardDescription>Task Management Application</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML5", "CSS3", "JavaScript"].map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  A simple and efficient task management tool to help you stay organized.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href="https://todo-application-phi-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> View Project
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-2" asChild>
                  <a href="https://github.com/Sujeeththan/todo-application" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start a project?</h2>
            <p className="max-w-[600px] mx-auto text-primary-foreground/90 mb-8">
              I'm currently available for Full-Stack and Web Developer roles. Let's get in touch!
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:sujeethsujeeth487@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="https://www.linkedin.com/in/sujeeththan/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 Kanagalingam Sujeeththan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Sujeeththan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/sujeeththan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
