import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Sparkles, GraduationCap } from 'lucide-react';

const icons = {
  Stethoscope,
  Sparkles,
  GraduationCap,
};

interface ServiceCardProps {
  title: React.ReactNode;
  description: string;
  href: string;
  image: string;
}

export default function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 border border-slate-100/50 flex flex-col h-full"
    >
      {/* Image Container with subtle gradient */}
      <div className="relative h-56 overflow-hidden bg-white group-hover:bg-slate-50 transition-colors duration-500 flex items-center justify-center p-8">
        <motion.img
          whileHover={{ scale: 1.15, rotate: 2 }}
          src={image}
          alt={typeof title === 'string' ? title : 'Service'}
          className="w-full h-full object-contain transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-slate-900 transition-colors leading-tight flex items-center gap-3">
          {title}
        </h3>
        <p className="text-slate-500 mb-6 leading-relaxed text-sm flex-grow group-hover:text-slate-600 transition-colors">
          {description}
        </p>
        
        <Link
          to={href}
          className="inline-flex items-center gap-2 font-bold text-slate-900 group/link"
        >
          <span className="relative">
            Learn More
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover/link:w-full" />
          </span>
          <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
