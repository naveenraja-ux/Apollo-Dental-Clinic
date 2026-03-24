import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const branches = [
  {
    name: 'RS Puram Branch',
    city: 'Coimbatore',
    address: '123, West Sambandam Road, RS Puram, Coimbatore - 641002',
    phone: '+91 98765 43210',
    email: 'rspuram@apolloclinic.com',
    hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.332827431114!2d76.9484!3d11.0124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzQ0LjYiTiA3NsKwNTYnNTQuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  },
  {
    name: 'Peelamedu Branch',
    city: 'Coimbatore',
    address: '456, Avinashi Road, Peelamedu, Coimbatore - 641004',
    phone: '+91 98765 43211',
    email: 'peelamedu@apolloclinic.com',
    hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.332827431114!2d77.0000!3d11.0200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzEyLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
  },
  {
    name: 'Upcoming Branch',
    city: 'Chennai',
    address: 'Coming Soon to Anna Nagar, Chennai',
    phone: 'TBA',
    email: 'info@apolloclinic.com',
    hours: 'Opening Soon',
    isUpcoming: true
  }
];

export default function Branches() {
  return (
    <div className="pt-20">
      <section className="bg-accent py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-text-dark mb-6">Our Branches</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Conveniently located across major cities to bring premium healthcare closer to you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {branches.map((branch, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 bg-soft-gray rounded-[4rem] overflow-hidden border border-slate-100 ${branch.isUpcoming ? 'opacity-70 grayscale' : ''}`}>
                <div className="flex-1 p-12 md:p-20">
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
                    {branch.city}
                  </div>
                  <h2 className="text-4xl font-bold text-text-dark mb-8">{branch.name}</h2>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-primary shrink-0" />
                      <p className="text-slate-600">{branch.address}</p>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-primary shrink-0" />
                      <p className="text-slate-600">{branch.phone}</p>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="w-6 h-6 text-primary shrink-0" />
                      <p className="text-slate-600">{branch.email}</p>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="w-6 h-6 text-primary shrink-0" />
                      <p className="text-slate-600">{branch.hours}</p>
                    </div>
                  </div>

                  {!branch.isUpcoming && (
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-premium hover:bg-primary-dark transition-all">
                        Book Appointment
                      </button>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
                      >
                        Get Directions <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
                {!branch.isUpcoming && (
                  <div className="flex-1 min-h-[400px]">
                    <iframe
                      src={branch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title={branch.name}
                    />
                  </div>
                )}
                {branch.isUpcoming && (
                  <div className="flex-1 bg-slate-200 flex items-center justify-center p-20 text-center">
                    <div>
                      <MapPin className="w-20 h-20 text-slate-400 mx-auto mb-6" />
                      <h3 className="text-3xl font-bold text-slate-500">Coming Soon</h3>
                      <p className="text-slate-400 mt-4">We are expanding our reach to serve you better.</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
