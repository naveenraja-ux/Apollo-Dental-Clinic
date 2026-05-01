import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';

const blogPosts = [
  {
    title: '10 Tips for Maintaining a Bright White Smile',
    category: 'Dental Health',
    date: 'March 10, 2026',
    author: 'Dr. Sarah Johnson',
    img: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?auto=format&fit=crop&q=80&w=2070',
    excerpt: 'Discover the best practices for keeping your teeth pearly white after a professional whitening treatment.'
  },
  {
    title: 'The Future of Permanent Makeup: Trends for 2026',
    category: 'PMU Career',
    date: 'March 05, 2026',
    author: 'Priya Sharma',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=2069',
    excerpt: 'From ombre brows to lip blushing, explore the latest trends that are dominating the PMU industry this year.'
  },
  {
    title: 'Understanding Different Skin Types and Their Needs',
    category: 'Skin Care',
    date: 'February 28, 2026',
    author: 'Dr. Elena Rodriguez',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070',
    excerpt: 'A comprehensive guide to identifying your skin type and choosing the right medical-grade treatments.'
  },
  {
    title: 'Why Dental Implants are the Best Solution for Missing Teeth',
    category: 'Dental Health',
    date: 'February 20, 2026',
    author: 'Dr. Michael Chen',
    img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2070',
    excerpt: 'Learn about the long-term benefits of dental implants compared to traditional bridges and dentures.'
  },
  {
    title: 'How to Start Your Own Aesthetic Studio After Certification',
    category: 'Career Guidance',
    date: 'February 15, 2026',
    author: 'Academy Mentors',
    img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=2070',
    excerpt: 'A step-by-step guide for our academy graduates on setting up a successful PMU business.'
  },
  {
    title: 'The Benefits of Laser Hair Removal for All Skin Types',
    category: 'Cosmetology Tips',
    date: 'February 10, 2026',
    author: 'Laser Specialists',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=2073',
    excerpt: 'Debunking common myths about laser hair removal and explaining how modern technology works for everyone.'
  },
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-accent py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <SectionHeader
              title="Latest Insights & Expert Advice"
              subtitle="Blog & Articles"
              centered={false}
            />
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white border border-slate-200 rounded-full py-4 px-12 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
