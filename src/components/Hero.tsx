import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 via-blue-50 to-green-50 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23f1f5f9%22%20fill-opacity=%220.3%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-pink-200 text-pink-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Your Dream Outfit, Made Real
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent leading-tight animate-gradient-text bg-[length:200%_200%]">
              Vastra
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Turn your Pinterest inspirations into perfectly fitted, custom-made outfits. Connect with trusted local tailors and boutiques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-pink-300 text-pink-600 hover:border-purple-300 hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-50">
                Browse Tailors
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-5 h-5 text-pink-400 mr-1" />
                  <span className="text-2xl font-bold text-gray-800">10K+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-purple-400 mr-1" />
                  <span className="text-2xl font-bold text-gray-800">500+</span>
                </div>
                <p className="text-sm text-gray-600">Expert Tailors</p>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 transform rotate-3">
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[3/4] bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl mb-3"></div>
                  <p className="text-sm font-medium text-gray-800">Elegant Evening Dress</p>
                  <p className="text-xs text-gray-500">Custom Tailored</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[3/4] bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl mb-3"></div>
                  <p className="text-sm font-medium text-gray-800">Bohemian Maxi</p>
                  <p className="text-xs text-gray-500">Pinterest Inspired</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl mb-3"></div>
                  <p className="text-sm font-medium text-gray-800">Traditional Lehenga</p>
                  <p className="text-xs text-gray-500">Perfect Fit</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[3/4] bg-gradient-to-br from-green-200 to-green-300 rounded-xl mb-3"></div>
                  <p className="text-sm font-medium text-gray-800">Summer Co-ord</p>
                  <p className="text-xs text-gray-500">Custom Design</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
