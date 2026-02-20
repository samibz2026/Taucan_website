import { Facebook, MessageCircle, Phone, Linkedin } from 'lucide-react';

export default function SocialIcons() {
  return (
    <>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4">
        <a
          href="https://www.facebook.com/share/1aVj1GGdE2/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 transform hover:-translate-x-2"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/company/toucan-elecinfra-private-limited/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 hover:scale-110 transition-all duration-300 transform hover:-translate-x-2"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        <a
          href="https://wa.me/918296828096"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 transform hover:-translate-x-2 animate-pulse"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      <a
        href="tel:+918296828096"
        className="fixed bottom-6 right-6 z-40 lg:hidden bg-yellow-500 text-gray-900 p-4 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
