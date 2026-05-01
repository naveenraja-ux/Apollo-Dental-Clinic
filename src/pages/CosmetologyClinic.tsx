import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Zap, 
  Heart, 
  Sun, 
  Droplets, 
  Scissors,
  Shield,
  Users,
  Award,
  Clock,
  Activity,
  Play,
  X
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const treatmentCategories = [
  {
    id: 'skin',
    title: 'Skin Treatment',
    icon: Sparkles,
    image: 'https://new-amethyst-92u7usumew.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_10_56%20PM.png',
    overview: 'Revitalize your skin with our medical-grade treatments designed to address acne, pigmentation, and uneven texture.',
    procedure: 'Includes chemical peels, microdermabrasion, and advanced facials tailored to your specific skin type and concerns.',
    benefits: ['Even skin tone', 'Reduced acne scars', 'Radiant complexion', 'Deep hydration'],
  },
  {
    id: 'laser',
    title: 'Laser Treatment',
    icon: Zap,
    image: 'https://characteristic-gray-u7nxongijp.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_11_01%20PM.png',
    overview: 'Experience the power of light. Our FDA-approved lasers offer permanent solutions for hair removal and skin rejuvenation.',
    procedure: 'Precise laser energy targets hair follicles or pigment without damaging surrounding tissue for safe, effective results.',
    benefits: ['Permanent hair reduction', 'Safe for all skin types', 'Minimal discomfort', 'Quick sessions'],
  },
  {
    id: 'hair',
    title: 'Hair Treatments',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=2026',
    overview: 'Combat hair loss and thinning with our clinical hair restoration therapies and scalp rejuvenation programs.',
    procedure: 'We offer PRP therapy, mesotherapy, and advanced scalp treatments to stimulate hair growth and improve hair density.',
    benefits: ['Reduced hair fall', 'Thicker hair growth', 'Healthy scalp', 'Natural results'],
  },
  {
    id: 'anti-aging',
    title: 'Anti-aging Procedures',
    icon: Heart,
    image: 'https://known-aqua-w3z8zjiom2.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_11_16%20PM.png',
    overview: 'Turn back the clock with our non-surgical anti-aging solutions that restore volume and smooth out fine lines.',
    procedure: 'Includes Botox, dermal fillers, and thread lifts performed by expert cosmetic surgeons for a youthful, natural look.',
    benefits: ['Reduced wrinkles', 'Restored facial volume', 'Lifted appearance', 'Immediate results'],
  },
  {
    id: 'facial',
    title: 'Facial Treatments',
    icon: Droplets,
    image: 'https://gentle-purple-cfwxjm8cs9.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_11_39%20PM.png',
    overview: 'Indulge in our premium clinical facials that combine relaxation with medical-grade skin rejuvenation.',
    procedure: 'Multi-step facials including deep cleansing, exfoliation, extraction, and nutrient infusion for glowing skin.',
    benefits: ['Deeply cleansed pores', 'Stress relief', 'Improved circulation', 'Instant glow'],
  },
];

const gridTreatments = [
  {
    title: 'Hydrafacial',
    description: 'Deep cleansing and hydration for instant glow.',
    image: 'https://steep-cyan-b2kv9npgjw.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_47_43%20PM.png',
  },
  {
    title: 'Microblading',
    description: 'Semi-permanent eyebrow enhancement for perfect shape.',
    image: 'https://permanent-amaranth-k0uxxnjmlh.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_48_01%20PM.png',
  },
  {
    title: 'Chemical Peels',
    description: 'Exfoliate and renew skin texture and tone.',
    image: 'https://current-sapphire-hutmpbix2f.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_48_06%20PM.png',
  },
  {
    title: 'PRP Therapy (Skin and Hair)',
    description: 'Natural rejuvenation using your own plasma.',
    image: 'https://spontaneous-magenta-nl8afmpqvb.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_48_11%20PM.png',
  },
  {
    title: 'Laser Hair Removal',
    description: 'Permanent hair reduction for smooth skin.',
    image: 'https://still-coffee-7qljkmfpkb.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_48_15%20PM.png',
  },
  {
    title: 'Tattoo Removal',
    description: 'Safe and effective laser tattoo clearing.',
    image: 'https://shallow-silver-uw7kw0oy50.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_48_20%20PM.png',
  },
  {
    title: 'Skin Tightening',
    description: 'Non-surgical lifting and firming solutions.',
    image: 'https://loud-coffee-ul0ewht7pz.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_48_24%20PM.png',
  },
  {
    title: 'PRP and GFC Therapy',
    description: 'Advanced growth factor concentrate for hair.',
    image: 'https://voluminous-peach-frwbcddsbn.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2008_48_29%20PM.png',
  },
];

