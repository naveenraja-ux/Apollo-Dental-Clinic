import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Doctors', href: '/doctors' },
      { label: 'Academy', href: '/academy' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Dental Treatments', href: '/treatments/dental' },
      { label: 'Cosmetology Clinic', href: '/treatments/cosmetology' },
      { label: 'Professional Academy', href: '/academy' },
      { label: 'Patient Stories', href: '/patient-stories' },
      { label: 'Publications', href: '/publications' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img 
                src="https://image2url.com/r2/default/images/1773328970655-aeb2f2cd-28e9-449b-8b4d-10d61f18de15.png" 
                alt="Apollo Dental & Cosmetology Clinics" 
                className="h-[42px] w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium healthcare center dedicated to delivering comprehensive dental and aesthetic solutions with advanced technology and expert care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/PMUandCosmetology/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/apolloacademy_cosmetology?igsh=OGg3MGpzazF6OGVr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@ApolloAcademyCosmo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-lg font-bold mb-6">{group.title}</h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-primary-light transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-lg font-bold mb-6">Our Branches</h4>
            <div className="flex flex-col gap-8">
              {/* Coimbatore Branch */}
              <div className="flex flex-col gap-3">
                <p className="text-primary-light text-[10px] font-bold uppercase tracking-widest">Coimbatore (RS Puram)</p>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3">
                    <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                    <span className="text-slate-400 text-xs">581, DB Road, RS Puram, Coimbatore</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-4 h-4 text-primary-light shrink-0" />
                    <span className="text-slate-400 text-xs">99446 86569, 0422-4350861, 93840 05101</span>
                  </li>
                </ul>
              </div>

              {/* Chennai Branch */}
              <div className="flex flex-col gap-3">
                <p className="text-primary-light text-[10px] font-bold uppercase tracking-widest">Chennai (Tiruporur)</p>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-3">
                    <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                    <span className="text-slate-400 text-xs">No 15, near Ambedkar Roundana statue, Tiruporur, Chengalpattu - 603110</span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-4 h-4 text-primary-light shrink-0" />
                    <span className="text-slate-400 text-xs">99446 86569, 91504 56054, 93840 05103</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Apollo Dental & Cosmetology Clinics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-slate-500 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-slate-500 text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
