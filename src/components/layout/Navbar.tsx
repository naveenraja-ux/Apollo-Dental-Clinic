import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Services', 
    href: '#',
    children: [
      { label: 'Dental Treatments', href: '/treatments/dental' },
      { label: 'Cosmetology Treatments', href: '/treatments/cosmetology' },
      { label: 'Academy', href: '/academy' },
    ]
  },
  { label: 'Publications', href: '/publications' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-[80px] border-b border-slate-100' 
          : 'bg-transparent h-[100px]'
      )}
    >
      <div className="container-custom h-full">
        <div className="flex items-center justify-between h-full gap-4">
          <Link to="/" className="flex items-center shrink-0 transition-transform hover:scale-105 duration-300">
            <img 
              src="https://image2url.com/r2/default/images/1773328970655-aeb2f2cd-28e9-449b-8b4d-10d61f18de15.png" 
              alt="Apollo Dental & Cosmetology Clinics" 
              className="h-[48px] md:h-[58px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href === '#' ? (
                  <div
                    className={cn(
                      'text-[11px] xl:text-[12px] uppercase tracking-widest font-bold transition-all duration-300 hover:text-primary flex items-center gap-1 py-2 px-2 xl:px-3 whitespace-nowrap relative cursor-default',
                      item.children?.some(child => location.pathname === child.href) ? 'text-primary' : 'text-slate-700'
                    )}
                  >
                    <span className="relative">
                      {item.label}
                      {/* Bottom Pointer */}
                      <span className={cn(
                        "absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300",
                        item.children?.some(child => location.pathname === child.href) ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                      )} />
                    </span>
                    {item.children && <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'text-[11px] xl:text-[12px] uppercase tracking-widest font-bold transition-all duration-300 hover:text-primary flex items-center gap-1 py-2 px-2 xl:px-3 whitespace-nowrap relative',
                      location.pathname === item.href ? 'text-primary' : 'text-slate-700'
                    )}
                  >
                    <span className="relative">
                      {item.label}
                      {/* Bottom Pointer */}
                      <span className={cn(
                        "absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300",
                        location.pathname === item.href ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                      )} />
                    </span>
                    {item.children && <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                )}
                
                {item.children && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-premium border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 overflow-hidden">
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-[11px] font-bold text-slate-600 hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a 
              href="tel:+919944686569" 
              className="flex items-center gap-2.5 text-slate-700 hover:text-primary transition-all duration-300 group whitespace-nowrap border border-slate-200 hover:border-primary/30 px-4 py-2 rounded-full"
            >
              <div className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-2.5 h-2.5" />
              </div>
              <span className="text-[11px] xl:text-[12px] font-bold">+91 99446 86569</span>
            </a>
            <Link
              to="/contact"
              className="bg-primary text-white px-5 xl:px-7 py-2.5 rounded-full text-[11px] xl:text-[12px] font-bold shadow-soft hover:shadow-premium transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-slate-100 shadow-2xl overflow-hidden z-40"
          >
            <div className="container-custom py-12 flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col gap-4"
                  >
                    {item.href === '#' ? (
                      <div
                        className={cn(
                          "text-2xl font-bold flex items-center justify-between group transition-colors cursor-default",
                          item.children?.some(child => location.pathname === child.href) ? "text-primary" : "text-slate-900"
                        )}
                      >
                        {item.label}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "text-2xl font-bold flex items-center justify-between group transition-colors",
                          location.pathname === item.href ? "text-primary" : "text-slate-900"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                        <ArrowRight className={cn(
                          "w-6 h-6 transition-all",
                          location.pathname === item.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                        )} />
                      </Link>
                    )}
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-4 border-l-2 border-primary/10 pl-6">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="text-slate-500 text-lg font-bold hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-10 border-t border-slate-100 flex flex-col gap-6"
              >
                <a href="tel:+919944686569" className="flex items-center gap-5 text-slate-900 group bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Call Us Directly</span>
                    <span className="text-xl font-bold whitespace-nowrap">+91 99446 86569</span>
                  </div>
                </a>
                <Link
                  to="/contact"
                  className="bg-primary text-white text-center py-6 rounded-2xl font-bold shadow-soft hover:shadow-premium transition-all flex items-center justify-center gap-3 whitespace-nowrap text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar className="w-6 h-6" />
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
