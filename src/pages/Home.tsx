import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Calendar, 
  Star, 
  ShieldCheck, 
  Zap, 
  Award, 
  Phone, 
  Stethoscope, 
  Sparkles, 
  GraduationCap, 
  Play, 
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Users,
  Plus,
  Cpu,
  Heart,
  Activity,
  PenTool,
  Smile,
  Droplets,
  BookOpen,
  Microscope,
  Presentation,
  Lightbulb,
  FileText,
  ExternalLink,
  Scissors,
  Syringe,
  FlaskConical
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEnrollModal } from '../hooks/useEnrollModal';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import { BackgroundGradientAnimation } from '../components/BackgroundGradientAnimation';
import { FloatingDentalIcons } from '../components/FloatingDentalIcons';

const testimonials = [
  {
    id: 2,
    type: 'photo',
    name: "Lakshmi Narayanan",
    role: "Cosmetology Patient",
    content: "Apollo's skin treatments have transformed my confidence. The doctors are true experts in their field.",
    rating: 5,
    mediaUrl: "https://image2url.com/r2/default/images/1773852442486-14cb61db-9649-4699-b46b-cd896ab482e5.jpeg",
    image: "https://picsum.photos/seed/p2/100/100"
  },
  {
    id: 3,
    type: 'handwritten',
    name: "Boothra",
    role: "Dental Care",
    content: "I'm so happy with my new smile! The attention to detail and personalized care is truly unmatched.",
    rating: 5,
    handwrittenImg: "https://image2url.com/r2/default/images/1773852502006-8b7aad4e-0839-4d30-b6a6-aea8d5f87aa9.jpeg",
    image: "https://picsum.photos/seed/p3/100/100"
  },
  {
    id: 4,
    type: 'video',
    name: "Kavitha Ramakrishnan",
    role: "Dental Care",
    content: "The dental treatment was exceptional. The doctors were very patient and explained every step of the procedure. I'm extremely satisfied with the results.",
    rating: 5,
    thumbnail: "https://image2url.com/r2/default/images/1773852790845-25a5c656-84a2-417e-af5c-1e59fd550bea.png",
    videoUrl: "https://image2url.com/r2/default/videos/1775633981913-55200b42-f741-4dde-8af6-5fd8e91402ea.mp4",
    image: "https://picsum.photos/seed/p5/100/100"
  },
  {
    id: 5,
    type: 'video',
    name: "Sowmiya",
    role: "Smile Designing",
    content: "The transformation is unbelievable. I never thought my smile could look this natural and perfect. The team at Apollo is truly exceptional.",
    rating: 5,
    thumbnail: "https://image2url.com/r2/default/images/1773852082653-8239c4fc-df55-4617-9926-9f4210ee1746.png",
    videoUrl: "https://image2url.com/r2/default/videos/1775634392898-6d99cd53-48bb-47d5-966f-e0782dab1dfe.mp4",
    image: "https://picsum.photos/seed/p6/100/100"
  },
  {
    id: 6,
    type: 'photo',
    name: "Venkatesh Iyer",
    role: "Dental Patient",
    content: "Excellent experience with dental implants. The procedure was smooth and the recovery was very fast. Highly recommended for anyone looking for quality dental care.",
    rating: 5,
    mediaUrl: "https://image2url.com/r2/default/images/1773852545091-42c3068c-7541-455a-b766-9516c98b7561.jpeg",
    image: "https://picsum.photos/seed/p4/100/100"
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [activeMedia, setActiveMedia] = React.useState<{ type: 'video' | 'photo', url: string } | null>(null);
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const [playingVideoId, setPlayingVideoId] = React.useState<number | null>(null);

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Stable path data for the medical aesthetic overlay
  const pathData = React.useMemo(() => {
    const count = isMobile ? 2 : 5;
    return [...Array(count)].map((_, i) => ({
      id: i,
      d: `M -100 ${200 + i * 100} Q 400 ${150 + i * 50} 900 ${200 + i * 100} T 2000 ${200 + i * 100}`,
      duration: 15 + i * 3,
    }));
  }, [isMobile]);

  React.useEffect(() => {
    if (playingVideoId !== null) return; // Pause auto-scroll if a video is playing

    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slow auto-scroll (5 seconds)
    return () => clearInterval(timer);
  }, [playingVideoId]);

  const nextTestimonial = () => {
    setPlayingVideoId(null);
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setPlayingVideoId(null);
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { onOpen: onEnrollOpen } = useEnrollModal();

  return (
    <div className="overflow-hidden">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
            onClick={() => setActiveMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveMedia(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {activeMedia.type === 'video' ? (
                activeMedia.url.includes('youtube.com') || activeMedia.url.includes('youtu.be') ? (
                  <iframe
                    src={`${activeMedia.url}?autoplay=1`}
                    className="w-full h-full border-none"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={activeMedia.url} 
                    className="w-full h-full" 
                    controls 
                    autoPlay 
                  />
                )
              ) : (
                <img 
                  src={activeMedia.url} 
                  alt="Full view" 
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* SECTION 1 — HERO SECTION (Clean Aesthetic) */}
      <section ref={heroRef} className="relative h-[105vh] w-full flex items-center justify-center bg-white overflow-hidden">
        {/* Base Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-purple-100" />
        
        <BackgroundGradientAnimation 
          gradientBackgroundStart="transparent"
          gradientBackgroundEnd="transparent"
          firstColor="168, 85, 247"
          secondColor="192, 132, 252"
          thirdColor="233, 213, 255"
          fourthColor="250, 245, 255"
          fifthColor="216, 180, 254"
          pointerColor="168, 85, 247"
          className="opacity-20"
        />

        <FloatingDentalIcons />

        {/* Medical Aesthetic SVG Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-[0.08]" style={{ filter: "blur(0.6px)" }}>
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              {pathData.map((_, i) => (
                <linearGradient
                  key={`gradient-${i}`}
                  id={`gradient-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  {/* Soft fade in */}
                  <stop offset="0%" stopColor="#800080" stopOpacity="0" />

                  {/* Main purple highlight */}
                  <stop offset="25%" stopColor="#800080" stopOpacity="0.7" />

                  {/* Rich mid tone */}
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />

                  {/* Soft lavender tail */}
                  <stop offset="75%" stopColor="#d8b4fe" stopOpacity="0.5" />

                  {/* Fade out */}
                  <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>
            {pathData.map((path, i) => (
              <motion.path
                key={i}
                d={path.d}
                stroke={`url(#gradient-${i})`}
                fill="none"
                strokeWidth="1.5"
                animate={{
                  d: [
                    path.d,
                    path.d.replace(/(\d+)/g, (m, p1) => String(Number(p1) + (i % 2 === 0 ? 30 : -30))),
                    path.d
                  ]
                }}
                transition={{
                  duration: path.duration,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Subtle Grid Lines */}
            <pattern id="medical-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#800080" strokeWidth="0.5" opacity="0.1" />
              <circle cx="0" cy="0" r="1" fill="#0f172a" opacity="0.2" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#medical-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10 w-full flex flex-col items-center text-center pb-20">
          <motion.div 
            style={{ opacity }}
            className="relative flex flex-col items-center w-full"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 text-primary rounded-full text-[10px] font-bold mb-6 shadow-sm tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Apollo Clinical Excellence
            </motion.div>
            
            {/* Main Heading: 2 Lines (3 words then 2 words) */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1
                  }
                }
              }}
              className="font-display tracking-tight leading-[1.05] mb-8 max-w-4xl mx-auto"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="block shiny-text text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-2"
              >
                Advanced Dental Care
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="relative block text-2xl md:text-4xl lg:text-5xl font-bold italic"
              >
                <span className="shiny-text-primary drop-shadow-sm pr-4 pb-1">
                  & Aesthetic Excellence
                </span>
                {/* Soft Glow to highlight text */}
                <span className="absolute inset-0 bg-primary/5 blur-xl -z-10 opacity-30" />
              </motion.span>
            </motion.h1>

            {/* Subtext: Exactly 2 Lines */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-sm md:text-base mb-10 leading-[1.6] font-medium max-w-3xl mx-auto px-4"
            >
              Experience the perfect harmony of dental precision and aesthetic excellence. <br className="hidden md:block" />
              Where world-class expertise meets personalized care for your smile transformation.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              <Link
                to="/contact"
                className="relative group w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-full font-bold shadow-soft hover:shadow-premium transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 text-base overflow-hidden"
              >
                <Calendar className="w-4 h-4" />
                <span className="relative z-10">Book Appointment</span>
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById('expertise');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group w-full sm:w-auto text-slate-600 font-bold hover:text-primary transition-all flex items-center justify-center gap-2 text-sm border border-slate-200 px-8 py-3.5 rounded-full hover:border-primary/30"
              >
                View Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
            >
              <div className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform shadow-sm">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900">4.9 Rating</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Patient Trust</div>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900">10+ Years</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900">500+ Patients</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Happy Smiles</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT APOLLO */}
      <section className="py-20 md:py-32 bg-white relative flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="group aspect-[3/2] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative">
                <img
                  src="https://image2url.com/r2/default/images/1773671992276-f727b3c1-4a1d-48c4-a90c-efe17d9664aa.jpeg"
                  alt="Apollo Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary p-6 rounded-[1.5rem] shadow-premium text-white max-w-[200px] hidden md:block">
                <h4 className="text-2xl font-bold mb-1">15+</h4>
                <p className="text-white text-xs font-medium">Years of clinical excellence in aesthetic medicine.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <SectionHeader
                title={<span className="text-2xl md:text-3xl lg:text-4xl block leading-tight">Welcome to Apollo Dental &<br />Cosmetology Clinics</span>}
                subtitle="About Apollo"
                centered={false}
                className="!mb-4"
              />
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Apollo Dental & Cosmetology Clinics offers advanced dental care and aesthetic treatments under one roof. With modern technology and experienced professionals, we provide safe, effective, and personalized care.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                We also run Apollo Academy of Aesthetics & Clinical Cosmetology, offering hands-on training in advanced cosmetology and PMU techniques.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all self-start"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PMU COURSE PROMOTION */}
      <section className="py-8 md:py-10 bg-slate-50 text-slate-900 overflow-hidden relative min-h-[60vh] flex items-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200/20 skew-x-12 translate-x-1/4 -z-0" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-slate-200/30 -skew-x-12 -translate-x-1/4 -z-0" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider self-start">
                <Sparkles className="w-4 h-4" /> Professional Academy
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Permanent Makeup <span className="text-primary">(PMU in Cosmetology Course)</span>
              </h2>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl line-clamp-2">
                Elevate your expertise with our industry-leading PMU course. Master advanced techniques through intensive clinical training on live models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-1">
                {[
                  "Hands-on Clinical Training",
                  "International Certification",
                  "Live Model Practice",
                  "Career Placement Support"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-xs md:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-2xl relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award className="w-10 h-10" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-amber-600 font-bold uppercase text-[10px] tracking-widest">Hurry Up! Limited Seats Available</span>
                </div>
                <p className="text-slate-600 text-xs md:text-sm font-medium">
                  Exclusive <span className="text-slate-900 font-bold">Early Bird Offer</span> for the upcoming batch. Secure your spot today!
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <button 
                  onClick={onEnrollOpen}
                  className="px-8 py-3.5 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/10 text-center min-w-[160px] cursor-pointer text-sm"
                >
                  Enroll Now
                </button>
                <Link 
                  to="/academy" 
                  className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-center min-w-[200px] text-sm"
                >
                  View Course Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="group relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/2]">
                <img 
                  src="https://image2url.com/r2/default/images/1774371317777-69796e5a-ce33-4eb0-a1e7-601d5727ff22.png" 
                  alt="PMU Training Session" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Success Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-[1.5rem] shadow-2xl z-20 max-w-[200px] hidden md:block border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-base leading-none">100%</div>
                    <div className="text-slate-500 text-[9px] font-bold uppercase tracking-wider">Placement</div>
                  </div>
                </div>
                <p className="text-slate-600 text-[10px] leading-relaxed">Join our alumni working in top aesthetic clinics globally.</p>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-[60px] -z-0" />
              <div className="absolute top-1/2 -left-8 w-24 h-24 bg-primary/5 rounded-full blur-[50px] -z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR SPECIALIZED DIVISIONS */}
      <section id="expertise" className="py-10 md:py-12 bg-soft-gray flex items-center">
        <div className="container-custom">
          <SectionHeader
            title="Our Specialized Divisions"
            subtitle="Expertise"
            className="!mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Apollo Industry"
              description="Advanced dental treatments including implants, orthodontics, cosmetic dentistry, and complete oral healthcare solutions."
              href="/treatments/dental"
              image="https://image2url.com/r2/default/images/1773940594922-2aa5c42d-d8c0-4fc4-a772-f26ad9948c10.png"
            />
            <ServiceCard
              title="Apollo Cosmetology Clinic"
              description="Professional skin, hair, and aesthetic treatments designed to improve beauty, confidence, and skin health."
              href="/treatments/cosmetology"
              image="https://image2url.com/r2/default/images/1773940470587-184c4292-b815-429a-a5a0-8e656efa6478.png"
            />
            <ServiceCard
              title="Apollo Academy"
              description="Professional training academy offering cosmetology certifications and advanced PMU training programs."
              href="/academy"
              image="https://image2url.com/r2/default/images/1773941118207-cae7e924-20da-42c2-a2a3-19e631eb4ae8.png"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — TREATMENTS & SERVICES */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-custom mb-12">
          <SectionHeader
            title="Comprehensive Treatments & Services"
            subtitle="Our Services"
            centered
            className="!mb-0"
          />
        </div>

        {/* Dental Slider (Left -> Right) */}
        <div className="mb-10 relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap animate-scroll-right pause-on-hover" style={{ width: "fit-content" }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-6">
                  {[
                    { name: 'Dental Implants', img: 'https://image2url.com/r2/default/images/1773939607055-34fc5c9e-e1a1-42fc-9dc8-1039b997b8af.png' },
                    { name: 'Root Canal', img: 'https://image2url.com/r2/default/images/1773939301588-c88ed551-34ad-43ce-8121-c3e592c8fc13.png' },
                    { name: 'Orthodontic Braces', img: 'https://image2url.com/r2/default/images/1773939428745-f0aeb8ff-b7d2-4511-9c8c-1f9b63cd87bf.png' },
                    { name: 'Teeth Whitening', img: 'https://image2url.com/r2/default/images/1773939483839-2b045ad8-ecf8-47f0-8ef3-920514cef66a.png' },
                    { name: 'Smile Designing', img: 'https://image2url.com/r2/default/images/1773939536211-373ebc20-1c7a-43f5-a2e8-e04e5e6af74d.png' },
                    { name: 'Dental Aligners', img: 'https://image2url.com/r2/default/images/1773937962318-9704842f-e949-45c7-980c-e9fc1514fa2c.png' }
                  ].map((item, idx) => (
                    <motion.div
                      key={`${i}-${idx}`}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="relative w-72 h-80 rounded-[2rem] overflow-hidden group shadow-lg shrink-0"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />
                      <div className="absolute bottom-6 left-6 right-6 z-30">
                        <h4 className="text-white text-lg font-bold leading-tight drop-shadow-md">{item.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cosmetology Slider (Right -> Left) */}
        <div className="mb-12 relative">
          <div className="flex overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap animate-scroll-left pause-on-hover" style={{ width: "fit-content" }}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-6">
                  {[
                    { name: 'Skin Rejuvenation', img: 'https://image2url.com/r2/default/images/1773983307368-a713af45-8ca4-4400-8f99-cd25b86ec0f1.png' },
                    { name: 'Acne Treatment', img: 'https://image2url.com/r2/default/images/1773982984832-c3bbebdd-cbf6-4b83-93ce-122d0f3a5566.png' },
                    { name: 'Anti Aging', img: 'https://image2url.com/r2/default/images/1773983092526-55b4462a-0467-401e-ba0a-3e82e84169e8.png' },
                    { name: 'Hair Restoration', img: 'https://image2url.com/r2/default/images/1773983164088-220ee27f-f7b6-447e-ab74-00f19dd237c1.png' },
                    { name: 'Laser Treatments', img: 'https://image2url.com/r2/default/images/1773983211340-ffd41812-1831-4517-8983-b0bce7fe6bd5.png' },
                    { name: 'PMU', img: 'https://image2url.com/r2/default/images/1773983266345-ee5e3782-1acc-4158-9b3d-3db59d9bbb48.png' }
                  ].map((item, idx) => (
                    <motion.div
                      key={`${i}-${idx}`}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="relative w-72 h-80 rounded-[2rem] overflow-hidden group shadow-lg shrink-0"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />
                      <div className="absolute bottom-6 left-6 right-6 z-30">
                        <h4 className="text-white text-lg font-bold leading-tight drop-shadow-md">{item.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 6 — OUR EXPERT DOCTORS */}
      <section className="py-10 bg-soft-gray overflow-hidden">
        <div className="container-custom">
          <SectionHeader
            title="Meet Our Expert Team"
            subtitle="Our Doctors"
            centered
            className="!mb-6"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Manimekalai', role: 'Chief Managing Director', img: 'https://image2url.com/r2/default/images/1773843845340-9b7bccd1-9095-4170-9bf6-b1ee828560b1.png' },
              { name: 'Dr. Kamali', role: 'Senior Resident', img: 'https://image2url.com/r2/default/images/1773843999365-22e8ce59-3c22-477f-ae68-a07c45f42d18.png' },
              { name: 'Dr. Udhay', role: 'Prosthodontist', img: 'https://image2url.com/r2/default/images/1773844448997-6577ebb7-8e3c-4556-ab5a-d4ec7b2c560a.png' },
              { name: 'Dr. Aishwarya', role: 'Oral surgeon & Hair transplant specialist', img: 'https://image2url.com/r2/default/images/1773844582445-18405f87-5216-4f37-9f55-419fe08a010f.png' },
            ].map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all border border-slate-100/50"
              >
                <div className="aspect-[1/1] overflow-hidden relative">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-sm font-bold text-text-dark mb-0.5 truncate">{doc.name}</h4>
                  <p className="text-primary text-[9px] font-bold uppercase tracking-wider mb-0.5">{doc.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 — PATIENT TESTIMONIALS (Elegant Split Layout) */}
      <section className="py-20 bg-[#f8fafc] overflow-hidden">
        <div className="container-custom">
          <SectionHeader
            title="Real Patient Experiences"
            subtitle="Testimonials"
            centered
            className="!mb-16"
          />
          
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons - Elegant Floating Style */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12 z-20">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-premium flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-slate-100"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12 z-20">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-premium flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95 border border-slate-100"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative min-h-[500px] h-auto md:h-[450px] overflow-hidden rounded-[3rem] shadow-premium bg-white border border-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-full"
                >
                  {/* Left Side: Media Content */}
                  <div className="relative h-full overflow-hidden bg-slate-50 border-r border-slate-50">
                    {testimonials[testimonialIndex].type === 'video' && (
                      <div className="relative w-full h-full">
                        {playingVideoId === testimonials[testimonialIndex].id ? (
                          <div className="relative w-full h-full bg-black">
                            {testimonials[testimonialIndex].videoUrl.includes('youtube.com') || testimonials[testimonialIndex].videoUrl.includes('youtu.be') ? (
                              <iframe
                                src={`${testimonials[testimonialIndex].videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                                className="w-full h-full border-none"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                              />
                            ) : (
                              <video 
                                src={testimonials[testimonialIndex].videoUrl} 
                                className="w-full h-full" 
                                controls 
                                autoPlay 
                              />
                            )}
                            <button 
                              onClick={() => setPlayingVideoId(null)}
                              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
                              title="Close Video"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div 
                            className="relative w-full h-full cursor-pointer group/video"
                            onClick={() => setPlayingVideoId(testimonials[testimonialIndex].id)}
                          >
                            <img 
                              src={testimonials[testimonialIndex].thumbnail} 
                              alt="Video Thumbnail" 
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover/video:scale-105" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors flex items-center justify-center">
                              <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileActive={{ scale: 0.9 }}
                                className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl"
                              >
                                <Play className="w-8 h-8 fill-primary ml-1" />
                              </motion.div>
                            </div>
                            <div className="absolute top-8 left-8">
                              <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                Video Story
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {testimonials[testimonialIndex].type === 'photo' && (
                      <div 
                        className="relative w-full h-full cursor-pointer group/photo"
                        onClick={() => setActiveMedia({ type: 'photo', url: testimonials[testimonialIndex].mediaUrl || '' })}
                      >
                        <img 
                          src={testimonials[testimonialIndex].mediaUrl} 
                          alt="Patient Result" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover/photo:scale-105" 
                        />
                        <div className="absolute top-8 left-8">
                          <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                            Photo Result
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 md:group-hover/photo:bg-black/10 transition-colors flex items-center justify-center">
                          <Maximize2 className="w-10 h-10 text-white opacity-100 md:opacity-0 md:group-hover/photo:opacity-100 transition-all scale-100 md:scale-50 md:group-hover/photo:scale-100" />
                        </div>
                      </div>
                    )}
                    {testimonials[testimonialIndex].type === 'handwritten' && (
                      <div 
                        className="relative w-full h-full cursor-pointer group/hand"
                        onClick={() => setActiveMedia({ type: 'photo', url: testimonials[testimonialIndex].handwrittenImg || '' })}
                      >
                        <img 
                          src={testimonials[testimonialIndex].handwrittenImg} 
                          alt="Handwritten Review" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover/hand:scale-105" 
                        />
                        <div className="absolute top-8 left-8">
                          <span className="bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                            Handwritten
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/0 md:group-hover/hand:bg-black/10 transition-colors flex items-center justify-center">
                          <Maximize2 className="w-10 h-10 text-white opacity-100 md:opacity-0 md:group-hover/hand:opacity-100 transition-all scale-100 md:scale-50 md:group-hover/hand:scale-100" />
                        </div>
                      </div>
                    )}
                    {testimonials[testimonialIndex].type === 'text' && (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                        <Quote className="w-32 h-32 text-primary/10 -rotate-12" />
                        <div className="absolute top-8 left-8">
                          <span className="bg-slate-600/90 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                            Patient Review
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side: Content */}
                  <div className="p-10 md:p-16 flex flex-col justify-center bg-white relative">
                    {/* Decorative Quote Mark */}
                    <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
                      <Quote className="w-40 h-40 text-primary" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex gap-1 text-amber-400 mb-8">
                        {[...Array(testimonials[testimonialIndex].rating)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="mb-10">
                        <p className="text-slate-700 text-xl md:text-2xl font-serif italic leading-relaxed">
                          "{testimonials[testimonialIndex].content}"
                        </p>
                      </blockquote>

                      <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/10 shadow-soft shrink-0">
                          <img 
                            src={testimonials[testimonialIndex].image} 
                            alt={testimonials[testimonialIndex].name} 
                            className="w-full h-full object-cover" 
                            referrerPolicy="no-referrer" 
                          />
                        </div>
                        <div>
                          <h5 className="text-xl font-bold text-text-dark leading-none mb-2">
                            {testimonials[testimonialIndex].name}
                          </h5>
                          <p className="text-primary font-medium text-sm tracking-wide uppercase">
                            {testimonials[testimonialIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Elegant Pagination Dots */}
            <div className="mt-12 flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setPlayingVideoId(null);
                    setTestimonialIndex(i);
                  }}
                  className={`group relative h-1.5 transition-all duration-500 rounded-full ${
                    i === testimonialIndex ? 'w-12 bg-primary' : 'w-3 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <span className="absolute -inset-2 cursor-pointer" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — RESEARCH & ACADEMIC CONTRIBUTIONS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <SectionHeader
                title="Research & Academic Contributions"
                subtitle="Excellence"
                centered={false}
                className="!mb-0"
              />
              <p className="text-slate-600 text-lg mt-6">
                Advancing healthcare through rigorous clinical research, innovative patents, and global academic contributions.
              </p>
            </div>
            <Link 
              to="/publications" 
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
            >
              View All Publications <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { label: 'Thesis Articles', value: '3+', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Book Publication', value: '1', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'Research Contributions', value: '3+', icon: Microscope, color: 'text-purple-600', bg: 'bg-purple-50' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Categories List */}
            <div className="lg:col-span-4 space-y-4">
              {[
                { title: 'Thesis / Research Studies', icon: GraduationCap },
                { title: 'Publications (Journal Articles)', icon: FileText },
                { title: 'Scientific Paper Presentations', icon: Presentation },
                { title: 'Patent / Innovation', icon: Lightbulb },
              ].map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-soft transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-primary transition-colors">{cat.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Featured Publication */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                  <div className="absolute top-[-20%] right-[-20%] w-full h-full bg-primary rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-light text-[10px] font-bold tracking-widest uppercase rounded-full mb-8 border border-primary/20">
                    Featured Publication
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    Comparative Clinical Evaluation of Platelet-Rich Fibrin with and without Bioactive Glass Graft (PerioGlas)
                  </h3>
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl">
                    A randomized clinical study evaluating regenerative results in Grade II furcation defects. Published in the Journal of Pharmacy and Bioallied Sciences.
                  </p>
                  <a 
                    href="https://straight-chocolate-13f0wy0vbs.edgeone.app/jpbs_1729_25_R2_OA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-primary-light font-bold text-lg hover:text-white transition-colors group/link"
                  >
                    Read Full Article <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — BOOK CONSULTATION */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent p-8 md:p-10 rounded-[3rem] border border-white shadow-premium text-center max-w-4xl mx-auto"
          >
            <SectionHeader
              title="Start Your Transformation Today"
              subtitle="Book Consultation"
              centered
              className="!mb-6"
            />
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Book a consultation at Apollo Dental & Cosmetology Clinics and experience advanced dental and aesthetic care. Our experts are ready to guide you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-primary text-white px-12 py-4 rounded-full font-bold shadow-premium hover:bg-primary-dark transition-all transform hover:scale-105"
              >
                Book Appointment
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-soft">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call Us Directly</p>
                  <a href="tel:+919944686569" className="text-xl font-bold text-text-dark hover:text-primary transition-colors">
                    +91 99446 86569
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
