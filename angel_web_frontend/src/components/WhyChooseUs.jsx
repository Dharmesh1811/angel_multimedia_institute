import { 
  Award, 
  Users, 
  UserPlus, 
  Trophy, 
  CheckCircle, 
  Briefcase,
  Building2,
  Target,
  BookOpen,
  ShieldCheck
} from 'lucide-react';

const features = [
  {
    icon: Building2,
    text: '16 વર્ષ જુની સરકાર રજીસ્ટર્ડ સંસ્થા',
  },
  {
    icon: Users,
    text: 'વેકેશનમાં ગામડે જવા ઈચ્છતા વિધાર્થી માટે ખાસ શોર્ટ ટર્મ બેચ',
  },
  {
    icon: UserPlus,
    text: 'દોસ્તી ડિસ્કાઉન્ટ : તમારા મિત્ર વર્તુળ માટે ખાસ ડિસ્કાઉન્ટ',
  },
  {
    icon: Trophy,
    text: 'Best Computer Classનો એવોર્ડ મેળવનાર સંસ્થા',
  },
  {
    icon: Award,
    text: 'ISO 9001:2015 દ્વારા માન્યતા પ્રાપ્ત',
  },
  {
    icon: CheckCircle,
    text: '100% પ્રેકિટકલ તેમજ ઈન્ડસ્ટ્રિ લેવલ કોર્ષ',
  },
  {
    icon: Briefcase,
    text: 'Business Person માટે ખાસ અલગ બેચ',
  },
  {
    icon: Target,
    text: 'ઈન્ડસ્ટ્રિ વિઝિટ તેમજ ઈન્ટરવ્યૂ ટ્રેનિંગ',
  },
  {
    icon: BookOpen,
    text: 'વિધાર્થીની રૂચિ અને જરૂરિયાત અનુસાર 50 થી વધુ કોર્ષ',
  },
  {
    icon: ShieldCheck,
    text: 'દરેક સરકારી નોકરીમાં માન્યતા પ્રાપ્ત સર્ટીફિકેટ',
  },
];

export default function WhyStudentsLoveUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            વિદ્યાર્થીઓ અમને કેમ પ્રેમ કરે છે?
          </h2>
          <p className="text-gray-600 text-lg">
            Why Students Love Us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
