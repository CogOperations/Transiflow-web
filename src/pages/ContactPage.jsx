import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const heroRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: "Email",
      details: "hello@transiflow.com",
      sub: "support@transiflow.com",
      action: "mailto:hello@transiflow.com",
      gradient: "from-[#007C91]/20 to-[#007C91]/5",
      iconBg: "bg-[#007C91]",
    },
    {
      icon: <FiPhone size={24} />,
      title: "Phone",
      details: "+234 000 000 0000",
      sub: "Mon-Fri, 9am - 6pm",
      action: "tel:+2340000000000",
      gradient: "from-[#0D2024]/20 to-[#0D2024]/5",
      iconBg: "bg-[#0D2024]",
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Office",
      details: "Abuja, Nigeria",
      sub: "Lagos, Nigeria",
      action: "#",
      gradient: "from-[#007C91]/20 to-[#007C91]/5",
      iconBg: "bg-[#007C91]",
    },
  ];

  const faqs = [
    { question: "How quickly do you respond?", answer: "Within 24 hours on business days." },
    { question: "Do you offer demos?", answer: "Yes, we offer free product demos for transport operators." },
    { question: "Is there a free trial?", answer: "Contact us to learn about our trial options." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden bg-[#0D2024] px-5 pb-16 pt-24 sm:pb-20 md:px-10 lg:px-20 lg:pb-28 lg:pt-28 -mt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format"
              alt="Contact background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0D2024]/85"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center px-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#007C91]/30 bg-[#007C91]/10 px-3 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-6"
            >
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#007C91] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#007C91]">Get in Touch</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Let's talk about{" "}
              <span className="text-[#007C91]">safer and smarter</span>
              <br className="hidden sm:block" />
              transport.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-2"
            >
              Reach out for product demos, partnership discussions, or help with onboarding your transport workflow.
            </motion.p>
          </div>
        </section>

        {/* Contact Info - Unique Diagonal Cards */}
        <section className="bg-white px-5 py-16 sm:py-20 md:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 -mt-12 relative z-20">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.title}
                  href={info.action}
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative block overflow-hidden rounded-2xl bg-white p-0 shadow-xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${info.gradient}, transparent)`,
                  }}
                >
                  {/* Diagonal accent line */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rotate-45 bg-[#007C91]/5 group-hover:bg-[#007C91]/10 transition-all duration-500" />
                  
                  <div className="relative p-6">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${info.iconBg} text-white shadow-lg transition-all group-hover:scale-110 group-hover:rotate-6 duration-300`}>
                      {info.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0D2024]">{info.title}</h3>
                    
                    <p className="mt-2 text-base font-semibold text-[#007C91]">{info.details}</p>
                    <p className="text-sm text-gray-400 mt-1">{info.sub}</p>
                    
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#007C91] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
                      Get in touch
                      <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Bottom decorative bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#007C91] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="bg-gray-50 px-5 py-16 sm:py-20 md:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2">
              
              {/* Form Side - Premium Design */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative rounded-2xl bg-white p-6 sm:p-8 shadow-xl overflow-hidden"
              >
                {/* Decorative dots */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#007C91]/5" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#007C91]/5" />
                
                <div className="relative">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#007C91]/10 px-3 py-1 mb-3">
                      <FiMessageCircle size={12} className="text-[#007C91]" />
                      <span className="text-xs font-medium text-[#007C91]">We'd love to hear from you</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#0D2024]">Send us a message</h2>
                    <p className="text-sm text-gray-500 mt-1">Fill out the form and we'll respond within 24 hours</p>
                  </div>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <FiCheckCircle size={32} className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0D2024]">Message Sent!</h3>
                      <p className="text-gray-500 mt-2">Thanks for reaching out. We'll respond shortly.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="group">
                        <label className="mb-2 block text-sm font-semibold text-[#0D2024]">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-[#007C91] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,124,145,0.1)]"
                        />
                      </div>

                      <div className="group">
                        <label className="mb-2 block text-sm font-semibold text-[#0D2024]">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-[#007C91] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,124,145,0.1)]"
                        />
                      </div>

                      <div className="group">
                        <label className="mb-2 block text-sm font-semibold text-[#0D2024]">Message</label>
                        <textarea
                          rows="5"
                          required
                          placeholder="Tell us what you need"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-[#007C91] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,124,145,0.1)]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#007C91] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#006b7d]"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Send Message <FiSend size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Right Side - Premium Info Panels */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6"
              >
                {/* Office Hours - Premium Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D2024] to-[#0D2024]/90 p-6 shadow-xl">
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#007C91]/20 blur-2xl" />
                  
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#007C91]">
                        <FiClock size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Office Hours</h3>
                        <p className="text-xs text-white/50">We're here to help</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pl-14">
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/60">Monday - Friday</span>
                        <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-white/60">Saturday</span>
                        <span className="font-medium text-white">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">Sunday</span>
                        <span className="font-medium text-white/40">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section - Premium Accordion Style */}
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#007C91]/10 text-[#007C91]">
                      <FiMessageCircle size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0D2024]">Quick Answers</h3>
                      <p className="text-xs text-gray-400">Frequently asked questions</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-[#0D2024] group-hover:text-[#007C91] transition-colors">
                              {faq.question}
                            </p>
                            <p className="text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {faq.answer}
                            </p>
                          </div>
                          <div className="h-6 w-6 rounded-full bg-gray-100 group-hover:bg-[#007C91]/10 flex items-center justify-center transition-all">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-400 group-hover:bg-[#007C91]" />
                          </div>
                        </div>
                        {i < faqs.length - 1 && <div className="mt-3 h-px bg-gray-100" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badge - Premium */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#007C91]/10 to-transparent border border-[#007C91]/20 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#007C91]">Average response time</p>
                      <p className="text-2xl font-bold text-[#0D2024] mt-1">&lt; 24 hours</p>
                      <p className="text-xs text-gray-500 mt-2">We take pride in fast, helpful responses</p>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-[#007C91]/20 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-[#007C91] animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map / Location Section - Premium */}
        <section className="bg-white px-5 py-16 sm:py-20 md:px-10 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#007C91]/10 px-3 py-1 mb-3">
                <FiMapPin size={12} className="text-[#007C91]" />
                <span className="text-xs font-medium text-[#007C91]">Find us here</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2024]">Visit Our Office</h2>
              <p className="text-gray-500 mt-2">We'd love to meet you in person</p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0z?q=80&w=2074&auto=format"
                alt="Map location"
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2070&auto=format";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2024]/80 via-[#0D2024]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block rounded-xl bg-white/95 backdrop-blur-sm p-4 shadow-xl">
                  <p className="font-bold text-[#0D2024]">Transiflow Headquarters</p>
                  <p className="text-sm text-gray-500">Abuja, Nigeria</p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm text-[#007C91] font-medium mt-2 hover:gap-2 transition-all">
                    Get Directions <FiArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}