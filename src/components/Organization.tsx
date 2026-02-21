import org from '../assets/Organisation.png'

export default function organization() {
  return (
    <section id="organization" className="pt-20 bg-gray-50">
      <div className="max-w-10xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Organization Structure
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg overflow-auto">
          <img
            src={org}
            alt="Organization Structure"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
