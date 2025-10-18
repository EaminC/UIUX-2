import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  ArrowLeft,
  BookOpen,
  Users,
  Award,
  GraduationCap,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Download,
} from "lucide-react";

interface ProgramPageProps {
  onNavigate: (page: "home" | "program") => void;
}

export function ProgramPage({ onNavigate }: ProgramPageProps) {
  const courses = [
    {
      code: "MPCS 50101",
      title: "Concepts of Programming",
      level: "Foundation",
      credits: 3,
    },
    {
      code: "MPCS 51100",
      title: "Advanced Programming",
      level: "Core",
      credits: 3,
    },
    {
      code: "MPCS 51200",
      title: "Algorithms",
      level: "Core",
      credits: 3,
    },
    {
      code: "MPCS 52030",
      title: "Operating Systems",
      level: "Advanced",
      credits: 3,
    },
  ];

  const specializations = [
    {
      name: "Artificial Intelligence",
      courses: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
      name: "Data Science",
      courses: ["Data Engineering", "Statistical Analysis", "Big Data", "Visualization"],
    },
    {
      name: "Software Engineering",
      courses: ["Web Development", "Mobile Apps", "DevOps", "Cloud Computing"],
    },
    {
      name: "Security & Privacy",
      courses: ["Cybersecurity", "Cryptography", "Network Security", "Privacy"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      path: "Marketing → Software Engineer at Meta",
      quote: "The program gave me the structured learning I needed. Within 6 months of graduating, I landed my dream job.",
      timeline: "12 months",
    },
    {
      name: "Michael Rodriguez",
      path: "Finance → ML Engineer at Citadel",
      quote: "Evening classes while working was challenging but worth it. The flexibility was perfect for my transition.",
      timeline: "20 months",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-maroon to-maroon-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-0">
              Program Details
            </Badge>
            <h1 className="text-white mb-6">
              Your Path to a Computer Science Career
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our curriculum, meet our faculty, and discover the resources
              available to support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-1 bg-gray-100 rounded-xl">
              <TabsTrigger
                value="curriculum"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 rounded-lg"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Curriculum
              </TabsTrigger>
              <TabsTrigger
                value="faculty"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 rounded-lg"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Faculty
              </TabsTrigger>
              <TabsTrigger
                value="students"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 rounded-lg"
              >
                <Users className="w-4 h-4 mr-2" />
                Students
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm py-3 rounded-lg"
              >
                <Award className="w-4 h-4 mr-2" />
                Resources
              </TabsTrigger>
            </TabsList>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="space-y-12">
              <div>
                <h2 className="mb-8">Core Curriculum</h2>
                <div className="grid gap-4">
                  {courses.map((course, i) => (
                    <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="font-mono">
                              {course.code}
                            </Badge>
                            <Badge
                              className={`${
                                course.level === "Foundation"
                                  ? "bg-green-100 text-green-700"
                                  : course.level === "Core"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-purple-100 text-purple-700"
                              } border-0`}
                            >
                              {course.level}
                            </Badge>
                          </div>
                          <h3>{course.title}</h3>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="text-2xl font-bold text-maroon">
                            {course.credits}
                          </div>
                          <div className="text-sm text-muted-foreground">credits</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8">Specializations</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                  {specializations.map((spec, i) => (
                    <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="mb-4">{spec.name}</h3>
                      <div className="space-y-2">
                        {spec.courses.map((course, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-maroon flex-shrink-0" />
                            {course}
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-8 text-center bg-gray-50">
                <h3 className="mb-4">Download Complete Course Catalog</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get detailed descriptions, prerequisites, and schedules for all courses.
                </p>
                <Button className="bg-maroon hover:bg-maroon-dark">
                  <Download className="w-4 h-4 mr-2" />
                  Download Catalog (PDF)
                </Button>
              </Card>
            </TabsContent>

            {/* Faculty Tab */}
            <TabsContent value="faculty" className="space-y-12">
              <div>
                <h2 className="mb-8">World-Class Faculty</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                  {[
                    { percent: "40%", type: "Research Faculty" },
                    { percent: "35%", type: "Industry Experts" },
                    { percent: "25%", type: "Dedicated Lecturers" },
                  ].map((item, i) => (
                    <Card key={i} className="p-8 text-center hover:shadow-lg transition-shadow">
                      <div className="text-5xl font-bold text-maroon mb-4">
                        {item.percent}
                      </div>
                      <h4>{item.type}</h4>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-8 bg-gray-50">
                <h3 className="mb-6">Student Ratings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { metric: "Instructor Quality", rating: "4.6/5.0" },
                    { metric: "Course Relevance", rating: "4.7/5.0" },
                    { metric: "Learning Outcomes", rating: "4.5/5.0" },
                    { metric: "Career Preparation", rating: "4.8/5.0" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 bg-white rounded-lg"
                    >
                      <span className="font-medium">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-maroon">{item.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Students Tab */}
            <TabsContent value="students" className="space-y-12">
              <div>
                <h2 className="mb-8">Student Success Stories</h2>
                <div className="space-y-6">
                  {testimonials.map((story, i) => (
                    <Card key={i} className="p-8 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center text-maroon font-bold">
                              {story.name.charAt(0)}
                            </div>
                            <div>
                              <h4>{story.name}</h4>
                              <p className="text-sm text-maroon">{story.path}</p>
                            </div>
                          </div>
                          <p className="text-lg text-muted-foreground italic">
                            "{story.quote}"
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground lg:flex-col lg:items-end">
                          <Clock className="w-4 h-4" />
                          <span>{story.timeline}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl p-12 text-white text-center">
                <h2 className="text-white mb-8">Post-Graduation Outcomes</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: <TrendingUp className="w-8 h-8" />, stat: "95%", label: "Employed within 6 months" },
                    { icon: <Award className="w-8 h-8" />, stat: "$125k", label: "Average starting salary" },
                    { icon: <Users className="w-8 h-8" />, stat: "87%", label: "Work in desired field" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                      </div>
                      <div className="text-4xl font-bold mb-2">{item.stat}</div>
                      <div className="text-white/80">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-12">
              <div>
                <h2 className="mb-8">Student Support</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Career Services",
                      items: ["Resume & Portfolio", "Mock Interviews", "Salary Negotiation", "Alumni Mentorship"],
                    },
                    {
                      title: "Academic Support",
                      items: ["Office Hours", "TA Sessions", "Academic Advising", "Tutoring"],
                    },
                    {
                      title: "Student Life",
                      items: ["Study Groups", "Tech Talks", "Hackathons", "Social Events"],
                    },
                    {
                      title: "Wellness",
                      items: ["Mental Health", "Stress Management", "Campus Recreation", "Health Resources"],
                    },
                  ].map((resource, i) => (
                    <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="mb-4">{resource.title}</h3>
                      <ul className="space-y-2">
                        {resource.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-maroon flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Start?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Applications are now open. Join us and transform your career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-maroon hover:bg-maroon-dark h-14 px-8">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-2">
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
