
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "How does Caramel integrate with my store?",
      answer: "Caramel syncs with Shopify, WooCommerce, Amazon & custom stores for effortless ad management. Our integration takes just minutes to set up with a simple API connection, and doesn't require any coding knowledge."
    },
    {
      question: "Can I track how many sales come from Caramel's AI ads?",
      answer: "Yes! You'll see real-time performance tracking & conversion metrics through our intuitive dashboard. We provide comprehensive analytics showing impressions, clicks, conversions, and revenue attributed to each campaign."
    },
    {
      question: "Does AI automatically adjust my ad spend?",
      answer: "Absolutely. Caramel optimizes budget allocation based on real-time ad performance. The AI constantly monitors which ads are performing best and shifts your budget toward top performers while scaling back on underperforming campaigns."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most customers see initial improvements within the first 2 weeks as the AI begins learning. Significant performance gains typically appear within 30-45 days as the system builds more data and optimizes your campaigns."
    },
    {
      question: "Do I need technical knowledge to use Caramel?",
      answer: "Not at all! Caramel is designed for e-commerce business owners, not tech experts. Our platform handles all the technical aspects of ad creation, optimization and targeting without requiring any technical skills from you."
    },
    {
      question: "What ad platforms does Caramel work with?",
      answer: "Caramel currently optimizes campaigns across Facebook/Instagram Ads, Google Ads, TikTok Ads, and Pinterest Ads. We're continuously adding support for additional platforms based on customer demand."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 pt-32">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our AI-powered ad optimization platform.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-16 max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-6">
                Still have questions? We're here to help!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center text-caramel-600 font-medium hover:text-caramel-800 transition-colors"
              >
                Contact our support team
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
