import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Award, 
  Sparkles, 
  Stethoscope, 
  HeartPulse, 
  Microscope,
  Calendar,
  Phone,
  ArrowRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    title: "General Dentistry",
    description: "Comprehensive check-ups, cleanings, and preventive care to maintain your oral health.",
    icon: <Stethoscope className="w-6 h-6" />,
    image: "https://continued-blue-duhdd4jrm1.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2003_02_25%20PM.png"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, teeth whitening, and aesthetic bonding.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://artistic-scarlet-uroarcm2g0.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2003_02_38%20PM.png"
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with modern braces and clear aligner solutions.",
    icon: <Award className="w-6 h-6" />,
    image: "https://monetary-black-efqz1erudt.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2003_02_34%20PM.png"
  },
  {
    title: "Dental Implants",
    description: "Permanent and natural-looking solutions for missing teeth.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "https://image2url.com/r2/default/images/1773939607055-34fc5c9e-e1a1-42fc-9dc8-1039b997b8af.png"
  },
  {
    title: "Root Canal Therapy",
    description: "Expert endodontic care to save your natural teeth with minimal discomfort.",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "https://image2url.com/r2/default/images/1773939301588-c88ed551-34ad-43ce-8121-c3e592c8fc13.png"
  },
  {
    title: "Oral Surgery",
    description: "Safe and precise surgical procedures including wisdom teeth extraction.",
    icon: <Microscope className="w-6 h-6" />,
    image: "https://worthy-aqua-tfzahjxe4c.edgeone.app/ChatGPT%20Image%20Mar%2020,%202026,%2003_08_09%20PM.png"
  }
];

const features = [
  {
    title: "Expert Dentists",
    description: "Our team consists of highly qualified specialists with decades of experience.",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "Advanced Technology",
    description: "We use the latest digital imaging and laser technology for precise results.",
    icon: <Microscope className="w-5 h-5" />
  },
  {
    title: "Strict Hygiene",
    description: "We follow international sterilization protocols for your safety and peace of mind.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    title: "Patient-Centric Care",
    description: "Your comfort is our priority. We offer personalized treatment plans.",
    icon: <Clock className="w-5 h-5" />
  }
];

export default function DentalTreatments() {
  return (
    <div className="bg-white min-h-screen">
      {/* Section 1: Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-[#0f172c] overflow-hidden">
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
              src="https://images.unsplash.com/photo-1606811841660-1b5168c34715?auto=format&fit=crop&q=80&w=2070"
              alt="Dental Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[10px] font-bold mb-6 uppercase tracking-widest">
                <Star className="w-3 h-3 fill-accent text-accent" />
                <span>Trusted by 10,000+ Happy Patients</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
                Advanced Dental Care <br />
                <span className="text-accent text-2xl md:text-3xl lg:text-4xl block mt-1">for a Confident Smile</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
                Experience precision-driven dental treatments designed to restore, enhance, and protect your smile with expert care.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10">
                {[
                  "Pain-Free and Comfortable Treatments",
                  "20+ Years of Expertise",
                  "Advanced Dental Technology"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold text-white/90">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              >
                Book Your Dental Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full max-w-[540px]"
              >
                <div className="relative z-10 rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl aspect-[1.1/1] max-h-[460px] w-full ml-auto group">
                  <img 
                    src="https://image2url.com/r2/default/images/1773997719520-96f3df3f-6191-438c-beda-54c436763f30.jpeg" 
                    alt="Professional Dental Care" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Decorative Blur Circles */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />

                {/* Floating Stat Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 z-20 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-premium flex items-center gap-3 border border-white/20"
                >
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white leading-none">20+</div>
                    <div className="text-[8px] text-white/60 font-bold uppercase tracking-wider">Years Experience</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Dental Care */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Redefining the Dental Experience
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At Apollo Clinics, we believe that dental care should be more than just a procedure. It's about building trust, ensuring comfort, and delivering results that last a lifetime. Our clinic combines world-class expertise with a warm, patient-first approach.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Diagnosis",
                text: "Using advanced 3D imaging and digital diagnostics to create accurate treatment plans."
              },
              {
                title: "Comfort-First Approach",
                text: "Specialized techniques to ensure your visit is as pain-free and relaxed as possible."
              },
              {
                title: "Long-Term Results",
                text: "Focusing on sustainable dental health rather than just quick fixes."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Dental Treatments */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Dental Treatments</h2>
            <p className="text-slate-600">Comprehensive solutions for every dental need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Our Dental Care */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Why Choose Our <span className="text-primary">Dental Care?</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are committed to providing the highest standard of dental care in a modern, comfortable environment. Our focus is on delivering exceptional results while ensuring our patients feel at ease throughout their journey.
              </p>
              <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <Star className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">4.9/5 Rating</div>
                  <div className="text-sm text-slate-500">Based on 2,000+ patient reviews</div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-12 lg:p-20 text-center"
          >
            {/* Background decorative shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Book your appointment today and take the first step towards a healthier, brighter smile with Apollo Dental Care.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment Now
                </Link>
                <a
                  href="tel:+919944686569"
                  className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  +91 99446 86569
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
