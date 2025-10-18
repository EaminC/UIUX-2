import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ModernStatsSection } from './ModernStatsSection';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import {
  GraduationCap,
  Briefcase,
  Users,
  Calendar,
  BookOpen,
  TrendingUp,
  Award,
  ChevronRight,
  Clock,
  MapPin,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Brain,
  Code,
  Database,
  Cpu
} from 'lucide-react';

interface HomepageProps {
  onNavigate: (page: 'home' | 'program') => void;
}

export function Homepage({ onNavigate }: HomepageProps) {
  const stats = [
    { icon: <GraduationCap size={24} />, value: '95%', label: 'Job Placement Rate' },
    { icon: <Briefcase size={24} />, value: '$120k+', label: 'Average Starting Salary' },
    { icon: <Users size={24} />, value: '500+', label: 'Alumni Network' },
    { icon: <Award size={24} />, value: 'Top 10', label: 'CS Program Nationally' }
  ];

  const pathways = [
    {
      title: 'Full-Time Program',
      duration: '9-12 months',
      icon: <Clock size={32} />,
      description: 'Intensive, immersive experience designed for career changers and recent graduates.',
      highlights: ['Complete in 3-4 quarters', 'Dedicated career support', 'On-campus immersion']
    },
    {
      title: 'Part-Time Program',
      duration: '18-24 months',
      icon: <Calendar size={32} />,
      description: 'Flexible evening courses for working professionals balancing career and education.',
      highlights: ['Evening classes', 'Work while studying', 'Same degree, flexible pace']
    },
    {
      title: 'Pre-Program Track',
      duration: '1 summer',
      icon: <BookOpen size={32} />,
      description: 'Foundational courses for students without a technical background to prepare for the program.',
      highlights: ['No CS background needed', 'Summer intensive', 'Smooth transition to program']
    }
  ];

  const features = [
    {
      icon: <Brain size={40} />,
      title: 'World-Class Faculty',
      description: 'Learn from leading researchers and industry experts who bring cutting-edge knowledge to the classroom.'
    },
    {
      icon: <Code size={40} />,
      title: 'Hands-On Learning',
      description: 'Build real-world projects and applications using modern technologies and industry best practices.'
    },
    {
      icon: <Users size={40} />,
      title: 'Career Services',
      description: 'Dedicated support team to help with resume reviews, interview prep, and job placement.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Industry Connections',
      description: 'Access to top employers in Chicago and beyond through networking events and on-campus recruiting.'
    }
  ];

  const quickLinks = [
    { label: 'Course Catalog', icon: <BookOpen size={18} /> },
    { label: 'Academic Calendar', icon: <Calendar size={18} /> },
    { label: 'Career Resources', icon: <Briefcase size={18} /> },
    { label: 'Student Portal', icon: <Users size={18} /> },
    { label: 'Campus Wellness', icon: <CheckCircle size={18} /> },
    { label: 'Registration Info', icon: <Award size={18} /> }
  ];

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon via-maroon-dark to-maroon overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-maroon-light/20 to-transparent"></div>
        
        {/* Floating orbs for visual interest */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-maroon-light/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-white/30 text-white mb-6 px-4 py-2">
                <MapPin size={14} className="mr-2" />
                University of Chicago
              </Badge>
              
              <h1 className="text-white mb-6">
                Masters Program in Computer Science
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your career with a rigorous computer science education from one of the world's leading universities. No prior CS experience required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-maroon hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => onNavigate('program')}
                >
                  Explore Programs
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  Request Information
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-white/80 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="aspect-square bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    {[
                      { icon: <Code size={48} />, label: 'Software Engineering', delay: '0ms' },
                      { icon: <Database size={48} />, label: 'Data Science', delay: '100ms' },
                      { icon: <Cpu size={48} />, label: 'AI & Machine Learning', delay: '200ms' },
                      { icon: <Brain size={48} />, label: 'Theory & Algorithms', delay: '300ms' }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        style={{ animationDelay: item.delay }}
                        className="bg-white/5 backdrop-blur rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:bg-white/15 hover:scale-105 hover:shadow-xl transition-all duration-300 hover:border-white/30 animate-fade-in-up"
                      >
                        <div className="text-white mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                        <div className="text-sm text-white/90 font-medium">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats Cards */}
      <section className="pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <ModernStatsSection />
      </section>

      {/* AI & Job Market Section - Addresses Percy's concerns */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-maroon/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
            <CardContent className="p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-maroon/5 rounded-full blur-3xl -z-0"></div>
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <Badge className="bg-gradient-to-r from-maroon to-maroon-dark text-white mb-4 shadow-md">Future-Proof Your Career</Badge>
                  <h2 className="mb-6">AI is Creating Opportunities, Not Replacing Them</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    As AI transforms industries, the demand for skilled computer scientists has never been higher. 
                    Our program prepares you to lead AI development, not be replaced by it.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Learn to build and manage AI systems',
                      'Understand the fundamentals that AI cannot replace',
                      'Develop critical thinking and problem-solving skills',
                      'Work on projects involving cutting-edge AI technologies'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-maroon mt-1 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-maroon/5 to-maroon/10 rounded-xl p-8">
                  <h3 className="mb-6 text-maroon">Career Growth Outlook</h3>
                  <div className="space-y-6">
                    {[
                      { role: 'AI/ML Engineer', growth: '+35% by 2030', salary: '$140k-180k' },
                      { role: 'Software Engineer', growth: '+25% by 2030', salary: '$110k-150k' },
                      { role: 'Data Scientist', growth: '+36% by 2030', salary: '$120k-160k' }
                    ].map((career, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-maroon/10">
                        <div className="font-medium text-foreground mb-2">{career.role}</div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{career.growth}</span>
                          <span className="text-maroon font-medium">{career.salary}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Pathways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-maroon text-white mb-4">Flexible Paths to Your Degree</Badge>
            <h2 className="mb-4">Choose Your Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're looking to change careers or advance in your current role, we have a path designed for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <Card 
                key={index} 
                className="border-maroon/20 hover:border-maroon/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white group"
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-2xl flex items-center justify-center mb-6 text-maroon shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                    {pathway.icon}
                  </div>
                  <h3 className="mb-2">{pathway.title}</h3>
                  <div className="text-sm text-maroon font-medium mb-4">{pathway.duration}</div>
                  <p className="text-muted-foreground mb-6">{pathway.description}</p>
                  <div className="space-y-3">
                    {pathway.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-maroon flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-maroon/30 text-maroon hover:bg-maroon hover:text-white"
                    onClick={() => onNavigate('program')}
                  >
                    Learn More
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose UChicago MPCS?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive educational experience designed to launch successful careers in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-3xl flex items-center justify-center mx-auto mb-6 text-maroon shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Students Section - Quick Links for Samantha */}
      <section className="py-20 bg-gradient-to-br from-maroon via-maroon-dark to-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-maroon-light/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Current Students</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Quick access to everything you need for a successful academic experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-white/80 group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-white text-maroon hover:bg-gray-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Student Portal Login
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Helps Alaina reduce email volume */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions about the program.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Do I need a computer science background to apply?',
                answer: 'No! Our Pre-Program track is designed for students without a CS background. You\'ll take foundational courses during the summer to prepare you for success in the main program.'
              },
              {
                question: 'What are the degree requirements?',
                answer: 'Students must complete 12-14 courses (depending on track) with a minimum GPA of 3.0. This includes core requirements in algorithms, systems, and a capstone project.'
              },
              {
                question: 'What career support is available?',
                answer: 'We offer resume reviews, mock interviews, career counseling, on-campus recruiting events, and access to our extensive alumni network. Our career services team works with you from day one.'
              },
              {
                question: 'How do I register for classes?',
                answer: 'Registration opens each quarter through the student portal. You\'ll work with your academic advisor to plan your course schedule based on your interests and career goals.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-maroon/20">
                <CardContent className="p-6">
                  <h3 className="mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Button variant="outline" className="border-maroon/30 text-maroon hover:bg-maroon hover:text-white">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
