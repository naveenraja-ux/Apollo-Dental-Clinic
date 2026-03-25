import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Zap, 
  Activity, 
  Stethoscope, 
  HeartPulse, 
  Microscope,
  Target,
  Layout,
  Briefcase,
  Layers,
  Globe,
  Info,
  Tag
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useEnrollModal } from '../hooks/useEnrollModal';

export default function Academy() {
  const { onOpen: onEnrollOpen } = useEnrollModal();

  return (
    <div className="">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=2070"
              alt="Academy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-primary-light rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-primary-light font-bold uppercase tracking-[0.3em] text-sm mb-1">Apollo Academy of</h2>
                <h3 className="text-white font-bold text-xl md:text-2xl">Aesthetic and Medical Cosmetology</h3>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Elevate Your Career in <span className="text-primary-light">Aesthetics</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10"
            >
              Join India's premier training institute for Permanent Makeup and Clinical Cosmetology. Learn from industry experts and gain hands-on experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={onEnrollOpen}
                className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 cursor-pointer"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#courses" 
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Explore Courses
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Courses Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Explore Our Professional Cosmetology Courses
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg"
            >
              Choose from industry-focused programs designed to build real skills and successful careers in aesthetic medicine
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1: PMU Course */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">PMU (Permanent Makeup) Course</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Professional training program covering permanent makeup techniques from beginner to advanced level with hands-on practical experience.
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-primary shrink-0"><Info className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">About the Course</div>
                    <div className="text-sm text-slate-700 font-medium">Professional PMU training focused on real-time practical skills, machine handling, and industry techniques.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-primary shrink-0"><Star className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Benefits</div>
                    <ul className="text-sm text-slate-700 font-medium list-disc list-inside space-y-1">
                      <li>Hands-on training on live models</li>
                      <li>Industry-recognized certification</li>
                      <li>Career support for freelancing or clinic placement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Course Fees</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-400 line-through">₹50,000</span>
                    <span className="text-2xl font-bold text-primary">₹25,000</span>
                  </div>
                  <div className="text-[10px] text-emerald-500 font-bold uppercase">50% Limited Time Offer</div>
                </div>
                <button 
                  onClick={onEnrollOpen}
                  className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-slate-900 transition-all shadow-lg shadow-primary/20"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>

            {/* Card 2: Fellowship Course */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Fellowship in Medical Cosmetology</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Advanced specialization program designed for medical professionals looking to upgrade their expertise and clinical skills.
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-primary shrink-0"><Info className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">About the Course</div>
                    <div className="text-sm text-slate-700 font-medium">Specialized training for medical professionals in advanced aesthetic medicine and laser technologies.</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 text-primary shrink-0"><Star className="w-5 h-5" /></div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Benefits</div>
                    <ul className="text-sm text-slate-700 font-medium list-disc list-inside space-y-1">
                      <li>Clinical exposure with medical-grade equipment</li>
                      <li>Advanced patient management skills</li>
                      <li>Prestigious Fellowship certification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Course Fees</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-400 line-through">₹50,000</span>
                    <span className="text-2xl font-bold text-primary">₹25,000</span>
                  </div>
                  <div className="text-[10px] text-emerald-500 font-bold uppercase">50% Limited Time Offer</div>
                </div>
                <button 
                  onClick={onEnrollOpen}
                  className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-slate-900 transition-all shadow-lg shadow-primary/20"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </div>

          {/* Key Highlights Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { text: "Beginner to Advanced Levels", icon: <Target className="w-5 h-5" /> },
              { text: "Hands-on Clinical Training", icon: <Activity className="w-5 h-5" /> },
              { text: "Industry-Recognized Certification", icon: <Award className="w-5 h-5" /> },
              { text: "Expert Faculty Guidance", icon: <Users className="w-5 h-5" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="text-primary">{item.icon}</div>
                <span className="text-xs md:text-sm font-bold text-slate-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Course Structure and Learning Experience */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              What You Will Learn
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600"
            >
              Structured modules designed to give you both theoretical knowledge and practical expertise
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Fundamentals of Skin and Aesthetics",
                desc: "Understanding skin types, concerns, and treatment basics",
                icon: <Stethoscope className="w-8 h-8" />
              },
              {
                title: "Advanced Treatment Techniques",
                desc: "Laser, PRP, chemical peels, and aesthetic procedures",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Hands-on Practice",
                desc: "Real-time training on live models under expert supervision",
                icon: <Activity className="w-8 h-8" />
              },
              {
                title: "Client Consultation and Safety",
                desc: "Patient handling, hygiene, and professional protocols",
                icon: <Shield className="w-8 h-8" />
              }
            ].map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {module.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{module.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{module.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Extra Highlight Strip */}
          <div className="bg-[#0f172c] py-6 rounded-3xl text-center">
            <p className="text-white font-bold tracking-widest text-xs md:text-sm uppercase">
              100% Practical Exposure | Real Clinical Experience | Skill-Based Training
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Course Details (Timings, Duration, Mode) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              Flexible Learning Designed for You
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600"
            >
              We offer flexible schedules and learning modes to suit students and working professionals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { title: "Course Duration", desc: "Short-term and advanced programs based on selected course", icon: <Clock className="w-6 h-6" /> },
              { title: "Training Mode", desc: "Offline and online hybrid learning available", icon: <Layout className="w-6 h-6" /> },
              { title: "Batch Timings", desc: "Flexible batches including weekday and weekend options", icon: <Calendar className="w-6 h-6" /> },
              { title: "Hands-on Sessions", desc: "Practical training included in all courses", icon: <Briefcase className="w-6 h-6" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-primary font-bold text-sm">Learn at your pace with expert support and flexible schedules</p>
          </div>
        </div>
      </section>

      {/* Section 6: Student Success & Certifications */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold mb-6 uppercase tracking-wider">
                  <Award className="w-3 h-3" /> Student Success
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Our Certified <br />
                  <span className="text-primary">Cosmetology Professionals</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Celebrating the success of our students who have mastered PMU and Fellowship courses. Through intensive hands-on training on live models, they have gained the clinical knowledge and practical expertise required to excel in the industry.
                </p>
                
                <div className="space-y-4">
                  {[
                    "100% Practical Hands-on Training",
                    "Expert Guidance from Senior Doctors",
                    "Industry-Recognized Certification",
                    "Real Clinical Experience on Live Models"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-bold text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-slate-50 bg-slate-100">
                <motion.div
                  animate={{
                    y: [0, -1580],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex flex-col gap-4 p-4"
                >
                  {[
                    "https://amused-black-m6oha1xosq.edgeone.app/square_image5.png",
                    "https://roasted-fuchsia-ieafykrysl.edgeone.app/square_image4.png",
                    "https://vivacious-indigo-qvgnqoqd9x.edgeone.app/square_image3.png",
                    "https://circular-peach-vcndywoync.edgeone.app/square_image2.png",
                    "https://entire-bronze-gwrudq3aov.edgeone.app/square_image.png",
                    "https://amused-black-m6oha1xosq.edgeone.app/square_image5.png",
                    "https://roasted-fuchsia-ieafykrysl.edgeone.app/square_image4.png",
                    "https://vivacious-indigo-qvgnqoqd9x.edgeone.app/square_image3.png",
                    "https://circular-peach-vcndywoync.edgeone.app/square_image2.png",
                    "https://entire-bronze-gwrudq3aov.edgeone.app/square_image.png",
                  ].map((img, i) => (
                    <div key={i} className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={img}
                        alt={`Student ${i + 1}`}
                        className="w-full h-full object-contain bg-white"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Academy Videos Section */}
          <div className="mt-20 md:mt-32 relative">
            <div className="absolute inset-0 bg-slate-50/50 rounded-[3rem] -z-10" />
            <div className="py-16 px-6 md:px-12">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Training & Success Highlights</h3>
                <p className="text-slate-600 max-w-2xl mx-auto">Watch our students in action and see the clinical excellence we strive for through our hands-on training sessions.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-4xl mx-auto items-start">
                {[
                  { id: "oNy3dIzyojg", title: "Clinical Training Session", label: "Hands-on Practice" },
                  { id: "Yoy6qJtt5jU", title: "Student Success Story", label: "Student Testimonial" }
                ].map((video, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    {/* Device Frame */}
                    <div className="relative w-full max-w-[280px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-[8px] border-slate-900 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] bg-black group transition-transform duration-500 hover:scale-[1.02]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl z-20" />
                      
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1`}
                        title={video.title}
                        className="w-full h-full relative z-10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
                        <Sparkles className="w-3 h-3" /> {video.label}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{video.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Fees and CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Start Your Career in Cosmetology Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg"
            >
              Enroll in our certified courses and gain the skills needed to build a successful career in the beauty and aesthetics industry.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-[#0f172c] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
              <div className="text-center md:text-left">
                <div className="text-primary-light font-bold uppercase tracking-widest text-xs mb-2">Course Fee</div>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="text-slate-400 line-through text-sm">₹50,000</span>
                  <span className="text-2xl font-bold">₹25,000</span>
                </div>
                <div className="text-emerald-400 text-[10px] font-bold uppercase mt-1">50% Discount Applied</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-primary-light font-bold uppercase tracking-widest text-xs mb-2">Special Offer</div>
                <div className="text-2xl font-bold">Limited Seats</div>
                <div className="text-slate-400 text-xs mt-1">Available for this month</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-primary-light font-bold uppercase tracking-widest text-xs mb-2">Certification</div>
                <div className="text-2xl font-bold">Industry Recognized</div>
                <div className="text-slate-400 text-xs mt-1">Upon successful completion</div>
              </div>
            </div>

            <div className="text-center relative z-10">
              <button 
                onClick={onEnrollOpen}
                className="px-12 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-xl hover:bg-white hover:text-primary transition-all transform hover:scale-105 active:scale-95"
              >
                Apply Now or Enroll Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
