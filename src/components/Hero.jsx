import { useState, useEffect } from 'react';
import { Award, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const heroImages = [
    '/img/6.jpg.jpeg',
    '/img/5.jpg.jpeg',
    '/img/7.jpg.jpeg',
    '/img/8.jpg.jpeg',
    '/img/9.jpg.jpeg',
    '/img/10.jpg.jpeg',
    '/img/11.jpg.jpeg',
    '/img/12.jpg.jpeg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white py-12 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Content */}
          <div className="text-left animate-in fade-in slide-in-from-left duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <Award className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                16+ Years Trusted Computer Training Institute
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 pb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Angel Multimedia <br /> Institute
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg">
              Learn Practical Computer Skills & Build Your Career with Industry Experts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection('courses')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 font-bold shadow-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 font-bold shadow-md"
              >
                Contact Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">16+</div>
                <div className="text-xs text-gray-600 font-medium">Years</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-xs text-gray-600 font-medium">Courses</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-xs text-gray-600 font-medium">Practical</div>
              </div>
            </div>
          </div>

          {/* Right Side: Image Slider */}
          <div className="relative lg:w-[700px] lg:h-[450px] mx-auto rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent z-10"></div>

            {heroImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={img}
                  alt={`Institute Activity ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}

            {/* Slider Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'w-8 bg-white' : 'w-2 bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
