import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { useEnrollModal } from '../hooks/useEnrollModal';

export default function EnrollModal() {
  const { isOpen, onClose } = useEnrollModal();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-primary p-6 text-white relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Sparkles className="w-16 h-16" />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-1">Enroll Now</h2>
            <p className="text-white/80 font-medium text-sm">Fill out the form below to start your journey.</p>
          </div>

          {/* Google Form Iframe */}
          <div className="flex-1 overflow-hidden bg-slate-50">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfRxUhbVmGYiJtKuku9qXzbbeq6yo_cxTvnPJlAVhyKUpep-g/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-full min-h-[500px]"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
