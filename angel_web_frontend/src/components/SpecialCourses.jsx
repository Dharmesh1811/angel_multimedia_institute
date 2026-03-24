import {
  GraduationCap,
  Calculator,
  Palette,
  Video,
  Box,
  Sparkles,
  Code,
  Terminal,
  FileCode,
  Shield,
  TrendingUp,
  Brain,
} from "lucide-react";

const specialCourses = [
  { name: "CCC / CCC+ With AI", icon: GraduationCap, category: "Basic" },
  {
    name: "Tally / Miracle / Tripta",
    icon: Calculator,
    category: "Accounting",
  },
  { name: "Graphics Design + AI", icon: Palette, category: "Graphics" },
  { name: "Video Editing + AI", icon: Video, category: "Graphics" },
  { name: (<>Artificial Intelligence(AI) & <br /> Smart Automation</>), icon: Box, category: "AI" },
  {
    name: (
      <>
        Coding + AI <br /> C / C++  
      </>
    ),
    icon: Terminal,
    category: "Programming",
  },
  { name: "Cyber Security", icon: Shield, category: "Technology" },
  { name: "Digital Advertisement + AI", icon: TrendingUp, category: "Marketing" },
];

export default function SpecialCourses() {
  return (
    <section id="special-courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Special Opportunity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Special Career Courses for 10th & 12th Students
          </h2>
          <p className="text-gray-600 text-lg">
            Start building your career early with our specially designed courses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {course.name}
                  </h3>
                  <span className="text-xs text-purple-600 font-medium">
                    {course.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