const whyChooseCards = [
  {
    title: 'Expert Aesthetic Specialists',
    description: 'Our team consists of board-certified dermatologists and specialists.',
    icon: Users,
  },
  {
    title: 'Advanced Laser Technology',
    description: 'We use the latest FDA-approved laser systems for precision.',
    icon: Zap,
  },
  {
    title: 'Personalized Solutions',
    description: 'Customized treatment plans tailored to your unique skin and hair.',
    icon: Activity,
  },
  {
    title: 'Safe and Hygienic',
    description: 'Strict medical protocols to ensure a safe and sterile environment.',
    icon: Shield,
  },
  {
    title: 'Long-Lasting Results',
    description: 'Clinically proven treatments for visible and durable outcomes.',
    icon: Award,
  },
];

export default function CosmetologyClinic() {
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(id || 'skin');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const activeTreatment = treatmentCategories.find(t => t.id === selectedId) || treatmentCategories[0];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0f172c] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <img
              src="https://isolated-copper-leuyc51kfl.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2007_57_22%20PM.png"
              alt="Cosmetology Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              decoding="async"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172c] via-[#0f172c]/80 to-transparent" />
          
          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -80, 0],
                x: [0, 40, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
              className="absolute w-1 h-1 bg-primary-light rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10 pt-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold mb-5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Apollo Clinical Cosmetology
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5 leading-[1.1] max-w-2xl">
                Advanced <span className="text-accent">Aesthetic</span> Solutions
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Discover the perfect blend of medical science and aesthetic artistry. Our cosmetology division provides state-of-the-art treatments for skin, hair, and body.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: Shield, text: 'FDA Approved Technology' },
                  { icon: Users, text: 'Expert Aesthetic Specialists' },
                  { icon: Heart, text: 'Personalized Care Plans' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-white/90">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium text-xs md:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-accent text-primary px-7 py-3 rounded-full font-bold shadow-premium hover:bg-white transition-all flex items-center gap-2 text-sm"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl aspect-[1.1/1] max-h-[460px] w-full ml-auto">
                <img
                  src="https://isolated-copper-leuyc51kfl.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2007_57_22%20PM.png"
                  alt="Cosmetology Treatment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Categories Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2.5 mb-6">
            {treatmentCategories.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedId(t.id)}
                className={`px-6 py-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2.5 ${
                  selectedId === t.id
                    ? 'bg-[#0f172c] text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <t.icon className={`w-5 h-5 ${selectedId === t.id ? 'text-accent' : 'text-slate-400'}`} />
                {t.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[24px] p-5 md:p-8 shadow-soft border border-slate-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{activeTreatment.title}</h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {activeTreatment.overview}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 md:p-5 rounded-xl border border-slate-100">
                    <h4 className="text-sm md:text-base font-bold text-primary mb-2 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-accent" />
                      The Treatment Process
                    </h4>
                    <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                      {activeTreatment.procedure}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">Expected Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {activeTreatment.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="text-accent w-3.5 h-3.5 shrink-0" />
                          <span className="text-slate-600 text-xs md:text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video lg:aspect-[16/9] rounded-xl overflow-hidden shadow-lg max-h-[320px] group">
                  {playingVideo ? (
                    <div className="relative w-full h-full bg-black">
                      <video 
                        src={playingVideo} 
                        className="w-full h-full object-cover" 
                        controls 
                        autoPlay 
                      />
                      <button 
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setPlayingVideo(selectedId === 'skin' ? "https://image2url.com/r2/default/videos/1775635168758-f4538582-1831-446c-a75b-16f12dd407db.mp4" : "https://image2url.com/r2/default/videos/1775635234029-919355fd-ea34-4f17-8334-4573e8f41637.mp4")}
                    >
                      <img
                        src={activeTreatment.image}
                        alt={activeTreatment.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                          <Play className="w-8 h-8 fill-primary ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Grid Treatments Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Advanced Aesthetic Treatments for Radiant Skin and Hair
            </motion.h2>
            <p className="text-slate-600 text-lg">
              Personalized cosmetology solutions designed to enhance your natural beauty with safe, effective, and modern techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {gridTreatments.map((treatment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#5A2960] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <div className="w-8 h-1 bg-accent rounded-full group-hover:w-full transition-all duration-500" />
                </div>
                <div className="absolute inset-0 rounded-3xl opacity-100 md:opacity-0 md:group-hover:opacity-100 pointer-events-none transition-opacity duration-500 shadow-[0_0_40px_rgba(90,41,96,0.15)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-accent/5 -z-10" />
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Why Choose Apollo Cosmetology Clinic
            </motion.h2>
            <p className="text-slate-600 text-lg">
              Experience expert care with advanced technology designed for safe, effective, and long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChooseCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-soft border border-slate-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                  <card.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Reveal Your Best Skin and Confidence
            </h2>
            <p className="text-slate-600 text-xl mb-12 leading-relaxed">
              Book your consultation today and experience advanced cosmetology care tailored to you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#0f172c] text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(15,23,44,0.3)] transition-all"
            >
              Book Consultation Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
