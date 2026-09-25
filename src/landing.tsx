import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, Car, Plane, Home, Calendar, Users, Star, 
  MapPin, Phone, Mail, ChevronRight, Menu, X, 
  ChevronLeft, ArrowRight, ShieldCheck, Heart, Award, CheckCircle2, Sparkles 
} from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/images/WILDLIFE-SAFARIS.jpg',
    title: 'Breathtaking Wildlife Safaris',
    subtitle: 'Witness the Great Migration and majestic wildlife up close across pristine African wilderness.'
  },
  {
    id: 2,
    image: '/images/ACCOMODATIONS.jpg',
    title: 'Exquisite Luxury Accommodations',
    subtitle: 'Relax in world-class lodges and handpicked Airbnbs designed for ultimate comfort.'
  },
  {
    id: 3,
    image: '/images/ROAD-TRIPS.jpg',
    title: 'Unforgettable Roadtrips & Tours',
    subtitle: 'Explore scenic landscapes with our premium chauffeured and self-drive car rental fleet.'
  },
  {
    id: 4,
    image: '/images/AIRPORT-PICKUPS.jpg',
    title: 'Seamless Airport Transfers',
    subtitle: 'Punctual, comfortable pickups and drop-offs to start your adventure stress-free.'
  },
  {
    id: 5,
    image: '/images/SPECIAL-EVENT-TRANSPORT.jpg',
    title: 'Special Event Transport',
    subtitle: 'Reliable transport solutions for weddings, corporate retreats, family vacations, and more.'
  }
];

const SERVICES = [
  {
    icon: <Car className="w-8 h-8 text-amber-500" />,
    title: "Car Rental",
    description: "Choose from our reliable fleet for chauffeured or self-drive adventures across rugged terrains and city streets."
  },
  {
    icon: <Plane className="w-8 h-8 text-amber-500" />,
    title: "Airport Pickups & Drop-offs",
    description: "Enjoy timely, safe, and comfortable airport transfers with professional drivers waiting right on arrival."
  },
  {
    icon: <Home className="w-8 h-8 text-amber-500" />,
    title: "Accommodation Setup",
    description: "We handle bookings and seamless stays at premium hotels, eco-lodges, and cozy Airbnbs tailored to your taste."
  },
  {
    icon: <Compass className="w-8 h-8 text-amber-500" />,
    title: "Tours and Safaris",
    description: "Immersive wildlife roadtrips, family vacations, and custom itineraries curated by seasoned local experts."
  },
  {
    icon: <Calendar className="w-8 h-8 text-amber-500" />,
    title: "Event Transport",
    description: "Dedicated logistical support for weddings, funerals, dowry ceremonies, and corporate team retreats."
  }
];

const TOURS = [
  {
    id: 1,
    title: "Masai Mara Migration Odyssey",
    duration: "4 Days / 3 Nights",
    price: "KSH75,000",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800",
    tag: "Most Popular",
    desc: "Experience the ultimate river crossings and big cat sightings in Kenya's premier wildlife reserve."
  },
  {
    id: 2,
    title: "Amboseli Elephant Panorama",
    duration: "3 Days / 2 Nights",
    price: "KSH60,000",
    image: "https://images.unsplash.com/photo-1564760055775-d63b19a55388?auto=format&fit=crop&q=80&w=800",
    tag: "Scenic Views",
    desc: "Marvel at massive elephant herds roaming beneath the snow-capped peak of Mount Kilimanjaro."
  },
  {
    id: 3,
    title: "Tsavo East & West Wilderness",
    duration: "5 Days / 4 Nights",
    price: "KSH45,000",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    tag: "Adventure",
    desc: "Discover red elephants, roaring springs, and dramatic volcanic lava flows in Kenya's largest park."
  }
];

const HIGHLIGHTS = [
  {
    icon: <Award className="w-6 h-6 text-amber-600" />,
    title: "Expert Local Guides",
    desc: "Years of tracking and deep wilderness knowledge ensuring safe and insightful encounters."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    title: "Exclusive Access",
    desc: "Private conservancies and handpicked vantage points away from the heavy tourist crowds."
  },
  {
    icon: <Heart className="w-6 h-6 text-amber-600" />,
    title: "Sustainable Travel",
    desc: "Eco-conscious operations directly supporting local community conservation and wildlife preservation."
  }
];

