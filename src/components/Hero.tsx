
import { RocketIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollDown = () => {
    const benefitsSection = document.getElementById("benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-20 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-radial from-caramel-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-radial from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-caramel-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="bg-orange-500 text-white p-1 rounded-full mr-2">
              <RocketIcon size={14} />
            </span>
            <span className="text-sm font-medium text-caramel-800">
              Boosting E-Commerce Sales with Advanced AI
            </span>
          </div>

          <h1 className="mb-6">
            <span className="gradient-text">AI-Optimized Ads That Sell</span> – 
            <br />Boost Your E-Commerce Sales Effortlessly!
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Turn Visitors Into Buyers – AI Automates Your Ads, 
            So You Get More Conversions & Higher ROAS!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button className="btn-primary text-lg">
              Try AI-Optimized Ads Now!
            </Button>
            <Button variant="outline" className="text-lg border-caramel-300">
              See How It Works
            </Button>
          </div>

          <div className="relative mt-16 bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 max-w-5xl mx-auto">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-caramel-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
              Real-time AI Optimization
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                  alt="AI-powered ad performance dashboard" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-xl mb-4">See AI Working in Real-time</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">✓</span>
                    <span>Auto-optimizes ad spending based on real-time performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">✓</span>
                    <span>Identifies top-performing products and doubles down</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">✓</span>
                    <span>Learns from customer behavior to improve targeting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={handleScrollDown}>
        <ChevronDown className="text-caramel-600" size={32} />
      </div>
    </section>
  );
};

export default Hero;
