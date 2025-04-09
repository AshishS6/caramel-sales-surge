
import { RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-caramel-50 to-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-caramel-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="bg-orange-500 text-white p-1 rounded-full mr-2">
              <RocketIcon size={14} />
            </span>
            <span className="text-sm font-medium text-caramel-800">
              Trusted by 1,000+ E-Commerce Brands
            </span>
          </div>

          <h2 className="mb-6">
            Ready to <span className="gradient-text">Sell More</span> with AI-Powered Ads?
          </h2>

          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Start Free & Watch Your Online Sales Grow! Join thousands of e-commerce brands already scaling their business with AI.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button className="btn-primary text-lg px-8 py-6">
              Try AI-Optimized Ads Now!
            </Button>
            <Button variant="outline" className="text-lg border-caramel-300 px-8 py-6">
              Schedule a Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-caramel-600 mb-2">40%</div>
              <p className="text-gray-600">Average Conversion Rate Increase</p>
            </div>
            <div className="text-center p-4 border border-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-caramel-600 mb-2">25%</div>
              <p className="text-gray-600">Average CAC Reduction</p>
            </div>
            <div className="text-center p-4 border border-gray-100 rounded-lg">
              <div className="text-4xl font-bold text-caramel-600 mb-2">3X</div>
              <p className="text-gray-600">Average Return on Ad Spend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