const REVIEWS = [
  {
    name: "Sarah Wanjiku",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "Safaris Adventure made our family vacation absolutely seamless! From the airport pickup to our luxury lodge in Masai Mara, every detail was perfection."
  },
  {
    name: "David & Emily Miller",
    location: "London, UK",
    rating: 5,
    text: "Unbelievable service! Our safari guide knew every animal behavior and got us right front row for the migration. Highly recommend their car rental and tour packages!"
  },
  {
    name: "Brian Ochieng",
    location: "Mombasa, Kenya",
    rating: 5,
    text: "We hired their fleet for a family wedding and event transport. Extremely punctual, polite drivers, and pristine vehicles. Truly professional!"
  }
];

export default function SafariAdventures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Automatic slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-amber-500 selection:text-white">
      
      {}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center overflow-hidden shadow-md shadow-stone-500/10 group-hover:scale-105 transition-transform p-1">
              <img src="/favicon-96x96.png" alt="Safari Adventures Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-stone-900 block leading-tight">
                SAFARIS<span className="text-amber-600 ml-1">ADVENTURE</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500">
                Explore The Wild
              </span>
            </div>
          </a>

          {/* Desktop Navigation with side borders on each link */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Home', 'About', 'Services', 'Tours', 'Reviews', 'Contact'].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-5 py-2 text-sm font-medium text-stone-700 hover:text-amber-600 hover:bg-amber-50/50 transition-all border-r border-stone-200 last:border-r-0 first:border-l"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+254702308649" 
              className="flex items-center gap-2 text-xs font-semibold bg-amber-50 text-amber-800 px-4 py-2.5 rounded-full border border-amber-200 hover:bg-amber-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>+254 702 308 649</span>
            </a>
            <a 
              href="#contact" 
              className="bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-3 shadow-xl">
            {['Home', 'About', 'Services', 'Tours', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-stone-800 hover:text-amber-600 border-b border-stone-100 last:border-b-0"
              >
                {item}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a 
                href="tel:+254702308649" 
                className="flex items-center justify-center gap-2 text-sm font-medium bg-amber-50 text-amber-800 py-3 rounded-xl border border-amber-200"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>+254 702 308 649</span>
              </a>
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center bg-amber-600 text-white font-bold py-3 rounded-xl shadow"
              >
                Book Adventure Now
              </a>
            </div>
          </div>
        )}
      </header>

      {}
      <section id="home" className="relative h-[85vh] min-h-[550px] overflow-hidden bg-stone-900">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-stone-950/30 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out"
              
            />
          </div>
        ))}

        {/* Hero Overlay Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" /> Welcome To Safaris Adventure
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-md">
              {SLIDES[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto font-medium drop-shadow">
              {SLIDES[currentSlide].subtitle}
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="#tours"
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all flex items-center gap-2 group"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold px-8 py-4 rounded-xl transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 text-white hover:bg-amber-600 backdrop-blur-md transition-all border border-white/10 hidden sm:flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 text-white hover:bg-amber-600 backdrop-blur-md transition-all border border-white/10 hidden sm:flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {}
      <section id="about" className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50/60 via-stone-50 to-orange-50/40 rounded-3xl p-8 sm:p-12 border border-amber-200/60 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-amber-700 font-bold text-xs uppercase tracking-widest bg-amber-200/50 px-3 py-1 rounded-full">
                About Safaris Adventure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                Your Trusted Partner for Unrivaled African Journeys
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                Based in Roysambu, Nairobi, Safaris Adventure is dedicated to crafting extraordinary travel experiences. Whether you need a dependable car rental, hassle-free airport transfers, cozy hotel and Airbnb setups, or grand wildlife safaris, we deliver excellence at every turn.
              </p>

              {/* Expandable Content */}
              {isAboutExpanded && (
                <div className="pt-4 text-stone-600 text-base space-y-4 border-t border-amber-200/40 animate-fade-in">
                  <p>
                    Our expert team is passionate about Kenya's rich wildlife, breathtaking landscapes, and warm hospitality. We tailor every itinerary to match your unique desires—from romantic getaways and family vacations to large corporate retreats and special milestone events like weddings and traditional ceremonies.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
                    <div className="bg-white/80 p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">24/7 Support</h4>
                        <p className="text-xs text-stone-500 mt-0.5">Always available to assist your journey.</p>
                      </div>
                    </div>
                    <div className="bg-white/80 p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">Maintained Fleet</h4>
                        <p className="text-xs text-stone-500 mt-0.5">Safe, clean, and rugged vehicles.</p>
                      </div>
                    </div>
                    <div className="bg-white/80 p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">Tailored Itineraries</h4>
                        <p className="text-xs text-stone-500 mt-0.5">Customized precisely for your schedule.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md text-sm"
                >
                  <span>{isAboutExpanded ? 'Show Less' : 'Read More / Expand'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isAboutExpanded ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="services" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
              Our Premium Services
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Comprehensive travel and logistics solutions designed to make your experience smooth, luxurious, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {React.cloneElement(service.icon, { className: "w-7 h-7 text-amber-600 group-hover:text-white transition-colors" })}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-stone-900 transition-colors pt-4 border-t border-stone-100"
                >
                  <span>Inquire Now</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="tours" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Curated Adventures
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
              Featured Safari Tours
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Handpicked itineraries showcasing the finest wildlife spectacles and landscapes Kenya has to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURS.map((tour) => (
              <div 
                key={tour.id}
                className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {tour.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 z-10 bg-stone-900/80 backdrop-blur-md text-white text-sm font-bold px-4 py-1.5 rounded-xl border border-white/10">
                    From <span className="text-amber-400">{tour.price}</span>
                  </div>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                      {tour.duration}
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {tour.desc}
                    </p>
                  </div>
                  
                  <a
                    href="#contact"
                    className="w-full bg-stone-900 hover:bg-amber-600 text-white text-center font-bold py-3 rounded-xl transition-all shadow text-sm block"
                  >
                    Book This Tour
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-amber-300 font-bold text-xs uppercase tracking-widest bg-amber-800/80 px-3 py-1 rounded-full border border-amber-600/50">
              Why Choose Safaris Adventure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              The Standard of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-amber-950/60 border border-amber-700/40 p-8 rounded-2xl backdrop-blur-sm shadow-lg space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-amber-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="reviews" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
              Customer Reviews & Ratings
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Hear from travelers and clients who have experienced our safaris, car rentals, and event transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, r) => (
                      <Star key={r} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-sm italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-stone-500">{review.location}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <footer id="contact" className="bg-stone-950 text-stone-300 pt-20 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-stone-800">
            
            {/* Col 1: About */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center overflow-hidden shadow-md shadow-stone-500/10 group-hover:scale-105 transition-transform p-1">
                  <img src="/favicon-96x96.png" alt="Safari Adventures Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-lg font-black tracking-tight text-white">
                  SAFARIS<span className="text-amber-500 ml-1">ADVENTURES</span>
                </span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                Your premier partner for wildlife safaris, car rentals, airport transfers, accommodation setups, and special event transport across Kenya.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a></li>
                <li><a href="#tours" className="hover:text-amber-500 transition-colors">Featured Tours</a></li>
                <li><a href="#reviews" className="hover:text-amber-500 transition-colors">Customer Reviews</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs">Services</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="text-stone-400">Car Rental (Chauffeured & Self-Drive)</li>
                <li className="text-stone-400">Airport Pickups & Drop-offs</li>
                <li className="text-stone-400">Hotels & Airbnbs Setup</li>
                <li className="text-stone-400">Roadtrips & Family Vacations</li>
                <li className="text-stone-400">Event Transport (Weddings, Retreats)</li>
              </ul>
            </div>

            {/* Col 4: Exact Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-base tracking-wider uppercase text-xs">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Location: Roysambu, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <a href="tel:+254702308649" className="hover:text-amber-500 transition-colors">
                    +254 702 308 649 | +254 780 253 855
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                  <a href="mailto:safarisadventure03@gmail.com" className="hover:text-amber-500 transition-colors break-all">
                    safarisadventure03@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Safaris Adventure. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <span className="text-amber-500">&hearts;</span> for unforgettable African safaris.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}