import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-[40px] bg-white min-h-screen lg:h-screen flex flex-col lg:overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-start py-0 px-0 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-none lg:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row flex-1 min-h-0 max-h-none lg:max-h-[calc(100vh-100px)]"
        >
          {/* Left Side: Contact Details */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1 bg-primary/20 text-primary-light text-[10px] font-bold tracking-widest uppercase rounded-full mb-4 border border-primary/20"
              >
                Get In Touch
              </motion.span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Let's Start Your <br />
                <span className="text-primary-light">Transformation.</span>
              </h1>

              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Our Location</p>
                    <p className="text-base text-slate-200 font-medium leading-snug">123, West Sambandam Road, RS Puram, Coimbatore - 641002</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call Us</p>
                    <a href="tel:+919944686569" className="text-base text-slate-200 font-medium hover:text-primary-light transition-colors">+91 99446 86569</a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email Us</p>
                    <a href="mailto:drmanimekalaiperio@gmail.com" className="text-base text-slate-200 font-medium hover:text-primary-light transition-colors">drmanimekalaiperio@gmail.com</a>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <a 
                  href="tel:+919944686569" 
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 group text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Map View */}
          <div className="lg:w-1/2 h-[300px] lg:h-auto bg-slate-800 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.332827431114!2d76.9500732!3d11.0125122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590000000001%3A0x0!2zMTHCsDAwJzQ1LjAiTiA3NsKwNTcnMDAuMyJF!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Apollo Clinic Location"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            {/* Map Overlay for better blending */}
            <div className="absolute inset-0 pointer-events-none border-l border-white/10 hidden lg:block" />
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href="tel:+919944686569"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all transform hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
