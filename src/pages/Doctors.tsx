import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { motion } from 'motion/react';

const coreDoctors = [
  { name: 'Dr. Manimekalai', role: 'Chief Managing Director', img: 'https://image2url.com/r2/default/images/1773843845340-9b7bccd1-9095-4170-9bf6-b1ee828560b1.png', qual: 'BDS, MDS', exp: '20+ Years' },
  { name: 'Dr. Kamali', role: 'Senior Resident', img: 'https://image2url.com/r2/default/images/1773843999365-22e8ce59-3c22-477f-ae68-a07c45f42d18.png', qual: 'BDS', exp: '12+ Years' },
];

const consultantDoctors = [
  { name: 'Dr. Udhay', role: 'Prosthodontist', img: 'https://image2url.com/r2/default/images/1773844448997-6577ebb7-8e3c-4556-ab5a-d4ec7b2c560a.png', qual: 'MDS', exp: '15+ Years' },
  { name: 'Dr. Aishwarya', role: 'Oral surgeon & Hair transplant specialist', img: 'https://image2url.com/r2/default/images/1773844582445-18405f87-5216-4f37-9f55-419fe08a010f.png', qual: 'MDS', exp: '10+ Years' },
];

export default function Doctors() {
  return (
    <div className="pt-20">
      <section className="bg-accent py-24">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold text-text-dark mb-6">Our Expert Doctors</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Meet the highly qualified specialists dedicated to providing you with the best dental and aesthetic care.
          </p>
        </div>
      </section>

      {/* Core Doctors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Core Medical Team" subtitle="Our Specialists" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {coreDoctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-soft group-hover:shadow-premium transition-all mb-6 md:mb-8">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-text-dark mb-2">{doc.name}</h3>
                  <p className="text-primary font-bold mb-2">{doc.role}</p>
                  <p className="text-slate-500 text-sm">{doc.qual} • {doc.exp} Experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultant Doctors */}
      <section className="section-padding bg-soft-gray">
        <div className="container-custom">
          <SectionHeader title="Consultant Specialists" subtitle="Expert Network" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {consultantDoctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-[3rem] shadow-soft hover:shadow-premium transition-all border border-slate-100"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 mx-auto">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-dark mb-2">{doc.name}</h3>
                  <p className="text-primary font-semibold mb-2">{doc.role}</p>
                  <p className="text-slate-500 text-xs">{doc.qual} • {doc.exp} Experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
