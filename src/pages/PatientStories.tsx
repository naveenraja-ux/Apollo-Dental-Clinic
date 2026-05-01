import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { Star, Quote, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PatientStories() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-24">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Patient Stories</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Read about the transformations and experiences of our patients who trusted us with their smiles and beauty.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="What Our Patients Say" subtitle="Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-soft-gray p-10 rounded-[3rem] relative group hover:bg-accent transition-all">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 relative z-10">
                  "The treatment was completely painless and the results exceeded my expectations. The staff is very professional and caring. I'm so happy with my new smile!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/p${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h5 className="font-bold text-text-dark">John Doe</h5>
                    <p className="text-slate-500 text-xs">Dental Treatment</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <SectionHeader title="Video Experiences" subtitle="Watch Stories" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { url: "https://image2url.com/r2/default/videos/1775633981913-55200b42-f741-4dde-8af6-5fd8e91402ea.mp4", title: "Patient Transformation Journey", label: "Cosmetology Treatment Experience", thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" },
              { url: "https://image2url.com/r2/default/videos/1775634392898-6d99cd53-48bb-47d5-966f-e0782dab1dfe.mp4", title: "Smile Reconstruction Story", label: "Dental Care Experience", thumb: "https://images.unsplash.com/photo-1606811841660-1b5168c34715?auto=format&fit=crop&q=80&w=2070" }
            ].map((video, i) => (
              <div 
                key={i} 
                className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
                onClick={() => setActiveVideo(video.url)}
              >
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                    <Play className="w-8 h-8 fill-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">{video.title}</h4>
                  <p className="text-white/80">{video.label}</p>
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence>
            {activeVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-900/95 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  <video 
                    src={activeVideo} 
                    className="w-full h-full" 
                    controls 
                    autoPlay 
                  />
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Before/After Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Visual Transformations" subtitle="Before & After" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-soft border border-slate-100">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={`https://picsum.photos/seed/before${i}/400/400`} alt="Before" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                    <div className="absolute top-4 left-4 bg-slate-900/60 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Before</div>
                  </div>
                  <div className="relative">
                    <img src={`https://picsum.photos/seed/after${i}/400/400`} alt="After" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                    <div className="absolute top-4 right-4 bg-primary/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">After</div>
                  </div>
                </div>
                <div className="p-6 text-center bg-white">
                  <h5 className="font-bold text-text-dark">Smile Reconstruction</h5>
                  <p className="text-slate-500 text-xs">Dental Implants & Veneers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
