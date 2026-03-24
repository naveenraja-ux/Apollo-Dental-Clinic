import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, PlayCircle, Maximize2, X, ChevronRight, ChevronLeft, Camera, Video, PenTool, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const categories = [
  { id: 'dentistry', label: 'Dentistry' },
  { id: 'cosmetology', label: 'Clinical Cosmetology' },
  { id: 'academy', label: 'Academy' }
];

const testimonialData = {
  dentistry: {
    items: [
      { id: 'v1', type: 'video', title: 'Smile Transformation', thumbnail: 'https://image2url.com/r2/default/images/1773852082653-8239c4fc-df55-4617-9926-9f4210ee1746.png', url: 'https://www.youtube.com/embed/VtWQFOrHZGs', patient: 'Sowmiya' },
      { id: 'r1', type: 'review', name: 'Venkatesh Iyer', text: 'Excellent experience with dental implants. The procedure was smooth and the recovery was very fast.', rating: 5 },
      { id: 'v3', type: 'video', title: 'Patient Feedback', thumbnail: 'https://img.youtube.com/vi/NpIstwm4Nms/maxresdefault.jpg', url: 'https://www.youtube.com/embed/NpIstwm4Nms', patient: 'Verified Patient' },
      { id: 'p1', type: 'photo', url: 'https://image2url.com/r2/default/images/1773852545091-42c3068c-7541-455a-b766-9516c98b7561.jpeg', label: 'Implant Result' },
      { id: 'v2', type: 'video', title: 'Dental Implant Experience', thumbnail: 'https://image2url.com/r2/default/images/1773852790845-25a5c656-84a2-417e-af5c-1e59fd550bea.png', url: 'https://www.youtube.com/embed/q0GZPiQe0O4', patient: 'Kavitha Ramakrishnan' },
      { id: 'r2', type: 'review', name: 'Anand Kumar', text: 'The best dental clinic in the city. Very professional and clean.', rating: 5 },
      { id: 'v4', type: 'video', title: 'Treatment Journey', thumbnail: 'https://img.youtube.com/vi/D6RI-h7PbBk/maxresdefault.jpg', url: 'https://www.youtube.com/embed/D6RI-h7PbBk', patient: 'Verified Patient' },
      { id: 'p2', type: 'photo', url: 'https://image2url.com/r2/default/images/1774360178545-f6106f49-5d95-4dad-a454-00e7b34915e4.jpeg', label: 'Dental Care Result' },
      { id: 'p3', type: 'photo', url: 'https://image2url.com/r2/default/images/1773852442486-14cb61db-9649-4699-b46b-cd896ab482e5.jpeg', label: 'Dental Procedure Result' },
      { id: 'v5', type: 'video', title: 'Clinic Experience', thumbnail: 'https://img.youtube.com/vi/sX-NfuTQ_LU/maxresdefault.jpg', url: 'https://www.youtube.com/embed/sX-NfuTQ_LU', patient: 'Verified Patient' },
      { id: 'h1', type: 'handwritten', url: 'https://image2url.com/r2/default/images/1773852502006-8b7aad4e-0839-4d30-b6a6-aea8d5f87aa9.jpeg', patient: 'Boothra' },
      { id: 'v6', type: 'video', title: 'Smile Success', thumbnail: 'https://img.youtube.com/vi/Ra0jx9rX7cA/maxresdefault.jpg', url: 'https://www.youtube.com/embed/Ra0jx9rX7cA', patient: 'Verified Patient' }
    ]
  },
  cosmetology: {
    items: [
      { id: 'r1', type: 'review', name: 'Lakshmi Narayanan', text: "Apollo's skin treatments have transformed my confidence. The doctors are true experts.", rating: 5 },
      { id: 'r2', type: 'review', name: 'Priya Dharshini', text: "The chemical peel treatment was amazing. My skin feels so rejuvenated and glowing.", rating: 5 },
      { id: 'r3', type: 'review', name: 'Rajeshwari', text: "Highly recommend for hair loss treatments. Seeing great results within just a few sessions.", rating: 5 },
      { id: 'r4', type: 'review', name: 'Meera', text: "Professional staff and excellent results for facial rejuvenation. Very happy with the service.", rating: 5 }
    ]
  },
  academy: {
    items: [
      { id: 'av1', type: 'video', title: 'Academy Training Session', thumbnail: 'https://img.youtube.com/vi/oNy3dIzyojg/maxresdefault.jpg', url: 'https://www.youtube.com/embed/oNy3dIzyojg', patient: 'Student' },
      { id: 'av2', type: 'video', title: 'Hands-on Workshop', thumbnail: 'https://img.youtube.com/vi/Yoy6qJtt5jU/maxresdefault.jpg', url: 'https://www.youtube.com/embed/Yoy6qJtt5jU', patient: 'Student' },
      { id: 'r1', type: 'review', name: 'Dr. Priya', text: 'The hands-on training at Apollo Academy is exceptional. Highly recommended for aspiring cosmetologists.', rating: 5 },
      { id: 'r2', type: 'review', name: 'Dr. Arun', text: 'Comprehensive curriculum and expert guidance. The best place to learn advanced aesthetic procedures.', rating: 5 }
    ]
  }
};

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('dentistry');
  const [activeMedia, setActiveMedia] = useState<{ type: 'video' | 'photo', url: string } | null>(null);

  const currentData = testimonialData[activeCategory as keyof typeof testimonialData];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-white text-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-primary/20">
              Testimonials
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Real Stories, Real Results, <span className="text-primary">Real Research.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              Join us in celebrating the transformative journeys of our patients and students through 
              authentic testimonials, clinical success stories, and academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-primary text-white shadow-premium scale-105' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {currentData.items.map((item: any) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {item.type === 'video' && (
                  <div
                    className="relative aspect-video rounded-[2rem] overflow-hidden group shadow-premium cursor-pointer border border-slate-100 bg-slate-900"
                    onClick={() => setActiveMedia({ type: 'video', url: item.url })}
                  >
                    <img 
                      src={item.thumbnail} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
                        <PlayCircle className="w-7 h-7 fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-[9px] font-bold text-white/70 uppercase tracking-widest">Patient: {item.patient}</p>
                    </div>
                  </div>
                )}

                {item.type === 'photo' && (
                  <div
                    className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-premium cursor-pointer border border-slate-100"
                    onClick={() => setActiveMedia({ type: 'photo', url: item.url })}
                  >
                    <img 
                      src={item.url} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 duration-500">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 text-slate-900 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500 shadow-xl">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary">{item.label}</span>
                    </div>
                  </div>
                )}

                {item.type === 'handwritten' && (
                  <div
                    className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-premium cursor-pointer border border-slate-100 bg-slate-50"
                    onClick={() => setActiveMedia({ type: 'photo', url: item.url })}
                  >
                    <img 
                      src={item.url} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-500 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 duration-500">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-primary text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg border border-primary/10">
                        Note: {item.patient}
                      </span>
                    </div>
                  </div>
                )}

                {item.type === 'review' && (
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-premium transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl group-hover:bg-primary/10 transition-colors" />
                    
                    <div>
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-primary/5 group-hover:text-primary/10 transition-colors" />
                      </div>
                      <p className="text-slate-600 text-sm italic leading-relaxed mb-6 relative z-10">"{item.text}"</p>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-6 border-t border-slate-50 relative z-10">
                      <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-base shadow-lg shadow-primary/20">
                        {item.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-[11px]">{item.name}</h4>
                        <p className="text-[8px] text-primary font-bold uppercase tracking-[0.2em]">
                          {activeCategory === 'academy' ? 'Verified Student' : 'Verified Patient'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-900/95 backdrop-blur-xl"
            onClick={() => setActiveMedia(null)}
          >
            <button 
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
              onClick={() => setActiveMedia(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {activeMedia.type === 'video' ? (
                <iframe
                  src={`${activeMedia.url}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img 
                  src={activeMedia.url} 
                  className="w-full h-full object-contain bg-black/20" 
                  referrerPolicy="no-referrer" 
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to start your journey?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            Experience the same level of care and excellence that our patients rave about. 
            Book your consultation today.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
