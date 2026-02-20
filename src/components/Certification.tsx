import certificateImg from "../assets/certificate.jpg";

export default function Certification() {
  return (
    <section id="certification" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certification
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Certificate Image */}
        <div className="flex justify-center">
          <img
            src={certificateImg}
            alt="Company Certificate"
            className="rounded-xl shadow-2xl w-full max-w-4xl object-contain"
          />
        </div>

      </div>
    </section>
  );
}