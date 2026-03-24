import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { BookOpen, FileText, Presentation, Lightbulb, ExternalLink, Award, GraduationCap, Microscope } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const stats = [
  { label: 'Thesis Articles', value: '3+', icon: GraduationCap, color: 'bg-blue-50 text-blue-600' },
  { label: 'Book Publication', value: '1', icon: BookOpen, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Research Contributions', value: '3+', icon: Microscope, color: 'bg-purple-50 text-purple-600' },
];

const researchCategories = [
  {
    id: 'thesis',
    title: 'Thesis / Research Studies',
    icon: GraduationCap,
    items: [
      {
        title: 'Comparative Clinical Evaluation of Platelet-Rich Fibrin with and without Bioactive Glass Graft (PerioGlas) In Managing Mandibular Grade II Furcation Defects',
        subtitle: 'A Randomized Clinical Study',
        description: 'A comprehensive clinical study evaluating the regenerative potential of PRF combined with bioactive glass in treating complex periodontal defects.',
        year: '2024'
      }
    ]
  },
  {
    id: 'publications',
    title: 'Publications (Journal Articles)',
    icon: FileText,
    items: [
      {
        title: 'Comparative Clinical Evaluation of Platelet-Rich Fibrin with and without Bioactive Glass Graft (PerioGlas) In Managing Mandibular Grade II Furcation Defects',
        journal: 'Journal of Pharmacy and Bioallied Sciences',
        link: 'https://journals.lww.com/jpbs/fulltext/2026/02001/comparative_clinical_evaluation_of_platelet_rich.64.aspx',
        year: '2026',
        isFeatured: true
      }
    ]
  },
  {
    id: 'presentations',
    title: 'Scientific Paper Presentations',
    icon: Presentation,
    items: [
      {
        title: 'Effectiveness of pre-procedural rinsing with 0.2% Chlorhexidine and 1% Povidone-iodine in reducing bacterial aerosol contamination during ultrasonic scaling',
        event: '33rd Tamil Nadu State Dental Conference',
        location: 'Kanyakumari',
        year: '2019'
      },
      {
        title: 'Gingival aesthetic zone reconstruction using subepithelial connective tissue graft',
        event: '11th ISP PG National Convention',
        location: 'Lucknow',
        year: '2020'
      },
      {
        title: 'Comparative clinical evaluation of PRF with and without bioactive glass graft in managing mandibular grade II furcation defects',
        event: '44th ISP National Conference',
        location: 'Bangalore',
        year: '2021'
      },
      {
        title: 'Tissue engineering in periodontics - A review',
        event: '44th ISP National Conference',
        location: 'Bangalore',
        year: '2021'
      }
    ]
  },
  {
    id: 'patent',
    title: 'Patent / Innovation',
    icon: Lightbulb,
    items: [
      {
        title: 'Intra Oral Dental Sensing Equipment',
        category: 'Design Registration / Patent',
        description: 'Innovative dental sensing equipment designed for advanced intra-oral diagnostics and precision monitoring.',
        status: 'Registered',
        views: [
          { label: 'Front View', url: 'https://picsum.photos/seed/dental-front/800/600' },
          { label: 'Side View', url: 'https://picsum.photos/seed/dental-side/800/600' },
          { label: 'Top View', url: 'https://picsum.photos/seed/dental-top/800/600' }
        ]
      }
    ]
  }
];

export default function Publications() {
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero Section - Optimized for professional look and reduced header gap */}
      <section className="bg-slate-50 pt-24 pb-32 border-b border-slate-100 overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -mt-8">
            {/* Left Side: Content shifted upwards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-20"
            >
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">
                Academic Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Research & <span className="text-primary">Publications</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
                Advancing the field of dentistry and cosmetology through rigorous clinical research, 
                innovative patents, and global academic contributions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#thesis" className="px-8 py-4 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">Explore Research</a>
                <a href="#publications" className="px-8 py-4 border border-slate-200 text-slate-900 text-sm font-bold rounded-2xl hover:bg-slate-50 transition-all">View Journals</a>
              </div>
            </motion.div>

            {/* Right Side: Interactive Collage of Card Boxes */}
            <div className="relative h-[450px] hidden lg:block -mt-12">
              {/* Box 1: Book Publications */}
              <motion.div
                onMouseEnter={() => setHoveredCard('book')}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                className="absolute top-0 right-10 w-72 p-6 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 cursor-default transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-1">1</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Book Publication</div>
                
                <AnimatePresence>
                  {hoveredCard === 'book' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs text-slate-600 italic">"Comprehensive Guide to Modern Periodontology"</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Box 2: Research Contribution */}
              <motion.div
                onMouseEnter={() => setHoveredCard('research')}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: 8 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                className="absolute bottom-4 left-0 w-72 p-6 bg-primary text-white rounded-[2.5rem] shadow-2xl cursor-default transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mb-1">3+</div>
                <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">Research Contributions</div>
                
                <AnimatePresence>
                  {hoveredCard === 'research' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/10 space-y-2">
                        <p className="text-[10px] font-medium">• PRF in Furcation Defects</p>
                        <p className="text-[10px] font-medium">• Bioactive Glass Evaluation</p>
                        <p className="text-[10px] font-medium">• Tissue Engineering Review</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Box 3: Thesis Articles */}
              <motion.div
                onMouseEnter={() => setHoveredCard('thesis')}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 p-6 bg-slate-900 text-white rounded-[2.5rem] shadow-2xl cursor-default transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mb-1">3+</div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-2">Thesis Articles</div>
                
                <AnimatePresence>
                  {hoveredCard === 'thesis' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/5 space-y-2">
                        <p className="text-[10px] font-medium">• Mandibular Grade II Defects</p>
                        <p className="text-[10px] font-medium">• Clinical Evaluation of PRF</p>
                        <p className="text-[10px] font-medium">• Regenerative Periodontics</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-24">
            {researchCategories.map((category, catIndex) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {category.items.map((item: any, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`p-8 md:p-10 rounded-[3rem] border transition-all duration-500 ${
                        item.isFeatured 
                          ? 'bg-slate-900 border-slate-800 text-white shadow-2xl' 
                          : 'bg-white border-slate-100 hover:border-primary/20 hover:shadow-2xl'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex-1">
                          {item.year && (
                            <span className={`text-xs font-bold tracking-widest uppercase mb-4 block ${
                              item.isFeatured ? 'text-primary-light' : 'text-primary'
                            }`}>
                              {item.year}
                            </span>
                          )}
                          <h3 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${
                            item.isFeatured ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-lg font-medium text-primary mb-4 italic leading-relaxed">{item.subtitle}</p>
                          )}
                          {item.journal && (
                            <div className="flex items-center gap-3 mb-4">
                              <BookOpen className="w-5 h-5 text-slate-400" />
                              <span className={`text-base ${item.isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                                {item.journal}
                              </span>
                            </div>
                          )}
                          {item.event && (
                            <div className="flex flex-wrap gap-6 mb-4">
                              <div className="flex items-center gap-2 text-sm text-slate-500">
                                <Award className="w-5 h-5" />
                                {item.event}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-400">
                                <span>•</span>
                                {item.location}
                              </div>
                            </div>
                          )}
                          {item.description && (
                            <p className={`text-lg leading-relaxed mb-6 ${
                              item.isFeatured ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                              {item.description}
                            </p>
                          )}

                          {item.link && (
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 text-base font-bold transition-all hover:gap-4 ${
                                item.isFeatured ? 'text-primary-light hover:text-white' : 'text-primary hover:text-primary-dark'
                              }`}
                            >
                              View Full Publication <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-dark rounded-full blur-[120px]" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Interested in our research?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            We are always open to academic collaborations and research inquiries. 
            Feel free to reach out for detailed discussions.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
          >
            Contact for Collaboration
          </a>
        </div>
      </section>
    </div>
  );
}
