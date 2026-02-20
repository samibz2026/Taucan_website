import { Zap, Cable, Sun, Building2, Hammer, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'MCR Electrical Works',
      description: 'Complete Module Mounting Structures and Combiner Box Room electrical installations.',
      features: [
        'MCR panel installation',
        'Module string connections',
        'DC cable routing',
        'Testing and commissioning',
      ],
    },
    {
      icon: Cable,
      title: 'AC/DC Electrical Works',
      description: 'Comprehensive AC and DC electrical systems for solar power plants.',
      features: [
        'HT/LT panel installation',
        'Power evacuation systems',
        'Transformer connections',
        'Cable laying and termination',
      ],
    },
    {
      icon: Sun,
      title: 'Solar Plant Installations',
      description: 'End-to-end solar power plant installation services.',
      features: [
        'PV module mounting',
        'Inverter installation',
        'SCADA systems',
        'Plant commissioning',
      ],
    },
    {
      icon: Building2,
      title: 'Civil Infrastructure',
      description: 'Robust civil foundation and structural works.',
      features: [
        'Foundation works',
        'Structure fabrication',
        'Road development',
        'Drainage systems',
      ],
    },
    {
      icon: Hammer,
      title: 'Infrastructure Development',
      description: 'Complete infrastructure setup for solar projects.',
      features: [
        'Site preparation',
        'Control room construction',
        'Boundary walls',
        'Security infrastructure',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Electrical Equipment',
      description: 'Supply and installation of electrical equipment.',
      features: [
        'Switchgear supply',
        'Protection systems',
        'Earthing materials',
        'Quality equipment',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical and civil solutions for utility-scale solar power plants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-yellow-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
