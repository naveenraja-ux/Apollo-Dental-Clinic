import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { BookOpen, FileText, Presentation, Lightbulb, ExternalLink, Award, GraduationCap, Microscope, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const stats = [
  { label: 'Thesis Articles', value: '3+', icon: GraduationCap, color: 'bg-blue-50 text-blue-600' },
  { label: 'Book Publication', value: '1', icon: BookOpen, color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Research Contributions', value: '3+', icon: Microscope, color: 'bg-purple-50 text-purple-600' },
];

const researchCategories = [
  {
    id: 'thesis',
    title: 'Thesis / Research Work',
    icon: GraduationCap,
    items: [
      {
        title: 'Periodontal Regeneration Research Study',
        focus: 'Advanced periodontal treatment techniques',
        includes: [
          'Platelet-Rich Fibrin (PRF)',
          'Bone graft materials (PerioGlas)',
          'Clinical evaluation methods'
        ],
        outcome: [
          'Improved tissue healing and bone regeneration',
          'Evidence-based clinical insights'
        ],
        link: 'https://straight-chocolate-13f0wy0vbs.edgeone.app/jpbs_1729_25_R2_OA.pdf',
        year: '2024'
      }
    ]
  },
  {
    id: 'publications',
    title: 'Journal Publications',
    icon: FileText,
    items: [
      {
        title: 'Comparative Clinical Evaluation of Platelet-Rich Fibrin with and without Bioactive Glass (PerioGlas)',
        journal: 'Journal of Pharmacy and Bioallied Sciences',
        year: '2026',
        type: 'Clinical Research Study',
        highlights: [
          'Evaluates treatment of mandibular Grade II furcation defects',
          'Compares PRF alone vs PRF + PerioGlas',
          'Combination therapy showed better bone regeneration'
        ],
        link: 'https://straight-chocolate-13f0wy0vbs.edgeone.app/jpbs_1729_25_R2_OA.pdf',
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
        type: 'Design Patent',
        filedUnder: 'The Designs Act, 2001',
        filingDate: 'December 20, 2025',
        description: 'Innovative intraoral dental sensing device designed for enhanced diagnostic efficiency with a unique structure and multiple design views.',
        includes: [
          'Front, Rear, Top, Bottom Views',
          'Left & Right Views',
          'Perspective Design'
        ],
        link: 'https://brief-coffee-wfyniiseaf.edgeone.app/combined%20Intra%20Oral%20Dental%20Sensing%20Equipment%20(2).pdf',
        status: 'Registered'
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
                        <p className="text-xs text-slate-600 italic">"Tissue Engineering"</p>
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
          {/* Our Publication Section */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Our Publication</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="lg:w-1/3">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all" />
                    <div className="relative aspect-[3/4] bg-slate-800 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                      <img 
                        src="https://image2url.com/r2/default/images/1775550899031-3f4911a8-8bac-462e-9e1c-e5f200067298.png" 
                        alt="Tissue Engineering Book Cover" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary-light text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 border border-primary/20">
                    Featured Book
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Tissue Engineering</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-8">
                    A comprehensive academic exploration into the revolutionary field of tissue engineering, 
                    focusing on regenerative medicine, biomaterials, and clinical applications in modern dentistry and aesthetics. 
                    This publication serves as a vital resource for students and professionals alike.
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <a 
                      href="https://amzn.in/d/0izeSX04" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 group"
                    >
                      <img src="https://www.amazon.in/favicon.ico" alt="Amazon" className="w-5 h-5 brightness-0 invert" />
                      Buy on Amazon
                      <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                    <p className="text-sm text-slate-400 italic">Available now on Amazon India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

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
                          
                          {item.type && (
                            <div className="flex items-center gap-2 mb-4">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                item.isFeatured ? 'bg-primary/20 text-primary-light' : 'bg-primary/10 text-primary'
                              }`}>
                                {item.type}
                              </span>
                              {item.filingDate && (
                                <span className="text-xs text-slate-400">Filed: {item.filingDate}</span>
                              )}
                            </div>
                          )}

                          {item.filedUnder && (
                            <p className={`text-sm mb-4 ${item.isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                              Filed Under: <span className="font-bold">{item.filedUnder}</span>
                            </p>
                          )}

                          {item.journal && (
                            <div className="flex items-center gap-3 mb-4">
                              <BookOpen className="w-5 h-5 text-slate-400" />
                              <span className={`text-base ${item.isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                                {item.journal}
                              </span>
                            </div>
                          )}

                          {item.focus && (
                            <div className="mb-6">
                              <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${item.isFeatured ? 'text-primary-light' : 'text-primary'}`}>Focus</p>
                              <p className={`text-lg ${item.isFeatured ? 'text-slate-300' : 'text-slate-700'}`}>{item.focus}</p>
                            </div>
                          )}

                          {item.highlights && (
                            <div className="mb-6">
                              <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${item.isFeatured ? 'text-primary-light' : 'text-primary'}`}>Key Highlights</p>
                              <ul className="space-y-2">
                                {item.highlights.map((h: string, i: number) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${item.isFeatured ? 'text-primary-light' : 'text-primary'}`} />
                                    <span className={item.isFeatured ? 'text-slate-300' : 'text-slate-600'}>{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {item.includes && (
                            <div className="mb-6">
                              <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${item.isFeatured ? 'text-primary-light' : 'text-primary'}`}>Includes</p>
                              <div className="flex flex-wrap gap-2">
                                {item.includes.map((inc: string, i: number) => (
                                  <span key={i} className={`px-4 py-2 rounded-xl text-sm font-medium border ${
                                    item.isFeatured ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-100 text-slate-600'
                                  }`}>
                                    {inc}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.outcome && (
                            <div className="mb-6">
                              <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${item.isFeatured ? 'text-primary-light' : 'text-primary'}`}>Outcome</p>
                              <ul className="space-y-2">
                                {item.outcome.map((o: string, i: number) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${item.isFeatured ? 'bg-primary-light' : 'bg-primary'}`} />
                                    <span className={item.isFeatured ? 'text-slate-300' : 'text-slate-600'}>{o}</span>
                                  </li>
                                ))}
                              </ul>
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
