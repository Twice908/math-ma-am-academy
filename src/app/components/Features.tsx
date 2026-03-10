import { Brain, Users, Sparkles, Target, BookOpen, Award } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Advanced AI technology personalizes learning paths and provides instant feedback for better understanding.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Users,
      title: 'Young & Dynamic Teachers',
      description: 'Our energetic, modern educators connect with students and make learning engaging and fun.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: Sparkles,
      title: 'Modern Teaching Methods',
      description: 'Interactive lessons, gamification, and technology-driven approaches keep students motivated.',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: Target,
      title: 'Exam-Focused Preparation',
      description: 'Special batches for scholarships, olympiads, and competitive exams ensure success.',
      gradient: 'from-orange-600 to-amber-600',
    },
    {
      icon: BookOpen,
      title: 'All Subjects Coverage',
      description: 'Comprehensive curriculum covering all subjects from standards 1st to 12th.',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Consistent results with students excelling in academics and competitive exams.',
      gradient: 'from-indigo-600 to-violet-600',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Math ma'am Academy
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Experience the perfect blend of technology, expertise, and innovation for your child's educational success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <img
            src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwQUklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjA4MzA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Students learning with AI technology"
            className="w-full h-48 md:h-64 object-cover rounded-2xl mb-6"
          />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Learning Enhanced by Artificial Intelligence
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our AI-powered platform adapts to each student's learning style, identifies strengths and weaknesses, 
            and provides personalized recommendations for optimal growth.
          </p>
        </div>
      </div>
    </section>
  );
}
