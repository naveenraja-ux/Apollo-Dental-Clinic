import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SectionHeader from '../components/ui/SectionHeader';
import { 
  Shield, 
  Target, 
  Eye, 
  Award, 
  Heart, 
  MapPin, 
  Building2, 
  Smile, 
  Star,
  Wallet,
  Stethoscope,
  Zap,
  MessageSquare,
  FileText,
  Wrench,
  HelpCircle,
  Clock,
  Gem,
  Sparkles,
  Plus,
  Activity,
  Droplets,
  Microscope,
  Lightbulb,
  PenTool,
  BookOpen,
  Scissors,
  Syringe,
  FlaskConical,
  UserCheck
} from 'lucide-react';

// Custom Dental Icon
const DentalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5" /><path d="M12 5.5l3 1.5" />
  </svg>
);

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* 🧩 SECTION 1: HERO ABOUT (Intro Section) */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-20 pb-20">
        {/* Background Image with Soft Light Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Clinic Background" 
            className="w-full h-full object-cover scale-105 opacity-30"
            referrerPolicy="no-referrer"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        <div className="container-custom relative z-10 w-full text-center">
          <div className="max-w-4xl mx-auto -mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-bold mb-6 shadow-sm tracking-[0.2em] uppercase mx-auto"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Refining Dental and Aesthetic Care
              </motion.div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Apollo Dental and <span className="text-primary">Aesthetic Care</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                Delivering advanced treatments with precision, care, and trust for a healthier smile and confident you.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {[
                  { icon: <DentalIcon className="w-5 h-5" />, text: "20+ Years Expertise", color: "bg-blue-50 text-blue-600 border-blue-100" },
                  { icon: <Sparkles className="w-5 h-5" />, text: "Advanced Solutions", color: "bg-purple-50 text-purple-600 border-purple-100" },
                  { icon: <Shield className="w-5 h-5" />, text: "Patient-Centered", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                  { icon: <Activity className="w-5 h-5" />, text: "Precision Results", color: "bg-rose-50 text-rose-600 border-rose-100" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-12 h-12 ${item.color} border rounded-2xl shadow-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-700 text-[12px] tracking-wide">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 SECTION 2: WHO WE ARE (Clinic Identity) */}
      <section className="py-32 md:py-48 lg:py-56 bg-white flex items-center min-h-[85vh] relative overflow-hidden">
        {/* Subtle Background Elements for Section 2 */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <SectionHeader 
                title="Who We Are" 
                subtitle="Clinic Identity" 
                centered={false} 
              />
              <p className="text-xl md:text-2xl text-slate-600 mb-10 font-medium leading-relaxed -mt-6">
                A modern clinic blending dentistry and cosmetology under one expert roof, dedicated to your complete well-being.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-primary/5 rounded-full shadow-sm text-[11px] font-bold text-primary border border-primary/10 uppercase tracking-widest">
                  Established Excellence
                </div>
                <div className="px-6 py-3 bg-slate-50 rounded-full shadow-sm text-[11px] font-bold text-slate-600 border border-slate-100 uppercase tracking-widest">
                  Patient-First Care
                </div>
              </div>
            </motion.div>

            {/* Right Side: Features Grid in a Card-like Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 bg-slate-50/80 p-12 md:p-16 lg:p-20 rounded-[5rem] border border-slate-100 shadow-soft backdrop-blur-sm"
            >
              {[
                { icon: <Building2 className="w-7 h-7" />, title: "Specialized", text: "Dental & aesthetic treatments" },
                { icon: <Heart className="w-7 h-7" />, title: "Precision", text: "Focused on comfort & results" },
                { icon: <Target className="w-7 h-7" />, title: "Trusted", text: "Serving Coimbatore with care" },
                { icon: <Shield className="w-7 h-7" />, title: "Ethical", text: "Transparent patient-first approach" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-500 group flex flex-col gap-5 min-h-[220px] justify-center"
                >
                  <div className="text-primary w-14 h-14 bg-accent rounded-[1.25rem] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-2.5">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 SECTION 3: FOUNDER SPOTLIGHT (Dr. Manimekalai) */}
      <section className="py-16 md:py-20 bg-slate-50 flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              <SectionHeader 
                title="Dr. Manimekalai" 
                subtitle="Founder Spotlight" 
                centered={false} 
              />
              <p className="text-primary font-bold text-lg mb-6 -mt-6">Founder & Chief Managing Director</p>
              
              <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                <p>
                  With over 20+ years of expertise in dental and aesthetic medicine, Dr. Manimekalai has been the driving force behind Apollo Clinics, bringing innovation, precision, and patient-centered care to every treatment.
                </p>
                <p>
                  She is known for introducing advanced clinical techniques and building a trusted healthcare environment focused on excellence and results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Stethoscope className="w-5 h-5" />, title: "20+ Years", sub: "Experience" },
                  { icon: <Award className="w-5 h-5" />, title: "CMD", sub: "Chief Managing Director" },
                  { icon: <Gem className="w-5 h-5" />, title: "Expert", sub: "Dental & Aesthetic" },
                  { icon: <Zap className="w-5 h-5" />, title: "Pioneer", sub: "Advanced Tech" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -3 }}
                    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-soft flex items-center gap-3 group transition-all"
                  >
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-none mb-1">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 font-medium">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <Link 
                  to="/publications"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary-dark transition-all shadow-premium group"
                >
                  View My Publication
                  <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side: Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-premium border-4 border-white max-w-[380px] aspect-[4/5]">
                <img
                  src="https://image2url.com/r2/default/images/1773843845340-9b7bccd1-9095-4170-9bf6-b1ee828560b1.png"
                  alt="Dr. Manimekalai"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 bg-white p-5 rounded-2xl shadow-premium z-20 max-w-[220px] border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active CMD</span>
                </div>
                <p className="text-xs font-bold text-slate-800 italic leading-relaxed">"Committed to bringing innovation and trust to aesthetic medicine."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🧩 SECTION 4: WHAT WE OFFER (Services Overview) */}
      <section className="py-12 md:py-16 bg-white min-h-[50vh] flex items-center">
        <div className="container-custom">
          <SectionHeader 
            title="Comprehensive Care Under One Roof" 
            subtitle="What We Offer" 
            centered 
          />
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12 -mt-8 text-base">
            From oral health to aesthetic enhancement, we provide complete solutions tailored to your needs.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <DentalIcon className="w-7 h-7" />, title: "Advanced Dental Treatments", color: "bg-blue-50 text-blue-600" },
              { icon: <Smile className="w-7 h-7" />, title: "Skin & Hair Cosmetology Solutions", color: "bg-purple-50 text-purple-600" },
              { icon: <Zap className="w-7 h-7" />, title: "Laser & Aesthetic Procedures", color: "bg-amber-50 text-amber-600" },
              { icon: <Shield className="w-7 h-7" />, title: "Preventive & Corrective Care", color: "bg-emerald-50 text-emerald-600" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.01 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-7 rounded-[2.2rem] border border-slate-100 shadow-soft flex flex-col items-center text-center group transition-all duration-300 hover:shadow-premium"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 SECTION 5: WHY CHOOSE US (Trust & Value) */}
      <section className="py-10 md:py-12 bg-soft-gray min-h-[70vh] flex items-center">
        <div className="container-custom">
          <SectionHeader 
            title="Why Choose Apollo Clinics" 
            subtitle="Our Advantage" 
            centered 
          />
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10 -mt-8 text-base">
            Trusted by patients for quality care, advanced technology, and consistent results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Wallet className="w-6 h-6" />, 
                title: "Affordable Care", 
                desc: "Quality treatments accessible without compromise for everyone." 
              },
              { 
                icon: <Eye className="w-6 h-6" />, 
                title: "Transparent Process", 
                desc: "Clear communication from diagnosis to recovery with no hidden costs." 
              },
              { 
                icon: <Zap className="w-6 h-6" />, 
                title: "Advanced Tech", 
                desc: "Modern procedures using the latest equipment for optimal outcomes." 
              },
              { 
                icon: <Stethoscope className="w-6 h-6" />, 
                title: "Medical Experts", 
                desc: "Skilled professionals with proven expertise in their respective fields." 
              },
              { 
                icon: <Heart className="w-6 h-6" />, 
                title: "Patient-Centric", 
                desc: "Prioritizing comfort, safety, and satisfaction for a positive experience." 
              },
              { 
                icon: <HelpCircle className="w-6 h-6" />, 
                title: "Education Focus", 
                desc: "Empowering patients with knowledge about their health and options." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[2rem] shadow-soft hover:shadow-premium transition-all duration-300 border border-slate-100/50 group"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 SECTION 6: OUR APPROACH (Patient Journey) */}
      <section className="py-16 md:py-20 bg-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="container-custom">
          <SectionHeader 
            title="Our Approach to Care" 
            subtitle="The Process" 
            centered 
          />
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-20 -mt-8 text-base">
            A structured process designed for comfort, clarity, and best results.
          </p>
          
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
              {[
                { 
                  icon: <MessageSquare className="w-6 h-6" />, 
                  title: "Consultation", 
                  desc: "Understanding your needs with expert evaluation" 
                },
                { 
                  icon: <FileText className="w-6 h-6" />, 
                  title: "Treatment Plan", 
                  desc: "Tailored solutions based on your condition" 
                },
                { 
                  icon: <Wrench className="w-6 h-6" />, 
                  title: "Procedure", 
                  desc: "Using modern techniques for precision results" 
                },
                { 
                  icon: <UserCheck className="w-6 h-6" />, 
                  title: "Post-Care", 
                  desc: "Continuous support and follow-up" 
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white border-2 border-accent rounded-full flex items-center justify-center text-primary mb-6 shadow-premium relative group-hover:scale-110 transition-transform">
                    {item.icon}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">
                      0{i + 1}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🧩 SECTION 7: TRUST & CREDIBILITY (Stats/Impact) */}
      <section className="py-16 md:py-20 bg-soft-gray overflow-hidden relative min-h-[50vh] flex items-center">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] -z-0" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
            >
              Committed to Excellence in Care
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Delivering results that build confidence and long-term trust through clinical expertise and patient-first values.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Smile className="w-6 h-6" />, count: "1000+", label: "Happy Patients" },
              { icon: <MapPin className="w-6 h-6" />, count: "Coimbatore", label: "Trusted Hub" },
              { icon: <Shield className="w-6 h-6" />, count: "Safe & Hygienic", label: "Environment" },
              { icon: <Star className="w-6 h-6" />, count: "Consistent", label: "Satisfaction" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-slate-100 p-6 rounded-[2rem] text-center group hover:shadow-premium transition-all duration-500"
              >
                <div className="text-primary mb-5 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1 tracking-tight text-slate-900">{item.count}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
