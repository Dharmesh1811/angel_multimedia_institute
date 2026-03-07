import { motion } from "motion/react";
import { Award, BookOpen, Users, Building2, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            About Angel Multimedia Institute
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Angel Multimedia Institute is a{" "}
            <strong>16+ year government registered</strong> computer training
            institute providing industry-level practical education.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We offer more than <strong>50+ professional courses</strong>{" "}
            designed to build strong career opportunities for students.
          </p>
          <p className="text-lg text-gray-700">
            Our goal is to provide practical knowledge, industry exposure, and
            job-oriented skills.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4">
              <Building2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Government Registered
            </h3>
            <p className="text-gray-600 text-sm">
              16+ years of trusted education
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Industry Focused
            </h3>
            <p className="text-gray-600 text-sm">
              100% practical & industry level
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4">
              <Award className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Award Winning</h3>
            <p className="text-gray-600 text-sm">Best Computer Class award</p>
          </div>
        </div>
      </div>
    </section>
  );
}
