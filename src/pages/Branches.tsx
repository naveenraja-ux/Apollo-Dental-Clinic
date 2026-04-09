import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const branches = [
  {
    name: 'Apollo Dental Clinic (Main Branch)',
    city: 'Coimbatore',
    address: '581, DB Road, RS Puram, Coimbatore',
    phone: '99446 86569, 0422-4350861, 93840 05101',
    email: 'drmanimekalaiperio@gmail.com',
    hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.332827431114!2d76.9498661!3d11.012607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591d78a20237%3A0x7444c1ee3a0acefe!2sApollo%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1712644785644!5m2!1sen!2sin',
    isMain: true
  },
  {
    name: 'Apollo Dental and Cosmetology Clinics',
    city: 'Chennai',
    address: 'No 15, Near Ambedkar Roundana Statue, Tiruporur Taluk, Chengalpattu District, PIN: 603110',
    phone: '99446 86569, 91504 56054, 93840 05103',
    email: 'drmanimekalaiperio@gmail.com',
    hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.428574169!2d80.188!3d12.727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5250!2sApollo%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1712644785644!5m2!1sen!2sin'
  },
  {
    name: 'Tiruppur Branch',
    city: 'Tiruppur',
    address: 'Coming Soon to Tiruppur',
    phone: 'TBA',
    email: 'drmanimekalaiperio@gmail.com',
    hours: 'Opening Soon',
    isUpcoming: true
  }
];

export default function Branches() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 -z-10" />
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary-light text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6 border border-primary/20">
            <MapPin className="w-4 h-4" /> Our Locations
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Branches</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Conveniently located across major cities to bring premium healthcare and aesthetic excellence closer to you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch, i) => (
              <div 
                key={i} 
                className={`group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col ${branch.isUpcoming ? 'opacity-80' : ''}`}
              >
                {/* Map/Placeholder Header */}
                <div className="h-[300px] relative overflow-hidden bg-slate-100">
                  {!branch.isUpcoming ? (
                    <iframe
                      src={branch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title={branch.name}
                      className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50">
                      <MapPin className="w-16 h-16 mb-4 opacity-20" />
                      <span className="text-xl font-bold uppercase tracking-widest opacity-30">Coming Soon</span>
                    </div>
                  )}
                  
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg ${
                      branch.isMain ? 'bg-primary text-white' : 'bg-white text-slate-900'
                    }`}>
                      {branch.city} {branch.isMain && '• Main Branch'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors">{branch.name}</h2>
                  
                  <div className="space-y-5 mb-8 flex-1">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">{branch.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Contact</p>
                        <p className="text-sm text-slate-600 font-medium">{branch.phone}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hours</p>
                        <p className="text-sm text-slate-600 font-medium">{branch.hours}</p>
                      </div>
                    </div>
                  </div>

                  {!branch.isUpcoming ? (
                    <div className="pt-8 border-t border-slate-50 flex flex-wrap gap-4">
                      <button className="flex-1 bg-primary text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-slate-900 transition-all transform active:scale-95">
                        Book Appointment
                      </button>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3.5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                        title="Get Directions"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  ) : (
                    <div className="pt-8 border-t border-slate-50">
                      <button disabled className="w-full bg-slate-100 text-slate-400 px-6 py-3.5 rounded-2xl font-bold cursor-not-allowed">
                        Launching Soon
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
