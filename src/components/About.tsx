import { CheckCircle } from 'lucide-react';
import aboutImage from "../assets/about_us.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Toucan Elecinfra Private Limited
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImage}
              alt="Solar Installation"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Toucan Elecinfra Private Limited is a specialized service company providing
              comprehensive electrical and civil works for solar power plants. We support
              utility-scale, commercial, and industrial solar projects with reliable installation,
              execution, and maintenance services.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our expertise includes electrical installation, cabling, HT/LT systems, earthing,
              civil foundations, structures, and infrastructure works. We deliver cost-effective
              and sustainable solutions with industry-compliant quality.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-blue-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
              <p className="text-xl font-bold text-gray-900 italic">
                "We plan with accuracy, execute with discipline, and deliver with excellence—first time, every time."
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Industry-compliant quality standards</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Experienced engineering team</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">On-time project delivery</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Cost-effective sustainable solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}