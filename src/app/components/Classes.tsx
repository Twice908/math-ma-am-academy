import { BookOpen, Microscope, Calculator, Globe, Beaker, Book } from 'lucide-react';

export function Classes() {
  const classCategories = [
    {
      title: 'Primary Classes',
      standards: '1st - 5th',
      icon: BookOpen,
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'Environmental Studies'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Middle School',
      standards: '6th - 8th',
      icon: Microscope,
      subjects: ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Sanskrit'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'High School',
      standards: '9th - 10th',
      icon: Calculator,
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Science'],
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Senior Secondary',
      standards: '11th - 12th',
      icon: Beaker,
      subjects: ['PCM', 'PCB', 'Commerce', 'Arts', 'Computer Science', 'Economics'],
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section id="classes" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Classes Offered
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Complete education coverage for all standards from 1st to 12th, all subjects included.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {classCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-white/90">Standards {category.standards}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold mb-3 text-gray-700">Subjects Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className={`${category.bgColor} px-4 py-2 rounded-full text-sm`}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Subjects Banner */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjA1MDI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Diverse students studying together"
              className="w-full h-full object-cover"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full w-fit mb-4">
                <Book className="w-4 h-4" />
                <span className="text-sm font-medium">Complete Coverage</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">All Subjects, All Standards</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                From foundational learning in primary classes to advanced concepts in senior secondary, 
                we provide expert instruction across all subjects. Our comprehensive curriculum ensures 
                no student is left behind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  Individual attention to every student
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  Regular assessments and progress tracking
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  Parent-teacher communication
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  Doubt clearing sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
