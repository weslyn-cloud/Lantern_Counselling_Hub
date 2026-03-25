import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Heart, Sparkles, 
  ShieldCheck, MessageCircle, Calendar, 
  Instagram, Facebook, Linkedin, Mail, Phone, MapPin,
  ChevronRight, Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Approach', href: '#approach' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: 'mailto:office@lanterncounselling.com.au' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <img 
            src="https://assets.cdn.filesafe.space/AznyZ901C1eWpNIsXx1D/media/68147f4788cf5c1dfdf2cf34.png" 
            alt="Lantern Counselling Hub Logo" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
            referrerPolicy="no-referrer" 
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-lantern-dark/70 hover:text-lantern-amber transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://lanterncounselling.com.au/booking-couple"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lantern-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-lantern-sage transition-all shadow-md hover:shadow-lg active:scale-95 inline-block"
          >
            Book a Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-lantern-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-xl p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif text-lantern-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://lanterncounselling.com.au/booking-couple"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lantern-amber text-white py-4 rounded-xl font-bold shadow-lg text-center block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
  >
    <div className="w-14 h-14 bg-lantern-cream rounded-2xl flex items-center justify-center text-lantern-amber mb-6 group-hover:bg-lantern-amber group-hover:text-white transition-colors duration-500">
      <Icon size={28} />
    </div>
    <h3 className="font-serif text-2xl mb-4 text-lantern-dark">{title}</h3>
    <p className="text-stone-500 leading-relaxed mb-6">{description}</p>
    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-lantern-amber hover:gap-3 transition-all">
      Learn More <ArrowRight size={16} />
    </a>
  </motion.div>
);

