import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ArrowRight,
  GraduationCap,
  Users,
  TrendingUp,
  Briefcase,
  Clock,
  BookOpen,
  CheckCircle,
  Star,
  Award,
  Brain,
  Code,
  Target,
  Sparkles,
} from "lucide-react";

interface HomepageProps {
  onNavigate: (page: "home" | "program") => void;
}

export function Homepage({ onNavigate }: HomepageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Hero Section - 大气的首屏 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-20 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8000000a_1px,transparent_1px),linear-gradient(to_bottom,#8000000a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-maroon/5 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-maroon/10 text-maroon hover:bg-maroon/20 border-0">
              <Star className="w-3 h-3 mr-1" />
              Top 10 CS Program Nationally
            </Badge>
            
            <h1 className="mb-6 text-balance">
              Master Computer Science at{" "}
              <span className="text-maroon">UChicago</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Transform your career with a world-class education in computer science.
              Join a community of innovators, thinkers, and builders shaping the future of technology.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => onNavigate("program")}
                className="bg-maroon hover:bg-maroon-dark text-white h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-2"
              >
                Request Information
              </Button>
            </div>
            
            {/* 关键数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "95%", label: "Job Placement" },
                { value: "$125k", label: "Avg. Salary" },
                { value: "500+", label: "Alumni" },
                { value: "12mo", label: "Full-Time" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-3xl font-bold text-maroon mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI & Job Market - Percy的核心关注 */}
      <section className="py-24 bg-gradient-to-b from-maroon to-maroon-dark text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-0">
                AI & Future of Work
              </Badge>
              <h2 className="text-white mb-6">
                AI Creates Opportunities,
                <br />
                Not Replaces Them
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                The AI revolution is creating unprecedented demand for skilled computer scientists.
                Our program prepares you to lead AI development, not be replaced by it.
              </p>
              
              <div className="space-y-4">
                {[
                  "Build and manage AI systems from the ground up",
                  "Master fundamentals that AI cannot replace",
                  "Develop critical thinking for complex problems",
                  "Work on cutting-edge AI research projects",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { role: "AI/ML Engineer", growth: "+35%", salary: "$150k-190k" },
                { role: "Software Engineer", growth: "+25%", salary: "$120k-160k" },
                { role: "Data Scientist", growth: "+36%", salary: "$130k-170k" },
              ].map((job, i) => (
                <Card key={i} className="p-6 bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-white font-semibold">{job.role}</h4>
                    <Badge className="bg-green-500/20 text-green-300 border-0">
                      {job.growth} Growth
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-white">{job.salary}</p>
                  <p className="text-sm text-white/70 mt-1">Projected by 2030</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Paths - 灵活的学习选择 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-maroon/10 text-maroon border-0">
              Flexible Learning
            </Badge>
            <h2 className="mb-4">Choose Your Path</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're changing careers or advancing your current role,
              we have a program designed for your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Full-Time Program",
                duration: "9-12 Months",
                desc: "Intensive, immersive experience for career changers",
                features: ["Complete in 3-4 quarters", "Dedicated career support", "On-campus experience"],
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Part-Time Program",
                duration: "18-24 Months",
                desc: "Evening courses for working professionals",
                features: ["Evening classes", "Work while studying", "Same degree"],
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Pre-Program Track",
                duration: "1 Summer",
                desc: "Foundation courses for non-CS backgrounds",
                features: ["No CS required", "Summer intensive", "Smooth transition"],
              },
            ].map((path, i) => (
              <Card
                key={i}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-maroon/20 group"
              >
                <div className="w-14 h-14 rounded-xl bg-maroon/10 flex items-center justify-center text-maroon mb-6 group-hover:scale-110 transition-transform">
                  {path.icon}
                </div>
                <h3 className="mb-2">{path.title}</h3>
                <div className="text-maroon font-semibold mb-4">{path.duration}</div>
                <p className="text-muted-foreground mb-6">{path.desc}</p>
                <ul className="space-y-3">
                  {path.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-maroon flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full mt-6 group-hover:bg-maroon group-hover:text-white transition-colors"
                  onClick={() => onNavigate("program")}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why UChicago - 核心优势 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose UChicago MPCS?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-10 h-10" />,
                title: "World-Class Faculty",
                desc: "Learn from leading researchers and industry experts",
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: "Hands-On Projects",
                desc: "Build real applications with modern technologies",
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Career Services",
                desc: "Dedicated support from resume to job placement",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Alumni Network",
                desc: "Join 500+ alumni at top tech companies",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-maroon/10 flex items-center justify-center text-maroon">
                  {item.icon}
                </div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Students - Samantha的快速访问 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-maroon/10 text-maroon border-0">
              For Current Students
            </Badge>
            <h2 className="mb-4">Quick Access</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need, right at your fingertips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <BookOpen />, label: "Course Catalog" },
              { icon: <Clock />, label: "Academic Calendar" },
              { icon: <Briefcase />, label: "Career Resources" },
              { icon: <Users />, label: "Student Portal" },
              { icon: <Sparkles />, label: "Campus Wellness" },
              { icon: <Award />, label: "Registration" },
            ].map((link, i) => (
              <button
                key={i}
                className="flex items-center gap-4 p-6 rounded-xl border-2 hover:border-maroon hover:shadow-lg transition-all group text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 group-hover:bg-maroon/10 flex items-center justify-center text-muted-foreground group-hover:text-maroon transition-colors">
                  {link.icon}
                </div>
                <span className="font-semibold">{link.label}</span>
                <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-maroon group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Alaina减少邮件 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Common Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to help you get started
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need a computer science background?",
                a: "No! Our Pre-Program track prepares students without CS backgrounds during the summer.",
              },
              {
                q: "What career support is available?",
                a: "Resume reviews, mock interviews, career counseling, and on-campus recruiting events.",
              },
              {
                q: "How do I register for classes?",
                a: "Registration opens each quarter through the student portal with your academic advisor.",
              },
            ].map((faq, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="mb-3">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-2">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
