import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const dentalTreatments = [
  { title: 'Dental Implants', desc: 'Permanent solution for missing teeth with natural-looking results.' },
  { title: 'Root Canal Treatment', desc: 'Save your natural teeth with our painless root canal procedures.' },
  { title: 'Orthodontic Braces', desc: 'Straighten your teeth and improve your bite with modern braces.' },
  { title: 'Dental Aligners', desc: 'Clear, removable aligners for a discreet orthodontic treatment.' },
  { title: 'Teeth Whitening', desc: 'Brighten your smile with our professional whitening services.' },
  { title: 'Smile Designing', desc: 'Complete smile makeover using advanced aesthetic dentistry.' },
  { title: 'Dental Crowns & Bridges', desc: 'Restore damaged or missing teeth with durable crowns and bridges.' },
];

const cosmetologyTreatments = [
  { title: 'Skin Rejuvenation', desc: 'Revitalize your skin and restore its youthful glow.' },
  { title: 'Acne Treatment', desc: 'Effective solutions for acne and acne scarring.' },
  { title: 'Anti Aging Treatments', desc: 'Reduce wrinkles and fine lines with advanced anti-aging care.' },
  { title: 'Hair Loss Treatment', desc: 'Restore hair density and health with modern therapies.' },
  { title: 'Laser Treatments', desc: 'Safe and effective laser solutions for various skin concerns.' },
  { title: 'PMU Procedures', desc: 'Permanent makeup for brows, lips, and more by experts.' },
];

export default function Treatments() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0f172c] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053"
            alt="Treatments Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172c] via-[#0f172c]/80 to-transparent" />
        
        <div className="container-custom relative z-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-accent">Treatments</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Experience world-class dental and aesthetic care with our comprehensive range of specialized treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dental Section */}
      <section id="dental" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Advanced Dental Care" subtitle="Dentistry" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentalTreatments.map((item, i) => (
              <div key={i} className="bg-soft-gray p-8 rounded-[2.5rem] hover:bg-accent transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmetology Section */}
      <section id="cosmetology" className="section-padding bg-soft-gray">
        <div className="container-custom">
          <SectionHeader title="Clinical Cosmetology" subtitle="Aesthetics" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cosmetologyTreatments.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] hover:bg-accent transition-colors group border border-slate-100">
                <div className="w-12 h-12 bg-soft-gray rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Not sure which treatment is right for you?</h2>
          <p className="text-xl text-primary-light mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our specialists for a personalized treatment plan.
          </p>
          <button className="bg-white text-primary px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-slate-50 transition-all transform hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
