import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  BookOpen,
  Users,
  GraduationCap,
  Briefcase,
  Calendar,
  Clock,
  CheckCircle,
  Award,
  TrendingUp,
  Code,
  Database,
  Brain,
  Shield,
  Sparkles,
  ChevronRight,
  Download
} from 'lucide-react';

interface ProgramPageProps {
  onNavigate: (page: 'home' | 'program') => void;
}

export function ProgramPage({ onNavigate }: ProgramPageProps) {
  const coreClasses = [
    {
      code: 'MPCS 50101',
      title: 'Concepts of Programming',
      description: 'Fundamental concepts including data types, control structures, functions, and object-oriented programming.',
      credits: 3,
      difficulty: 'Beginner'
    },
    {
      code: 'MPCS 50103',
      title: 'Mathematics for Computer Science',
      description: 'Discrete mathematics, logic, probability, and linear algebra as applied to computer science.',
      credits: 3,
      difficulty: 'Beginner'
    },
    {
      code: 'MPCS 51042',
      title: 'Python Programming',
      description: 'Comprehensive Python programming including data structures, algorithms, and application development.',
      credits: 3,
      difficulty: 'Intermediate'
    },
    {
      code: 'MPCS 51100',
      title: 'Advanced Programming',
      description: 'Deep dive into C++ and advanced programming concepts including memory management and performance.',
      credits: 3,
      difficulty: 'Intermediate'
    },
    {
      code: 'MPCS 52030',
      title: 'Operating Systems',
      description: 'Design and implementation of operating systems including process management, memory, and file systems.',
      credits: 3,
      difficulty: 'Advanced'
    },
    {
      code: 'MPCS 51200',
      title: 'Algorithms',
      description: 'Analysis and design of algorithms including sorting, searching, graph algorithms, and dynamic programming.',
      credits: 3,
      difficulty: 'Advanced'
    }
  ];

  const specializations = [
    {
      icon: <Brain size={32} />,
      title: 'Artificial Intelligence',
      courses: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
      description: 'Build intelligent systems that can learn, reason, and make decisions.'
    },
    {
      icon: <Database size={32} />,
      title: 'Data Science',
      courses: ['Data Engineering', 'Statistical Analysis', 'Data Visualization', 'Big Data Systems'],
      description: 'Extract insights from large-scale data using statistical and computational methods.'
    },
    {
      icon: <Code size={32} />,
      title: 'Software Engineering',
      courses: ['Web Development', 'Mobile Development', 'Software Architecture', 'DevOps'],
      description: 'Design and build robust, scalable software systems for modern applications.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Security & Privacy',
      courses: ['Cybersecurity', 'Cryptography', 'Network Security', 'Privacy Engineering'],
      description: 'Protect systems and data from threats while ensuring user privacy.'
    }
  ];

  const instructorTypes = [
    {
      title: 'Research Faculty',
      description: 'World-renowned researchers who bring cutting-edge knowledge from their labs to the classroom.',
      percentage: '40%'
    },
    {
      title: 'Industry Professionals',
      description: 'Senior engineers and technical leaders from top tech companies sharing real-world experience.',
      percentage: '35%'
    },
    {
      title: 'Lecturers',
      description: 'Dedicated educators with extensive teaching experience and industry backgrounds.',
      percentage: '25%'
    }
  ];

  const studentJourneys = [
    {
      name: 'Sarah Chen',
      background: 'Marketing → Software Engineer at Meta',
      quote: 'The immersion program gave me the intensive, structured learning I needed to switch careers. Within 6 months of graduating, I landed my dream job.',
      timeline: '12 months full-time'
    },
    {
      name: 'Michael Rodriguez',
      background: 'Financial Analyst → ML Engineer at Citadel',
      quote: 'Taking evening classes while working was challenging but worth it. The program\'s flexibility allowed me to transition gradually into tech.',
      timeline: '20 months part-time'
    },
    {
      name: 'Jessica Park',
      background: 'Biology Major → Data Scientist at Google',
      quote: 'I had zero programming experience. The pre-program courses prepared me perfectly, and now I\'m working on cutting-edge AI projects.',
      timeline: 'Pre-program + 12 months'
    }
  ];

  const resources = [
    {
      icon: <Briefcase size={24} />,
      title: 'Career Services',
      items: ['Resume & Portfolio Reviews', 'Mock Technical Interviews', 'Salary Negotiation Coaching', 'Alumni Mentorship Program']
    },
    {
      icon: <Users size={24} />,
      title: 'Student Life',
      items: ['Study Groups & Peer Support', 'Tech Talks & Workshops', 'Hackathons & Competitions', 'Social Events & Networking']
    },
    {
      icon: <Award size={24} />,
      title: 'Academic Support',
      items: ['Office Hours with Instructors', 'TA-led Lab Sessions', 'Academic Advising', 'Tutoring Services']
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Wellness & Balance',
      items: ['Mental Health Counseling', 'Stress Management Workshops', 'Campus Recreation', 'Wellness Resources']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon via-maroon-dark to-maroon py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-maroon-light/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <button 
              onClick={() => onNavigate('home')}
              className="text-white/80 hover:text-white mb-6 flex items-center gap-2 transition-colors"
            >
              <ChevronRight size={16} className="rotate-180" />
              Back to Home
            </button>
            
            <Badge variant="outline" className="border-white/30 text-white mb-6 px-4 py-2">
              Program Details
            </Badge>
            
            <h1 className="text-white mb-6">
              Your Path to a Computer Science Career
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explore our curriculum, meet our faculty, hear from students, and discover the resources available to support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-secondary p-1.5 h-auto rounded-xl shadow-md">
              <TabsTrigger value="curriculum" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-maroon data-[state=active]:to-maroon-dark data-[state=active]:text-white data-[state=active]:shadow-lg py-3 rounded-lg transition-all duration-300">
                <BookOpen size={18} className="mr-2" />
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="instructors" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-maroon data-[state=active]:to-maroon-dark data-[state=active]:text-white data-[state=active]:shadow-lg py-3 rounded-lg transition-all duration-300">
                <GraduationCap size={18} className="mr-2" />
                Instructors
              </TabsTrigger>
              <TabsTrigger value="students" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-maroon data-[state=active]:to-maroon-dark data-[state=active]:text-white data-[state=active]:shadow-lg py-3 rounded-lg transition-all duration-300">
                <Users size={18} className="mr-2" />
                Student Experience
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-maroon data-[state=active]:to-maroon-dark data-[state=active]:text-white data-[state=active]:shadow-lg py-3 rounded-lg transition-all duration-300">
                <Award size={18} className="mr-2" />
                Resources
              </TabsTrigger>
            </TabsList>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="space-y-12">
              <div>
                <h2 className="mb-8">Core Curriculum</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Build a strong foundation in computer science fundamentals before specializing in your area of interest.
                </p>
                
                <div className="grid gap-6">
                  {coreClasses.map((course, index) => (
                    <Card key={index} className="border-maroon/20 hover:border-maroon/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="outline" className="border-maroon/30 text-maroon">
                                {course.code}
                              </Badge>
                              <Badge className={`${
                                course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                                course.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                                'bg-purple-100 text-purple-700'
                              }`}>
                                {course.difficulty}
                              </Badge>
                            </div>
                            <h3 className="mb-2">{course.title}</h3>
                            <p className="text-muted-foreground">{course.description}</p>
                          </div>
                          <div className="text-center lg:text-right">
                            <div className="text-3xl font-bold text-maroon">{course.credits}</div>
                            <div className="text-sm text-muted-foreground">credits</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-8">Specializations</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Choose a specialization aligned with your career goals and interests.
                </p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {specializations.map((spec, index) => (
                    <Card key={index} className="border-maroon/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-card">
                      <CardContent className="p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-maroon/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-16 h-16 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-2xl flex items-center justify-center mb-6 text-maroon shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                          {spec.icon}
                        </div>
                        <h3 className="mb-3">{spec.title}</h3>
                        <p className="text-muted-foreground mb-6">{spec.description}</p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-maroon mb-3">Sample Courses:</div>
                          {spec.courses.map((course, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle size={16} className="text-maroon flex-shrink-0" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary via-card to-secondary rounded-2xl p-12 text-center shadow-xl border border-border">
                <h3 className="mb-4">Download Complete Course Catalog</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get detailed descriptions, prerequisites, and schedules for all available courses.
                </p>
                <Button className="bg-maroon hover:bg-maroon-dark text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Download size={20} className="mr-2" />
                  Download Catalog (PDF)
                </Button>
              </div>
            </TabsContent>

            {/* Instructors Tab */}
            <TabsContent value="instructors" className="space-y-12">
              <div>
                <h2 className="mb-8">World-Class Faculty</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Learn from experts who are shaping the future of computer science through groundbreaking research and industry innovation.
                </p>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  {instructorTypes.map((type, index) => (
                    <Card key={index} className="border-maroon/20 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-card">
                      <CardContent className="p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="text-5xl font-bold text-maroon mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">{type.percentage}</div>
                        <h3 className="mb-4">{type.title}</h3>
                        <p className="text-muted-foreground">{type.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-border bg-gradient-to-br from-secondary to-card">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="mb-4">Teaching Philosophy</h3>
                        <p className="text-muted-foreground mb-6">
                          Our instructors combine rigorous academic standards with practical, hands-on learning. 
                          They're committed to your success and bring diverse perspectives from academia and industry.
                        </p>
                        <div className="space-y-3">
                          {[
                            'Small class sizes for personalized attention',
                            'Regular office hours and TA support',
                            'Real-world projects and case studies',
                            'Industry guest speakers and mentorship'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle size={18} className="text-maroon flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-4">Course Quality Insights</h3>
                        <p className="text-muted-foreground mb-6">
                          Students consistently rate our instructors highly for their expertise, accessibility, and commitment to student success.
                        </p>
                        <div className="space-y-4">
                          {[
                            { metric: 'Instructor Quality', rating: '4.6/5.0' },
                            { metric: 'Course Relevance', rating: '4.7/5.0' },
                            { metric: 'Learning Outcomes', rating: '4.5/5.0' },
                            { metric: 'Career Preparation', rating: '4.8/5.0' }
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-secondary rounded-lg border border-border">
                              <span className="font-medium">{item.metric}</span>
                              <span className="text-maroon font-bold">{item.rating}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Student Experience Tab */}
            <TabsContent value="students" className="space-y-12">
              <div>
                <h2 className="mb-8">Student Success Stories</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Hear from graduates who transformed their careers through the MPCS program.
                </p>

                <div className="space-y-8">
                  {studentJourneys.map((student, index) => (
                    <Card key={index} className="border-maroon/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group bg-card">
                      <CardContent className="p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-maroon/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="grid lg:grid-cols-4 gap-6">
                          <div className="lg:col-span-3">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center text-maroon flex-shrink-0">
                                <Users size={24} />
                              </div>
                              <div>
                                <h3 className="mb-1">{student.name}</h3>
                                <div className="text-sm text-maroon font-medium mb-3">{student.background}</div>
                              </div>
                            </div>
                            <p className="text-lg text-muted-foreground italic">"{student.quote}"</p>
                          </div>
                          <div className="flex lg:flex-col items-center lg:items-end justify-center lg:justify-start gap-2">
                            <Clock size={20} className="text-maroon" />
                            <span className="text-sm text-center">{student.timeline}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-maroon via-maroon-dark to-maroon rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="text-center mb-8 relative z-10">
                  <h2 className="text-white mb-4">Post-Graduation Outcomes</h2>
                  <p className="text-white/80 text-lg max-w-3xl mx-auto">
                    Our graduates go on to work at leading tech companies and innovative startups across the country.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                  {[
                    { icon: <TrendingUp size={32} />, stat: '95%', label: 'Employed within 6 months' },
                    { icon: <Briefcase size={32} />, stat: '$120k', label: 'Average starting salary' },
                    { icon: <GraduationCap size={32} />, stat: '87%', label: 'Work in their desired field' }
                  ].map((outcome, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        {outcome.icon}
                      </div>
                      <div className="text-4xl font-bold mb-2">{outcome.stat}</div>
                      <div className="text-white/80">{outcome.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-12">
              <div>
                <h2 className="mb-8">Comprehensive Student Support</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Access the resources and support you need to excel academically and professionally.
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  {resources.map((resource, index) => (
                    <Card key={index} className="border-maroon/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group bg-card">
                      <CardContent className="p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-14 h-14 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-2xl flex items-center justify-center mb-6 text-maroon shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 relative z-10">
                          {resource.icon}
                        </div>
                        <h3 className="mb-6">{resource.title}</h3>
                        <div className="space-y-3">
                          {resource.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-maroon flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-border bg-gradient-to-br from-secondary to-card hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Calendar size={40} className="text-maroon mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="mb-4">Upcoming Events</h3>
                    <p className="text-muted-foreground mb-6">
                      Stay connected with tech talks, networking events, career fairs, and social gatherings.
                    </p>
                    <Button variant="outline" className="border-maroon/30 text-maroon hover:bg-maroon hover:text-white">
                      View Event Calendar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gradient-to-br from-secondary to-card hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-maroon/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Sparkles size={40} className="text-maroon mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="mb-4">Alumni Network</h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with 500+ alumni working at top companies for mentorship and career opportunities.
                    </p>
                    <Button variant="outline" className="border-maroon/30 text-maroon hover:bg-maroon hover:text-white">
                      Join Alumni Network
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-background/90 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Applications are now open for the next cohort. Join a community of ambitious learners and transform your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-maroon hover:bg-maroon-dark text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-maroon/30 text-maroon hover:bg-maroon hover:text-white hover:scale-105 transition-all duration-300">
              Schedule a Campus Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
