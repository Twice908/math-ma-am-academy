import { Globe, MessageCircle, BookOpen, Users } from 'lucide-react';

export function Languages() {
  const languages = [
    {
      name: 'German',
      flag: '🇩🇪',
      levels: 'A1 to C2',
      description: 'Learn the language of innovation and engineering. Perfect for academic and career opportunities.',
      features: ['Native speakers', 'Certification prep', 'Interactive sessions'],
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      name: 'Japanese',
      flag: '🇯🇵',
      levels: 'N5 to N1',
      description: 'Master the language of technology and culture. Opens doors to Japan and global corporations.',
      features: ['JLPT preparation', 'Cultural insights', 'Conversation practice'],
      gradient: 'from-red-500 to-pink-600',
    },
    {
      name: 'French',
      flag: '🇫🇷',
      levels: 'A1 to C2',
      description: 'Speak the language of diplomacy and romance. Essential for international careers.',
      features: ['DELF/DALF prep', 'Grammar mastery', 'Fluency focus'],
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <section id="languages" className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Go Global</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            International{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Language Courses
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Expand your horizons with our specialized foreign language programs taught by expert instructors.
          </p>
        </div>

        {/* Top Banner */}
        <div className="mb-12 relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1651421479704-470a78eef530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwaW50ZXJuYXRpb25hbCUyMGZsYWdzfGVufDF8fHx8MTc3MjA4MzA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="International language learning"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Open Doors to the World</h3>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Learning a foreign language enhances cognitive abilities, career prospects, and cultural understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${language.gradient} p-6 text-white text-center`}>
                <div className="text-6xl mb-3">{language.flag}</div>
                <h3 className="text-2xl font-bold mb-1">{language.name}</h3>
                <p className="text-white/90">{language.levels}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{language.description}</p>
                
                <div className="space-y-2">
                  {language.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${language.gradient}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Learn a Foreign Language?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Communication</h4>
              <p className="text-sm text-gray-600">Connect with people worldwide</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Career Growth</h4>
              <p className="text-sm text-gray-600">Stand out in global job market</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Academic Edge</h4>
              <p className="text-sm text-gray-600">Study abroad opportunities</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Cultural Understanding</h4>
              <p className="text-sm text-gray-600">Broaden your perspective</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
