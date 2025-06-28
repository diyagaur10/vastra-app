import { Card } from "@/components/ui/card";
import { Palette, Ruler, MapPin, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Unlimited Customization",
    description: "Choose from hundreds of fabrics, colors, and design modifications to make it uniquely yours",
    gradient: "from-pink-300 to-pink-400"
  },
  {
    icon: Ruler,
    title: "Perfect Fit Guarantee",
    description: "Professional measurements and fitting sessions ensure your outfit fits like it was made for you",
    gradient: "from-purple-300 to-purple-400"
  },
  {
    icon: MapPin,
    title: "Local Experts",
    description: "Connect with verified tailors and boutiques in your area with proven track records",
    gradient: "from-blue-300 to-blue-400"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every tailor is vetted and rated by our community. Your satisfaction is guaranteed",
    gradient: "from-teal-300 to-teal-400"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Get your custom outfit delivered in 7-14 days with real-time progress updates",
    gradient: "from-green-300 to-green-400"
  },
  {
    icon: Users,
    title: "Plus-Size Friendly",
    description: "Specialized services for all body types with expert fitting and size consultation",
    gradient: "from-emerald-300 to-emerald-400"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient-text bg-[length:200%_200%]">Vastra</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of fashion with features designed for your perfect outfit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm group">
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Special Highlight */}
        <div className="mt-16 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Perfect for Every Body, Every Style</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Whether you're looking for traditional wear, western outfits, or fusion styles - our network of expert tailors can bring any design to life
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;