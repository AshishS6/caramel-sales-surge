
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const testimonials = [
  {
    quote: "We scaled from $10K to $100K/month in sales—without hiring a marketing team! AI made it possible.",
    author: "Sarah Johnson",
    position: "Founder, PureGlow Skincare",
    rating: 5,
  },
  {
    quote: "Caramel's AI saved us 30% on ad spend while doubling our conversion rate.",
    author: "Michael Chen",
    position: "CEO, Luminous Beauty",
    rating: 5,
  },
  {
    quote: "We no longer worry about scaling. AI manages our budget & targeting automatically.",
    author: "Jessica Williams",
    position: "Shopify Store Owner",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 pt-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="mb-4">
                Trusted by <span className="gradient-text">E-Commerce Leaders</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why store owners are switching to AI-powered ad management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>

            <div className="mt-20 bg-caramel-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-caramel-100">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-3">Success Story</h3>
                <p className="text-caramel-700">How a small business achieved big results</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-bold mb-4">MountainGear Outdoors</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-800">Challenge:</p>
                      <p className="text-gray-600">
                        Struggling to compete with larger outdoor retailers despite having superior products.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Solution:</p>
                      <p className="text-gray-600">
                        Implemented Caramel's AI-powered ad optimization to intelligently target outdoor enthusiasts.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Results:</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Increased conversion rate by 47%</li>
                        <li>Reduced cost per acquisition by 32%</li>
                        <li>Grew monthly revenue from $45K to $112K</li>
                        <li>Expanded product line with profits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-caramel-600">149%</div>
                    <div className="text-gray-600">Revenue Increase</div>
                  </div>

                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80" 
                      alt="Analytics Dashboard" 
                      className="rounded-md w-full h-auto"
                    />
                  </div>

                  <div className="text-sm text-gray-500 italic">
                    "Caramel doesn't just run our ads—it's like having a complete marketing team that works 24/7."
                  </div>
                  <div className="mt-2 font-medium">— Daniel Park, Founder</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="text-caramel-500 mb-4">
          <QuoteIcon size={30} />
        </div>
        
        <p className="text-gray-800 mb-6 flex-grow italic">"{testimonial.quote}"</p>
        
        <div>
          <div className="flex mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="font-bold text-gray-800">{testimonial.author}</p>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsPage;
