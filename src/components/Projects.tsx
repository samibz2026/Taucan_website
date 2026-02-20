import { useState } from "react";
import { X, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  name: string;
  location: string;
  images: string[];
}

const amgeplImages = Object.values(
  import.meta.glob("../assets/AMGEPL/*.{jpg,JPG,jpeg,png}", { eager: true, as: "url" })
);
const bidarImages = Object.values(
  import.meta.glob("../assets/Bidar Bhalki/*.{jpg,JPG,jpeg,png}", { eager: true, as: "url" })
);
const guvnlImages = Object.values(
  import.meta.glob("../assets/GUVNL/*.{jpg,JPG,jpeg,png}", { eager: true, as: "url" })
);
const hindujaImages = Object.values(
  import.meta.glob("../assets/Hinduja/*.{jpg,JPG,jpeg,png}", { eager: true, as: "url" })
);
const shahapurImages = Object.values(
  import.meta.glob("../assets/Shahapur/*.{jpg,JPG,jpeg,png}", { eager: true, as: "url" })
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const projects: Project[] = [
    { name: "AMGEPL", location: "Kurnool, Andhra Pradesh", images: amgeplImages },
    { name: "Bidar Bhalki", location: "Karnataka", images: bidarImages },
    { name: "GUVNL", location: "Amreli, Gujarat", images: guvnlImages },
    { name: "Hinduja", location: "Patan, Gujarat", images: hindujaImages },
    { name: "Shahapur", location: "Karnataka", images: shahapurImages },
  ];

  const openProject = (projectName: string) => {
    setSelectedProject(projectName);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const currentProject = projects.find((p) => p.name === selectedProject);
  const currentImages = currentProject ? currentProject.images : [];

  const nextImage = () => {
    if (!currentProject) return;
    setDirection("right");
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    if (!currentProject) return;
    setDirection("left");
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  const goToImage = (index: number) => {
    setDirection(index > currentImageIndex ? "right" : "left");
    setCurrentImageIndex(index);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Successfully completed solar power plant installations across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              onClick={() => openProject(project.name)}
              className="group cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-600 font-medium">{project.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.images.length} Project Photos</p>
                <button className="w-full px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-400 transition-all duration-300">
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && currentProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeProject}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition"
            onClick={closeProject}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="w-full max-w-4xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title & Counter */}
            <div className="mb-4 text-center">
              <h3 className="text-3xl font-bold text-white mb-1">{selectedProject}</h3>
              <p className="text-yellow-400 text-sm">
                {currentImageIndex + 1} / {currentImages.length}
              </p>
            </div>

            {/* Main Image Viewer */}
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-2xl mb-4 h-96">
              <img
                key={currentImageIndex}
                src={currentImages[currentImageIndex]}
                alt=""
                className={`absolute w-full h-full object-contain ${
                  direction === "right" ? "animate-slideInRight" : "animate-slideInLeft"
                }`}
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-500 p-3 rounded-full hover:scale-110 transition z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-500 p-3 rounded-full hover:scale-110 transition z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Gallery Strip */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
              {currentImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? "border-yellow-500 scale-105 opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80 hover:border-yellow-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}