import { Sparkles, Gift, Clock } from 'lucide-react';
import { Button } from './ui/button';

export default function SummerOffer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="SummerOffer" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Emoji and Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Gift className="h-5 w-5" />
            <span className="font-semibold">Limited Time Offer</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <span>🎉</span>
            <span>Summer Vacation Special Offer</span>
          </h2>

          {/* Offer Details */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-8 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-300" />
              <p className="text-2xl md:text-3xl font-bold">
                Join any course during vacation and get
              </p>
            </div>

            <div className="bg-yellow-300 text-purple-600 rounded-2xl py-6 px-8 my-6 inline-block">
              <p className="text-3xl md:text-4xl font-bold">
                FREE Spoken English Training
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-yellow-300">
              <Clock className="h-5 w-5" />
              <p className="text-lg font-semibold">
                Limited Time Offer
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-bold"
          >
            Enroll Now & Get Free Training
          </Button>
        </div>
      </div>
    </section>
  );
}
