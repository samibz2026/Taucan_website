import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,       // animate only once
    margin: "-100px"  // trigger slightly before fully visible
  });

  const clients = [
    { name: 'Vikram Solar', logo: './logos/vikram.jpg' },
    { name: 'Prozeal Green Energy', logo: './logos/Prozeal.jpeg' },
    { name: 'Susten By Mahindra', logo: './logos/susten.jpg' },
    { name: 'Hinduja Renewables', logo: './logos/Hinduja.jpg' },
    { name: 'Aditya Birla Renewables', logo: './logos/ADITYA.jpg' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // const cardVariants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 60,
  //     scale: 0.9,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     scale: 1,
  //     transition: {
  //       duration: 0.7,
  //       ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
  //     },
  //   },
  // };

  return (
    <section
      ref={ref}
      id="clients"
      className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by leading solar energy companies across India
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              // variants={cardVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center h-20 mb-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}