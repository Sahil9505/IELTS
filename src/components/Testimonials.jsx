import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    score: 'Band 8.5',
    country: 'India',
    image: 'SJ',
    text: 'ExcelIELTS transformed my preparation. The speaking practice sessions were incredibly helpful, and I achieved my target score in just 6 weeks!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    score: 'Band 9.0',
    country: 'China',
    image: 'MC',
    text: 'The AI band score predictor was spot-on! It helped me focus on my weak areas. The mock tests are exactly like the real exam. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    score: 'Band 8.0',
    country: 'Pakistan',
    image: 'PS',
    text: 'Amazing mentors and excellent study materials. The personalized feedback on my writing tasks improved my score dramatically. Worth every penny!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their dream scores with ExcelIELTS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                Achieved: {testimonial.score}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Trusted by over 15,000 students worldwide</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              {['AK', 'BL', 'CM', 'DN', 'EO'].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-medium ml-4">+15,000 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