const TestimonialCard = ({ quote, author, role }: any) => (
  <div className="bg-lantern-cream p-10 rounded-[2rem] relative">
    <Quote className="absolute top-8 left-8 text-lantern-amber/10 w-16 h-16" />
    <p className="font-serif text-xl italic text-lantern-dark/80 leading-relaxed mb-8 relative z-10">
      "{quote}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-lantern-sage rounded-full flex items-center justify-center text-white font-bold">
        {author[0]}
      </div>
      <div>
        <h4 className="font-bold text-lantern-dark">{author}</h4>
        <p className="text-sm text-stone-500">{role}</p>
      </div>
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="font-sans selection:bg-lantern-amber selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516589174184-c685266d430c?auto=format&fit=crop&q=80&w=2000" 
            alt="Warm living space" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-lantern-cream via-transparent to-lantern-cream"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-lantern-sage/10 text-lantern-sage text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-lantern-sage/20">
                Specialised Couples & Relationship Therapy in Brisbane
              </span>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-lantern-dark leading-[0.9] mb-8">
                Lighting the path to <span className="font-serif-italic text-lantern-amber">deeper connection.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed mb-10 max-w-2xl">
                We help modern couples navigate the complexities of partnership, conflict, and intimacy with warmth and evidence-based care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://lanterncounselling.com.au/booking-couple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lantern-dark text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-lantern-sage transition-all shadow-xl hover:-translate-y-1 text-center"
                >
                  Book Your Free Consultation
                </a>
                <button className="bg-white text-lantern-dark border border-stone-200 px-10 py-5 rounded-full text-lg font-bold hover:bg-stone-50 transition-all">
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Element */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-5%] bottom-[10%] hidden lg:block"
        >
          <div className="w-64 h-64 bg-lantern-amber/10 rounded-full blur-3xl"></div>
        </motion.div>
      </section>

      {/* As Seen In */}
      <section className="py-12 border-y border-stone-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-[0.3em] text-stone-400 uppercase mb-8">Trusted & Recognised By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <span className="font-serif text-2xl font-bold italic">Psychology Today</span>
            <span className="font-serif text-2xl font-bold">PACFA</span>
            <span className="font-serif text-2xl font-bold">CCAA</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                {/* UPDATE YOUTUBE LINK BELOW */}
                <iframe 
                  src="https://www.youtube.com/embed/PLACEHOLDER_ID" 
                  title="Founder Video"
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            <div>
              <h2 className="font-serif text-4xl md:text-6xl text-lantern-dark leading-tight mb-8">
                You deserve a relationship that feels like <span className="font-serif-italic text-lantern-sage">home.</span>
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  At Lantern Counselling Hub, we believe that relationship therapy shouldn't feel clinical or cold. It should feel like a warm, safe space where you and your partner can finally put down the heavy things you've been carrying together.
                </p>
                <p>
                  Whether you're navigating the early stages of a relationship, dealing with years of built-up resentment, or facing a crisis of trust, we're here to hold the lantern and help you find your way back to each other.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Evidence-based approach",
                    "Trauma-informed, inclusive care",
                    "Convenient online & in-person sessions",
                    "Specialised in modern relationship dynamics"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-lantern-sage/10 rounded-full flex items-center justify-center text-lantern-sage">
                        <ShieldCheck size={14} />
                      </div>
                      <span className="font-medium text-lantern-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-lantern-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-6xl text-lantern-dark mb-6">How we can help</h2>
            <p className="text-xl text-stone-500 font-light">Tailored support for the unique challenges of modern life and love.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Heart}
              title="Couples Therapy"
              description="Move past the same old arguments and rediscover the friendship and intimacy that brought you together."
              delay={0.1}
            />
            <ServiceCard 
              icon={Sparkles}
              title="Infidelity Recovery"
              description="Heal from the trauma of betrayal and navigate the complex journey of rebuilding trust and transparency."
              delay={0.2}
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="High Conflict"
              description="De-escalate the cycle of criticism and defensiveness to create a more peaceful home environment."
              delay={0.3}
            />
            <ServiceCard 
              icon={MessageCircle}
              title="Communication"
              description="Master the art of expressing your needs without starting a fire, and learn to truly hear your partner."
              delay={0.4}
            />
            <ServiceCard 
              icon={Calendar}
              title="Premarital Prep"
              description="Build a rock-solid foundation for your future together before you say 'I do'."
              delay={0.5}
            />
            <ServiceCard 
              icon={MapPin}
              title="Discernment Counselling"
              description="A specialised approach for couples where one is leaning out and the other is leaning in."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Approach / Why Us */}
      <section id="approach" className="py-24 bg-lantern-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-lantern-sage/5 blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-lantern-amber font-bold tracking-widest uppercase text-sm mb-6 block">Our Approach</span>
              <h2 className="font-serif text-4xl md:text-6xl mb-8">Modern therapy for <span className="font-serif-italic text-lantern-sage">modern souls.</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-lantern-amber">
                    <span className="font-serif text-2xl">01</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Evidence-Based</h4>
                    <p className="text-stone-400 leading-relaxed">We don't just 'talk.' We use proven methods like the Gottman Method and EFT to create real, lasting change.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-lantern-amber">
                    <span className="font-serif text-2xl">02</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Relational Focus</h4>
                    <p className="text-stone-400 leading-relaxed">We look at the systems you're a part of—your family, your partnership, your culture—to understand the whole you.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-lantern-amber">
                    <span className="font-serif text-2xl">03</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Active Partnership</h4>
                    <p className="text-stone-400 leading-relaxed">We're not blank slates. We're in the trenches with you, offering feedback, tools, and a bit of humor along the way.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden border-8 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" 
                  alt="Couple talking" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-32 h-32 hidden md:block"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-lantern-amber">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    <textPath xlinkHref="#circlePath">
                      Light the way • Find the path • Heal the heart • 
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-6xl text-lantern-dark mb-6">Stories of <span className="font-serif-italic text-lantern-amber">healing.</span></h2>
              <p className="text-xl text-stone-500 font-light">Hear from the couples who have found their way back to each other with us.</p>
            </div>
            <button className="flex items-center gap-2 font-bold text-lantern-dark hover:text-lantern-amber transition-colors">
              Read More Reviews <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="We were on the brink of divorce when we started at Lantern. Our therapist helped us see each other again, not as enemies, but as partners who had just lost their way."
              author="Sarah & Mark"
              role="Couples Therapy Clients"
            />
            <TestimonialCard 
              quote="After years of the same arguments, we finally have the tools to talk without fighting. It's like we've rediscovered the person we first fell in love with."
              author="David & Chloe"
              role="Couples Therapy Clients"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-lantern-sage font-bold tracking-widest uppercase text-sm mb-6 block">Our Founder</span>
              <h2 className="font-serif text-4xl md:text-6xl text-lantern-dark mb-8">Meet <span className="font-serif-italic text-lantern-amber">Weslyn</span></h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  Weslyn is the Founder and Lead Counsellor at Lantern Counselling Hub, dedicated to helping couples navigate the complexities of their relationships with empathy and professional expertise. He holds a Master of Counselling degree from Christian Heritage College (CHC) Australia, which provides the clinical foundation for his compassionate approach.
                </p>
                <p>
                  His therapeutic approach is centred on "The Harmony of Healing," where he integrates evidence-based techniques with a deep understanding of human connection. Weslyn specialises in creating a safe, non-judgemental space for couples to explore their challenges, rediscover their strengths, and build a lasting partnership.
                </p>
                <div className="pt-6">
                  <button className="flex items-center gap-3 font-bold text-lantern-dark group">
                    <span className="pb-1 border-b-2 border-lantern-amber group-hover:border-lantern-dark transition-all">Read Weslyn's Full Story</span>
                    <ArrowRight size={20} className="text-lantern-amber group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://assets.cdn.filesafe.space/AznyZ901C1eWpNIsXx1D/media/69968e56adc9e9bd1625bce5.png" 
                  alt="Lead Counsellor at Lantern Counselling Hub" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-stone-100">
                <p className="font-serif text-lg font-bold text-lantern-dark">Weslyn</p>
                <p className="text-sm text-stone-500">Lead Counsellor & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-lantern-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-6xl text-lantern-dark mb-6">Common Questions</h2>
            <p className="text-xl text-stone-500 font-light">Everything you need to know before your first session.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: "How long are the sessions?", a: "Standard couples sessions are 50 minutes. We also offer extended 80-minute sessions for couples who want to dive deeper into complex issues." },
              { q: "Do you take insurance?", a: "We are an out-of-network provider. We can provide you with a 'superbill' that you can submit to your insurance for potential reimbursement." },
              { q: "How often should we come in?", a: "Most couples start with weekly sessions to build momentum and learn new tools. As things improve, we often transition to bi-weekly check-ins." },
              { q: "What is the Gottman Method?", a: "It's an evidence-based approach to couples therapy based on 40 years of research. It focuses on building friendship, managing conflict, and creating shared meaning." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-3xl border border-stone-100 overflow-hidden transition-all">
                <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                  <h4 className="font-serif text-xl md:text-2xl text-lantern-dark">{item.q}</h4>
                  <div className="w-8 h-8 rounded-full bg-lantern-cream flex items-center justify-center text-lantern-amber group-open:rotate-180 transition-transform">
                    <ChevronRight size={20} />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-stone-500 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-lantern-cream">
        <div className="container mx-auto px-6">
          <div className="bg-lantern-sage rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <img src="https://assets.cdn.filesafe.space/AznyZ901C1eWpNIsXx1D/media/68147f4788cf5c1dfdf2cf34.png" alt="Lantern Logo" className="w-24 h-24 mx-auto mb-8 brightness-0 invert" referrerPolicy="no-referrer" />
              <h2 className="font-serif text-4xl md:text-7xl mb-8">Ready to start your <span className="font-serif-italic">journey?</span></h2>
              <p className="text-xl md:text-2xl mb-12 text-white/80 font-light">
                The first step is often the hardest, but you don't have to take it alone. Book a free 15-minute consultation to see if we're the right fit for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://lanterncounselling.com.au/booking-couple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-lantern-sage px-10 py-5 rounded-full text-xl font-bold hover:bg-lantern-cream transition-all shadow-xl"
                >
                  Schedule Your Consultation
                </a>
                <a 
                  href="mailto:office@lanterncounselling.com.au"
                  className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-stone-400">© 2024 Lantern Counselling Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
