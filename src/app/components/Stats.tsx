import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Students',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Award,
      number: '95%',
      label: 'Success Rate',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: BookOpen,
      number: '10+',
      label: 'Expert Teachers',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: TrendingUp,
      number: '100%',
      label: 'Results Oriented',
      gradient: 'from-orange-600 to-amber-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record Speaks for Itself
            </h2>
            <p className="text-lg text-white/90">
              Numbers that showcase our commitment to excellence in education
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
