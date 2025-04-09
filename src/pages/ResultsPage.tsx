
import React from 'react';
import { BarChart3, PieChart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const ResultsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 pt-32">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="mb-4">
                <span className="gradient-text">Results</span> You Can Expect
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                E-Commerce brands using Caramel have consistently outperformed their previous ad campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <MetricCard 
                icon={<TrendingUp className="h-8 w-8" />}
                title="Higher Conversion Rate"
                value="+40%"
                description="Average increase in conversion rates"
                color="caramel"
                progress={40}
              />
              <MetricCard 
                icon={<BarChart3 className="h-8 w-8" />}
                title="Lower CAC"
                value="-25%"
                description="Average reduction in customer acquisition cost"
                color="orange"
                progress={25}
              />
              <MetricCard 
                icon={<PieChart className="h-8 w-8" />}
                title="Better ROAS"
                value="3X"
                description="Return on ad spend vs. manual management"
                color="green"
                progress={75}
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Before & After Using Caramel</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">Conversion Rate</span>
                        <div className="flex gap-4">
                          <span className="text-gray-500">2.1%</span>
                          <span className="text-green-600 font-bold">5.4%</span>
                        </div>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 rounded-full" style={{ width: "35%" }}></div>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-caramel-500 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">Ad Spend Efficiency</span>
                        <div className="flex gap-4">
                          <span className="text-gray-500">1.2x</span>
                          <span className="text-green-600 font-bold">3.0x</span>
                        </div>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-caramel-500 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">Monthly Sales Volume</span>
                        <div className="flex gap-4">
                          <span className="text-gray-500">100%</span>
                          <span className="text-green-600 font-bold">250%</span>
                        </div>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-300 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-caramel-500 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-br from-caramel-50 to-orange-50 rounded-lg p-6 border border-caramel-100">
                    <h4 className="text-xl font-bold mb-4">How Are These Results Possible?</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-caramel-500 text-white p-1 rounded-full mr-3 mt-1">1</span>
                        <div>
                          <p className="font-medium">Continuous Real-time Testing</p>
                          <p className="text-sm text-gray-600">Our AI runs thousands of micro-tests to find the perfect ad combinations.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-caramel-500 text-white p-1 rounded-full mr-3 mt-1">2</span>
                        <div>
                          <p className="font-medium">Smart Budget Allocation</p>
                          <p className="text-sm text-gray-600">Money shifts automatically to the highest-performing ads and audiences.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-caramel-500 text-white p-1 rounded-full mr-3 mt-1">3</span>
                        <div>
                          <p className="font-medium">Purchase Intent Prediction</p>
                          <p className="text-sm text-gray-600">AI identifies who's most likely to buy and targets them specifically.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
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

const MetricCard = ({ icon, title, value, description, color, progress }) => {
  const getColorClass = (color) => {
    const colorMap = {
      caramel: "bg-caramel-500",
      orange: "bg-orange-500",
      green: "bg-green-500",
      blue: "bg-blue-500",
    };
    return colorMap[color] || "bg-caramel-500";
  };

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium text-gray-600">{title}</CardTitle>
          <div className={`p-2 rounded-full ${getColorClass(color).replace("bg-", "bg-").replace("500", "100")}`}>
            {React.cloneElement(icon, { className: `${getColorClass(color).replace("bg-", "text-")}` })}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-2">{value}</div>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <Progress value={progress} className={`h-2 ${getColorClass(color)}`} />
      </CardContent>
    </Card>
  );
};

export default ResultsPage;
