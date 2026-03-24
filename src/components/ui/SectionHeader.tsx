import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ title, subtitle, centered = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 bg-accent text-primary text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4"
      >
        {subtitle}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark tracking-tight"
      >
        {title}
      </motion.h2>
      <div className={`h-1.5 w-20 bg-primary mt-6 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
