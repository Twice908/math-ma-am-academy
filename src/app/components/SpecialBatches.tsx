import { Trophy, Award, Star, CheckCircle } from 'lucide-react';

export function SpecialBatches() {
  const batches = [
    {
      icon: Trophy,
      title: 'Scholarship Exams',
      standards: '5th & 8th Standard',
      description: 'Specialized coaching for scholarship examinations with proven success rate.',
      features: [
        'Comprehensive syllabus coverage',
        'Previous year question papers',
        'Mock tests and practice sessions',
        'Expert guidance and strategies',
      ],
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      icon: Star,
      title: 'Olympiad Preparation',
      standards: 'All Standards (1st - 12th)',
      description: 'Master olympiad exams in Mathematics, Science, English, and more.',
      features: [
        'Subject-wise olympiad coaching',
        'Advanced problem-solving techniques',
        'International level preparation',
        'Regular competitive assessments',
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
  ];

  const olympiadSubjects = [
    'Mathematics Olympiad',
    'Science Olympiad',
    'English Olympiad',
    'Computer Olympiad',
    'General Knowledge Olympiad',
    'Cyber Olympiad',
  ];

  return (
    <section id="special-batches" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Exclusive Programs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Special{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Exam Batches
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Specialized coaching for competitive exams to help students excel and achieve their dreams.
          </p>
        </div>

        {/* Batches Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {batches.map((batch, index) => {
            const Icon = batch.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${batch.gradient} p-8 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{batch.title}</h3>
                      <p className="text-white/90 text-lg">{batch.standards}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{batch.description}</p>
                  
                  <div className="space-y-3">
                    {batch.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Olympiad Subjects & Success Story */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Olympiad Subjects */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Olympiad Subjects Covered</h3>
            <div className="grid grid-cols-2 gap-3">
              {olympiadSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Story */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1660795468951-0b37051eb1b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXdhcmQlMjBleGFtJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzIwODMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Student success and awards"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm">Success Stories</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">95% Success Rate</h3>
                <p className="text-white/90">
                  Our students consistently rank among the top performers in scholarship and olympiad exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
