
import { ShoppingBag, Target, TrendingUp, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-caramel-500" />,
      title: "AI-Generated Product Ads That Sell",
      description: "Caramel automatically creates high-converting ads tailored for your products.",
      highlight: "No more guessing – AI finds what works best!"
    },
    {
      icon: <Target className="h-10 w-10 text-caramel-500" />,
      title: "Precision Targeting: Show Ads to Ready-to-Buy Customers",
      description: "AI analyzes purchase intent and targets shoppers who are most likely to buy now.",
      highlight: "Less wasted spend. More revenue."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-caramel-500" />,
      title: "Optimize Every Dollar Spent – Maximize ROAS",
      description: "AI adjusts your ad spend in real-time to get the best return.",
      highlight: "More sales, lower costs – every time!"
    },
    {
      icon: <Link className="h-10 w-10 text-caramel-500" />,
      title: "Works Seamlessly with Your Store",
      description: "AI syncs with your eCommerce store to run high-performing campaigns effortlessly.",
      highlight: "Sell more with zero manual ad management!"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Why <span className="gradient-text">Caramel</span> Powers Leading E-Commerce Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI technology transforms how online stores advertise, delivering better results with less effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <p className="text-orange-600 font-medium">{benefit.highlight}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 bg-caramel-100 p-8">
              <h3 className="text-2xl font-bold mb-4">Compatible With All Major Platforms</h3>
              <p className="mb-6">Caramel integrates seamlessly with your existing e-commerce store:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-caramel-600 text-white p-1 rounded-full mr-2">✓</span>
                  <span>Shopify</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-caramel-600 text-white p-1 rounded-full mr-2">✓</span>
                  <span>WooCommerce</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-caramel-600 text-white p-1 rounded-full mr-2">✓</span>
                  <span>Amazon</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-caramel-600 text-white p-1 rounded-full mr-2">✓</span>
                  <span>Custom Stores</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">How Integration Works</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                  <div>
                    <p className="font-medium text-gray-900">Connect your store</p>
                    <p className="text-gray-600">Simple one-click integration with your platform</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                  <div>
                    <p className="font-medium text-gray-900">Set your goals</p>
                    <p className="text-gray-600">Tell us what you want to achieve with your ads</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                  <div>
                    <p className="font-medium text-gray-900">AI takes over</p>
                    <p className="text-gray-600">Our technology creates and manages your campaigns</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
