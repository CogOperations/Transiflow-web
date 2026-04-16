import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle, FiArrowRight } from "react-icons/fi";

const faqs = [
  {
    question: "How does Transiflow improve transport safety?",
    answer: "Transiflow provides real-time trip monitoring, emergency visibility tools, and proactive transport oversight. Every journey is tracked with live data, and passengers have access to safety features that ensure continuous reassurance throughout their trip.",
  },
  {
    question: "Can transport operators integrate their existing systems?",
    answer: "Yes, Transiflow is built to integrate seamlessly with existing transport management systems. Our API allows for easy integration with scheduling software, GPS tracking, and communication platforms.",
  },
  {
    question: "Is Transiflow available in my city?",
    answer: "Transiflow is currently active in 38+ cities across 4 regions. We're expanding rapidly. Contact our team to check availability in your city or to request a launch.",
  },
  {
    question: "How does real-time tracking work?",
    answer: "Our platform uses GPS and cellular data to provide live location updates, ETA predictions, and route progress. Passengers can see exactly where their transport is and when it will arrive.",
  },
  {
    question: "What safety measures are in place for passengers?",
    answer: "We offer driver verification, emergency contact systems, incident tracking, and 24/7 support access. All trips are monitored in real-time with automated alerts for any anomalies.",
  },
  {
    question: "How do I get started with Transiflow?",
    answer: "Simply click 'Get Started' or 'Book a Demo' on our website. Our team will reach out to understand your needs and set up your account within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={sectionRef} className="bg-white px-5 py-16 md:px-8 lg:px-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 mb-4">
            <FiHelpCircle size={14} className="text-[#007C91]" />
            <span className="text-xs font-semibold uppercase tracking-wide text-[#007C91]">
              FAQ
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2024] mb-3">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about Transiflow. Can't find what you're looking for? Feel free to contact our support team.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left transition-all duration-200 hover:bg-gray-50"
              >
                <span className="text-base md:text-lg font-semibold text-[#0D2024] pr-4">
                  {faq.question}
                </span>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${openIndex === index ? "bg-[#007C91] text-white" : "bg-gray-100 text-[#007C91]"}`}>
                  {openIndex === index ? (
                    <FiMinus size={14} />
                  ) : (
                    <FiPlus size={14} />
                  )}
                </div>
              </button>
              
              <AnimatePresence mode="wait">
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA with colored background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center p-8 rounded-2xl bg-[#0D2024] border border-[#007C91]/20"
        >
          <p className="text-white font-semibold text-lg mb-2">
            Still have questions?
          </p>
          <p className="text-sm text-white/60 mb-5">
            We're here to help you get started with Transiflow.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#007C91] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#006b7d] hover:scale-[1.02]"
          >
            Contact Support
            <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}