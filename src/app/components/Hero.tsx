import { Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700">AI-Powered Learning Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>{' '}
              Starts Here
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Learn from young, dynamic teachers using cutting-edge AI technology. 
              From Class 1st to 12th, we provide comprehensive education with modern teaching methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">1-12</div>
                <div className="text-sm text-gray-600">All Standards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">AI</div>
                <div className="text-sm text-gray-600">Powered Teaching</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative px-4 md:px-0">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1771765764892-91f2ed4ddbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHRlYWNoZXIlMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NzIwODMwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern classroom with young teacher and students"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Floating Cards */}
            <div className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-2xl shadow-xl">
              <div className="text-xl md:text-2xl font-bold text-blue-600">500+</div>
              <div className="text-xs md:text-sm text-gray-600">Happy Students</div>
            </div>
            
            <div className="absolute top-2 right-2 md:-top-6 md:-right-6 bg-white p-3 md:p-4 rounded-2xl shadow-xl">
              <div className="text-xl md:text-2xl font-bold text-purple-600">10+</div>
              <div className="text-xs md:text-sm text-gray-600">Expert Teachers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}