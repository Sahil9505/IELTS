import { MessageSquare, FileCheck, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Speaking Practice',
    description: 'Interactive one-on-one sessions with certified IELTS trainers. Practice real exam scenarios and get instant feedback.',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileCheck,
    title: 'Mock Tests',
    description: 'Full-length practice tests that simulate real IELTS exam conditions. Track your progress with detailed analytics.',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'AI Band Score Predictor',
    description: 'Advanced AI technology analyzes your performance and predicts your band score with 95% accuracy.',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from trainers with 10+ years of experience. Get personalized study plans tailored to your goals.',
    color: 'purple',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ExcelIELTS?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and expert guidance to help you achieve your target band score
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dream scores with ExcelIELTS
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold shadow-xl">
            Book Free Demo Class
          </button>
        </div>
      </div>
    </section>
  );
}
