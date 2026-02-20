import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex fooLogo items-center space-x-3 mb-6">
              <img src="/Logo.png" alt="Toucan Elecinfra" className="object-contain" />
              <span className="text-x3 font-bold text-yellow-500">
                Toucan Elecinfra Pvt Ltd
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Specialized electrical and civil solutions for solar power plants with engineering precision and industry-compliant quality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1aVj1GGdE2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/toucan-elecinfra-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    className="hover:text-yellow-500 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">MCR Electrical Works</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">AC/DC Electrical</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Solar Installations</li>
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">Civil Infrastructure</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <span className="text-sm">Purani Bazar, West Champaran, Bihar</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <a href="tel:+918296828096" className="text-sm hover:text-yellow-500 transition-colors">
                  +91 8296828096
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                <a href="mailto:toucanelecinfa@gmail.com" className="text-sm hover:text-yellow-500 transition-colors">
                  toucanelecinfa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Toucan Elecinfra Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
