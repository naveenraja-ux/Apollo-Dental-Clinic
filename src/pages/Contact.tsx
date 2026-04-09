import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Building2 } from 'lucide-react';

const branches = [
  {
    id: 'coimbatore',
    city: 'Coimbatore',
    area: 'RS Puram',
    address: '581, DB Road, RS Puram, Coimbatore',
    phones: ['99446 86569', '0422-4350861', '93840 05101'],
    email: 'drmanimekalaiperio@gmail.com',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.332827431114!2d76.9498661!3d11.012607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591d78a20237%3A0x7444c1ee3a0acefe!2sApollo%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1712644785644!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/10.960896,76.9785856/Apollo+Dental+Clinic,+581,+Diwan+Bahadur+Rd,+R.S.+Puram,+Coimbatore,+Tamil+Nadu+641002/@11.0126031,76.9498855,65m/data=!3m1!1e3!4m15!4m14!1m6!3m4!1m2!1d76.951422!2d11.0103162!3s0x3ba8591cdf1eed27:0x15ee6b63058637d6!4e1!1m5!1m1!1s0x3ba8591d78a20237:0x7444c1ee3a0acefe!2m2!1d76.9498661!2d11.012607!3e9'
  },
  {
    id: 'chennai',
    city: 'Chennai',
    area: 'Tiruporur',
    address: 'No 15, near Ambedkar Roundana statue, Tiruporur taluk, Chengalpattu district, PIN 603110',
    phones: ['99446 86569', '91504 56054', '93840 05103'],
    email: 'drmanimekalaiperio@gmail.com',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.428574169!2d80.188!3d12.727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5250!2sApollo%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1712644785644!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/search/Apollo+dental+and+cosmetology+clinics+Tiruporur'
  }
];

export default function Contact() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

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
          <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => setActiveBranch(branch)}
                    className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all border ${
                      activeBranch.id === branch.id
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {branch.city}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBranch.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span 
                    className="inline-block px-3 py-1 bg-primary/20 text-primary-light text-[9px] font-bold tracking-widest uppercase rounded-full mb-3 border border-primary/20"
                  >
                    {activeBranch.city} Clinic
                  </motion.span>
                  
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight">
                    Visit Our <br />
                    <span className="text-primary-light">{activeBranch.area} Branch.</span>
                  </h1>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Location</p>
                        <p className="text-sm text-slate-200 font-medium leading-snug max-w-xs">{activeBranch.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call Us</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {activeBranch.phones.map((phone) => (
                            <a key={phone} href={`tel:+91${phone.replace(/\s|-/g, '')}`} className="text-sm text-slate-200 font-medium hover:text-primary-light transition-colors">
                              {phone.includes('-') ? phone : `+91 ${phone}`}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email Us</p>
                        <a href={`mailto:${activeBranch.email}`} className="text-sm text-slate-200 font-medium hover:text-primary-light transition-colors">{activeBranch.email}</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <a 
                      href={`tel:+91${activeBranch.phones[0].replace(/\s|-/g, '')}`} 
                      className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 group text-xs"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Book Appointment
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Map View */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto bg-slate-800 relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranch.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <iframe
                  src={activeBranch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Apollo Dental Clinic - ${activeBranch.city}`}
                  className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Map Overlay for better blending */}
            <div className="absolute inset-0 pointer-events-none border-l border-white/10 hidden lg:block" />
            
            {/* Get Directions Overlay Button */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href={activeBranch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-3 hover:bg-primary hover:text-white transition-all scale-90 group-hover:scale-100"
              >
                <MapPin className="w-5 h-5" />
                Get Directions to Apollo Dental Clinic
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href={`tel:+91${activeBranch.phones[0].replace(/\s/g, '')}`}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-all transform hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
