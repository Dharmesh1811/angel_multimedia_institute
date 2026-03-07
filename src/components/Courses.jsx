import {
  Code,
  Globe,
  Layers,
  Shield,
  Video,
  Smartphone,
  Palette,
  Layout,
  Diamond,
  TrendingUp,
  Calculator,
  Terminal,
  FileCode,
  GraduationCap,
  Bot
} from 'lucide-react';

const courses = [
  { name: 'CCC / CCC+', icon: GraduationCap },
  { name: 'Tally / Miracle / Tripta', icon: Calculator },
  { name: 'C Language / C++', icon: Terminal },
  { name: 'AI', icon: Bot },
  { name: 'Graphics Designing', icon: Palette },
  { name: '3D Animation & Video Editing', icon: Video },
  { name: 'UI/UX Designing', icon: Layout },
  { name: 'Jewellery Design', icon: Diamond },
  { name: 'Web Designing', icon: Globe },
  { name: 'Web Development', icon: Code },
  { name: 'Full Stack Development', icon: Layers },
  { name: 'Flutter + Android', icon: Smartphone },
  { name: 'Digital Marketing', icon: TrendingUp },
  { name: 'Cyber Security', icon: Shield },
  { name: 'Python', icon: FileCode },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Courses
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from 50+ professional courses designed for your career success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <Icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {course.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
