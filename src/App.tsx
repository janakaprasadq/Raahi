import React, { useState, useEffect } from "react";
import {
  MapPin,
  Car,
  Users,
  Star,
  Leaf,
  Heart,
  Shield,
  Mountain,
  Smartphone,
  QrCode,
  Download,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: "Your Safari Adventure Starts Here",
      subtitle: "Experience conscious travel with RAAHI",
      description:
        "Book reliable safari jeeps, explore responsibly, and create unforgettable memories with our community-focused platform.",
      buttonText: "Book Safari Jeep",
    },
    {
      title: "We Love Handcrafted Experiences",
      subtitle: "Authentic Safari Adventures",
      description:
        "Every journey is carefully curated to bring you closer to nature while supporting local communities and sustainable tourism.",
      buttonText: "Explore Adventures",
    },
    {
      title: "Make Your Journey Uniquely Yours",
      subtitle: "Personalized Safari Experiences",
      description:
        "Customize your adventure with our flexible booking system and experienced local guides who know the hidden gems.",
      buttonText: "Plan Your Trip",
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Safari Jeep Booking",
      description:
        "Book your adventure with our reliable safari jeep service. Available now!",
      status: "Available Now",
      featured: true,
    },
    {
      icon: Car,
      title: "Car Rentals",
      description:
        "Comfortable and reliable car rental services for your journey.",
      status: "Coming Soon",
      featured: false,
    },
    {
      icon: Users,
      title: "Tour Guides",
      description: "Expert local guides to enhance your travel experience.",
      status: "Coming Soon",
      featured: false,
    },
    {
      icon: Heart,
      title: "Personal Concierge",
      description: "Personalized assistance for all your travel needs.",
      status: "Coming Soon",
      featured: false,
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Friendly",
      description: "Warm hospitality and genuine care for every traveler",
    },
    {
      icon: Shield,
      title: "Reliable",
      description: "Trustworthy service you can count on",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Committed to responsible tourism practices",
    },
    {
      icon: Mountain,
      title: "Adventurous",
      description: "Embracing the spirit of exploration",
    },
  ];

  const testimonials = [
    {
      text: "RAAHI was the best investment for our Sri Lankan adventure. The safari experience really helped us connect with nature.",
      author: "Sarah M.",
    },
    {
      text: "It's exactly what I've been looking for in sustainable tourism. I would gladly recommend RAAHI to anyone.",
      author: "David L.",
    },
    {
      text: "Absolutely wonderful experience! I wish I would have found RAAHI sooner for my previous trips.",
      author: "Emma R.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-stone-50"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      {/* Navigation - Konsept Style */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          {scrollY > 50 ? (
            // Compact header after scroll
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-sage-300 to-sage-400 rounded-full flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className="text-xl tracking-[0.2em] text-slate-700 font-medium"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    RAAHI
                  </span>
                  <span
                    className="text-xs tracking-wider text-slate-600 font-normal"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    Conscious Travel • Responsible Tourism
                  </span>
                </div>
              </div>

              {/* Compact Navigation Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#services"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  TOURIST
                </a>
                <a
                  href="#drivers"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  VENDOR
                </a>
                <a
                  href="#about"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  ABOUT
                </a>
                <a
                  href="#help"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  HELP CENTER
                </a>
                {/* <a href="#booking" className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.15em] font-medium" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  BOOKING
                </a> */}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-slate-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          ) : (
            // Full header when at top
            <div className="flex flex-col items-center py-8">
              {/* Logo */}
              <div className="flex flex-col items-center space-y-2 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-300 to-sage-400 rounded-full flex items-center justify-center">
                    <Mountain className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className="text-3xl tracking-[0.3em] text-slate-700 font-medium"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    RAAHI
                  </span>
                </div>
                <span
                  className="text-sm tracking-wider text-slate-600 font-normal"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  Conscious Travel • Responsible Tourism
                </span>
              </div>

              {/* Navigation Menu */}
              <div className="hidden md:flex items-center space-x-16">
                <a
                  href="#services"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  TOURIST
                </a>
                <a
                  href="#drivers"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  VENDOR
                </a>
                <a
                  href="#about"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  ABOUT
                </a>
                <a
                  href="#help"
                  className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  HELP CENTER
                </a>
                {/* <a href="#booking" className="text-slate-700 hover:text-sage-500 transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  BOOKING
                </a> */}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden absolute top-8 right-6 text-slate-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden w-full bg-white/95 backdrop-blur-md border-t border-stone-200 mt-4">
              <div className="px-6 pt-4 pb-6 space-y-4 text-center">
                <a
                  href="#services"
                  className="block py-3 text-slate-700 hover:text-sage-500 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  TOURIST
                </a>
                <a
                  href="#drivers"
                  className="block py-3 text-slate-700 hover:text-sage-500 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  VENDOR
                </a>
                <a
                  href="#about"
                  className="block py-3 text-slate-700 hover:text-sage-500 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  ABOUT
                </a>
                <a
                  href="#help"
                  className="block py-3 text-slate-700 hover:text-sage-500 text-sm uppercase tracking-[0.2em] font-medium"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  HELP CENTER
                </a>
                {/* <a href="#booking" className="block py-3 text-slate-700 hover:text-sage-500 text-sm uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>BOOKING</a> */}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 1st Block */}
      {/* Hero Section with Slider */}
      <section
        id="home"
        className="relative pt-40 pb-32 bg-gradient-to-br from-sage-50 via-sage-100 to-sage-200 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200/20 to-lavender-200/20 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-12 transform hover:scale-105 transition-all duration-500 border border-white/50">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3
                      className="text-3xl font-light text-slate-700 mb-4"
                      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                    >
                      Quick Booking
                    </h3>
                    <p className="text-slate-500 font-light">
                      Book your safari in 3 simple steps
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-sage-200 to-sage-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-sage-600" />
                      </div>
                      <div>
                        <h4
                          className="font-medium text-slate-700 text-lg"
                          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                        >
                          Choose Destination
                        </h4>
                        <p className="text-sm text-slate-500 font-light">
                          Select your safari location
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-lavender-200 to-lavender-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Car className="w-7 h-7 text-lavender-600" />
                      </div>
                      <div>
                        <h4
                          className="font-medium text-slate-700 text-lg"
                          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                        >
                          Pick Your Jeep
                        </h4>
                        <p className="text-sm text-slate-500 font-light">
                          Choose from available vehicles
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-peach-200 to-peach-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-7 h-7 text-peach-600" />
                      </div>
                      <div>
                        <h4
                          className="font-medium text-slate-700 text-lg"
                          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                        >
                          Enjoy Safari
                        </h4>
                        <p className="text-sm text-slate-500 font-light">
                          Experience the adventure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Airplane window image */}
            <div className="relative flex justify-center items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-300/30 to-lavender-300/30 rounded-full blur-3xl transform scale-110"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  {/* Replace this div with your image */}
                  <img
                    src="images/image.png"
                    alt="RAAHI Travel - Your journey starts here"
                    className="w-96 h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                  {/* Alternative: If you don't have the image file yet, you can use this placeholder */}
                  {/*
                  <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-500">
                    <div className="text-center text-blue-800">
                      <div className="text-6xl font-bold mb-4" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>R</div>
                      <p className="text-lg">Your Journey Begins</p>
                    </div>
                  </div>
                  */}
                </div>
              </div>
            </div>

            {/* <div className="space-y-12 transform transition-all duration-1000">
              <div className="space-y-8">
                <div className="inline-block">
                  <span className="text-xs uppercase tracking-[0.3em] text-sage-500 font-light bg-sage-100 px-6 py-3 rounded-full" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-medium text-slate-800 leading-tight tracking-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                    <span key={i} className={word === 'Adventure' || word === 'Handcrafted' || word === 'Uniquely' ? 'text-sage-600 italic' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                
                <p className="text-xl text-slate-700 leading-relaxed font-medium max-w-lg">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group bg-gradient-to-r from-sage-400 to-sage-500 text-white px-12 py-5 rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-500 hover:shadow-lg flex items-center justify-center space-x-3 text-lg font-medium" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  <Car className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">{heroSlides[currentSlide].buttonText}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-sage-500" />
                  <span className="font-medium">10,000+ Happy Travelers</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-sage-400 w-10' : 'bg-stone-300 hover:bg-sage-300 w-3'
              }`}
            />
          ))}
        </div> */}
      </section>

      {/* 2nd Block */}
      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span
              className="text-xs uppercase tracking-[0.3em] text-sage-600 font-medium bg-sage-100 px-8 py-4 rounded-full shadow-sm"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Our Services
            </span>
            <h2
              className="text-6xl font-medium text-slate-800 mt-12 mb-8 leading-tight"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Comprehensive Tourism{" "}
              <span className="italic text-sage-600">Solutions</span>
            </h2>
            <p className="text-xl text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
              Thoughtfully designed services for conscious travelers who value
              authentic experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-10 rounded-3xl transition-all duration-500 hover:transform hover:scale-105 ${
                  service.featured
                    ? "bg-gradient-to-br from-sage-300 to-sage-400 text-white shadow-2xl"
                    : "bg-white hover:shadow-xl border border-stone-200"
                }`}
              >
                {service.featured && (
                  <div
                    className="absolute -top-4 -right-4 bg-peach-300 text-slate-700 px-5 py-2 rounded-full text-xs font-medium shadow-lg tracking-wide"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    Featured
                  </div>
                )}

                <div
                  className={`w-18 h-18 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
                    service.featured
                      ? "bg-white/20"
                      : "bg-gradient-to-br from-sage-100 to-sage-200 group-hover:from-sage-200 group-hover:to-sage-300"
                  }`}
                >
                  <service.icon
                    className={`w-9 h-9 transition-transform duration-300 group-hover:scale-110 ${
                      service.featured ? "text-white" : "text-sage-500"
                    }`}
                  />
                </div>

                <h3
                  className={`text-2xl font-light mb-6 tracking-wide ${
                    service.featured ? "text-white" : "text-slate-700"
                  }`}
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  {service.title}
                </h3>

                <p
                  className={`mb-8 font-light leading-relaxed ${
                    service.featured ? "text-white/90" : "text-slate-500"
                  }`}
                >
                  {service.description}
                </p>

                <div
                  className={`inline-flex px-5 py-2 rounded-full text-xs font-light tracking-wide ${
                    service.status === "Available Now"
                      ? service.featured
                        ? "bg-white/20 text-white"
                        : "bg-green-100 text-green-600"
                      : service.featured
                      ? "bg-white/20 text-white"
                      : "bg-stone-100 text-slate-500"
                  }`}
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  {service.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3rd Block */}
      {/* Values Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span
              className="text-xs uppercase tracking-[0.3em] text-sage-600 font-medium bg-sage-100 px-8 py-4 rounded-full shadow-sm"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Our Values
            </span>
            <h2
              className="text-6xl font-medium text-slate-800 mt-12 mb-8 leading-tight"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Our <span className="italic text-sage-600">Philosophy</span>
            </h2>
            <p
              className="text-3xl text-sage-600 font-medium mb-8 italic tracking-wide"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              "Conscious Travel • Responsible Tourism"
            </p>
            <p className="text-xl text-slate-700 font-medium max-w-5xl mx-auto leading-relaxed">
              At RAAHI, we believe in creating meaningful travel experiences
              that benefit both travelers and local communities while preserving
              our natural heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-sage-200 to-sage-300 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:from-sage-400 group-hover:to-sage-500 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <value.icon className="w-12 h-12 text-sage-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-2xl font-medium text-slate-800 mb-4 tracking-wide"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Block */}
      {/* Driver Section */}
      <section
        id="drivers"
        className="py-32"
        style={{ backgroundColor: "#efbb9f" }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span
                className="text-xs uppercase tracking-[0.3em] text-slate-700 font-medium bg-white/20 px-8 py-4 rounded-full"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                For Drivers
              </span>
              <h2
                className="text-6xl font-medium text-slate-800 mt-12 mb-12 leading-tight tracking-tight"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Join Our Driver{" "}
                <span className="italic text-slate-700">Community</span>
              </h2>
              <p className="text-xl text-slate-700 mb-12 leading-relaxed font-medium">
                Are you a safari jeep owner or driver? Join RAAHI's community
                and connect with travelers while earning income through our
                platform.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-6 group">
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </div>
                  <span className="text-slate-700 font-medium text-lg">
                    Fair compensation
                  </span>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </div>
                  <span className="text-slate-700 font-medium text-lg">
                    24/7 support
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  className="bg-white text-slate-700 px-10 py-5 rounded-full hover:bg-stone-100 transition-all duration-300 flex items-center justify-center space-x-3 font-medium text-lg hover:shadow-lg tracking-wide"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Driver App</span>
                </button>
                <button
                  className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-slate-700 transition-all duration-300 flex items-center justify-center space-x-3 font-medium text-lg tracking-wide"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  <Users className="w-5 h-5" />
                  <span>Join Community</span>
                </button>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-12 border border-white/30">
              <h3
                className="text-3xl font-medium text-slate-800 mb-10 tracking-wide"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Driver Benefits
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <h4
                      className="text-slate-700 font-semibold text-lg tracking-wide mb-2"
                      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                    >
                      Insurance Coverage
                    </h4>
                    <p className="text-slate-600 font-medium">
                      Comprehensive coverage for peace of mind
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <h4
                      className="text-slate-700 font-semibold text-lg tracking-wide mb-2"
                      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                    >
                      Easy Management
                    </h4>
                    <p className="text-slate-600 font-medium">
                      Manage bookings through our elegant mobile app
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white/30 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <h4
                      className="text-slate-700 font-semibold text-lg tracking-wide mb-2"
                      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                    >
                      Community Support
                    </h4>
                    <p className="text-slate-600 font-medium">
                      Join a network of passionate drivers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Block */}
      {/* Minimal & Simple Design Section */}
      <section className="py-32 bg-peach-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-5xl mx-auto">
            <h2
              className="text-6xl font-medium text-slate-800 mb-12 leading-tight tracking-tight"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Minimal & Simple{" "}
              <span className="italic text-sage-600">Design</span>
            </h2>
            <p className="text-2xl text-slate-700 font-medium leading-relaxed mb-16 italic">
              "RAAHI was the best travel platform I ever used. The safari
              booking really helped us explore Sri Lanka's natural beauty."
            </p>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <p className="text-slate-600 font-medium italic mb-6 text-lg hover:text-slate-800 transition-colors duration-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p
                    className="text-sage-600 font-semibold tracking-wide"
                    style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                  >
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6th block */}
      {/* Blog Section */}
      <section id="help" className="py-32 bg-peach-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span
              className="text-xs uppercase tracking-[0.3em] text-sage-600 font-medium bg-white px-8 py-4 rounded-full shadow-sm"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Read Our Blog
            </span>
            <h2
              className="text-6xl font-medium text-slate-800 mt-12 mb-8 leading-tight"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Travel <span className="italic text-sage-600">Inspiration</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-sage-200 to-sage-300 rounded-3xl h-80 mb-8 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center overflow-hidden">
                <Mountain className="w-20 h-20 text-sage-600 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span
                className="text-xs text-sage-600 font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Adventure
              </span>
              <h3
                className="text-3xl font-medium text-slate-800 mb-4 group-hover:text-sage-600 transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Thinking Of A Safari
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Discover the beauty of Sri Lankan wildlife and plan your perfect
                safari adventure with our expert recommendations.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-sage-200 to-sage-300 rounded-3xl h-80 mb-8 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center overflow-hidden">
                <Heart className="w-20 h-20 text-sage-600 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span
                className="text-xs text-sage-600 font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Experience
              </span>
              <h3
                className="text-3xl font-medium text-slate-800 mb-4 group-hover:text-sage-600 transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Perfect Travel Planning
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Learn how to plan the perfect eco-friendly safari experience
                that respects local wildlife and communities.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-sage-200 to-sage-300 rounded-3xl h-80 mb-8 group-hover:shadow-xl transition-all duration-500 flex items-center justify-center overflow-hidden">
                <Leaf className="w-20 h-20 text-sage-600 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span
                className="text-xs text-sage-600 font-medium uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Sustainable
              </span>
              <h3
                className="text-3xl font-medium text-slate-800 mb-4 group-hover:text-sage-600 transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Responsible Tourism Ideas
              </h3>
              <p className="text-slate-700 font-medium leading-relaxed">
                Explore sustainable tourism practices and learn how to travel
                responsibly while supporting local economies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section id="booking" className="py-32 bg-sage-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.3em] text-sage-600 font-medium bg-white px-8 py-4 rounded-full shadow-sm" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              How It Works
            </span>
            <h2 className="text-6xl font-medium text-slate-800 mt-12 mb-8 leading-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              Simple Steps to Your Next <span className="italic text-sage-600">Adventure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="relative mb-12">
                <div className="w-28 h-28 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <MapPin className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 font-bold shadow-lg" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  1
                </div>
              </div>
              <h3 className="text-3xl font-medium text-slate-800 mb-6 tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>Choose Location</h3>
              <p className="text-slate-700 font-medium leading-relaxed text-lg">Select your desired safari destination from our carefully curated locations</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-12">
                <div className="w-28 h-28 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Smartphone className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 font-bold shadow-lg" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  2
                </div>
              </div>
              <h3 className="text-3xl font-medium text-slate-800 mb-6 tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>Book Online</h3>
              <p className="text-slate-700 font-medium leading-relaxed text-lg">Use our elegant web platform to book your safari jeep instantly</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-12">
                <div className="w-28 h-28 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Mountain className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 font-bold shadow-lg" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
                  3
                </div>
              </div>
              <h3 className="text-3xl font-medium text-slate-800 mb-6 tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>Enjoy Safari</h3>
              <p className="text-slate-700 font-medium leading-relaxed text-lg">Meet your driver and embark on an unforgettable safari adventure</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-32 bg-gradient-to-br from-sage-400 to-sage-500">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-6xl font-medium text-white mb-12 leading-tight tracking-tight" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            Ready for Your Next <span className="italic">Adventure?</span>
          </h2>
          <p className="text-xl text-sage-100 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Join thousands of travelers who trust RAAHI for their safari experiences. 
            Book now and discover the beauty of responsible tourism.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-sage-600 px-12 py-5 rounded-full hover:bg-stone-100 transition-all duration-500 hover:shadow-xl flex items-center justify-center space-x-3 text-lg font-medium tracking-wide" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              <Car className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Book Safari Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-10">
                <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center">
                  <Mountain className="w-7 h-7 text-white" />
                </div>
                <span
                  className="text-2xl font-medium tracking-[0.2em]"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  RAAHI
                </span>
              </div>
              <p className="text-slate-300 font-medium leading-relaxed mb-6">
                Your trusted partner for conscious travel and responsible
                tourism experiences.
              </p>
            </div>

            <div>
              <h3
                className="text-xl font-medium mb-8 text-white tracking-wide"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Services
              </h3>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Safari Jeep Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Car Rentals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Tour Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Personal Concierge
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-xl font-medium mb-8 text-white tracking-wide"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Support
              </h3>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Driver Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Safety
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-xl font-medium mb-8 text-white tracking-wide"
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              >
                Company
              </h3>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sage-400 transition-colors duration-300"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-16 pt-12 text-center text-slate-300 font-medium">
            <p>
              &copy; 2025 RAAHI. All rights reserved. Built with care for
              conscious travelers.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Source+Sans+Pro:wght@300;400;600&display=swap");

        .sage-50 {
          background-color: #f0f4f1;
        }
        .sage-100 {
          background-color: #e1ebe3;
        }
        .sage-200 {
          background-color: #c3d7c7;
        }
        .sage-300 {
          background-color: #a5c3ab;
        }
        .sage-400 {
          background-color: #87af8f;
        }
        .sage-500 {
          background-color: #699b73;
        }
        .sage-600 {
          background-color: #547c5c;
        }

        .lavender-50 {
          background-color: #f4f2f7;
        }
        .lavender-100 {
          background-color: #e9e5ef;
        }
        .lavender-200 {
          background-color: #d3cbdf;
        }
        .lavender-300 {
          background-color: #bdb1cf;
        }
        .lavender-400 {
          background-color: #a797bf;
        }
        .lavender-500 {
          background-color: #917daf;
        }
        .lavender-600 {
          background-color: #74648c;
        }

        .peach-50 {
          background-color: #fdf6f3;
        }
        .peach-100 {
          background-color: #fbeee7;
        }
        .peach-200 {
          background-color: #f7ddcf;
        }
        .peach-300 {
          background-color: #f3ccb7;
        }
        .peach-400 {
          background-color: #efbb9f;
        }
        .peach-500 {
          background-color: #ebaa87;
        }
        .peach-600 {
          background-color: #bc886c;
        }

        .text-sage-300 {
          color: #a5c3ab;
        }
        .text-sage-400 {
          color: #87af8f;
        }
        .text-sage-500 {
          color: #699b73;
        }
        .text-sage-600 {
          color: #547c5c;
        }

        .text-lavender-300 {
          color: #bdb1cf;
        }
        .text-lavender-400 {
          color: #a797bf;
        }
        .text-lavender-500 {
          color: #917daf;
        }
        .text-lavender-600 {
          color: #74648c;
        }

        .text-peach-300 {
          color: #f3ccb7;
        }
        .text-peach-400 {
          color: #efbb9f;
        }
        .text-peach-500 {
          color: #ebaa87;
        }
        .text-peach-600 {
          color: #bc886c;
        }

        .bg-sage-300 {
          background-color: #a5c3ab;
        }
        .bg-sage-400 {
          background-color: #87af8f;
        }
        .bg-sage-500 {
          background-color: #699b73;
        }

        .bg-lavender-300 {
          background-color: #bdb1cf;
        }
        .bg-lavender-400 {
          background-color: #a797bf;
        }

        .bg-peach-300 {
          background-color: #f3ccb7;
        }
        .bg-peach-400 {
          background-color: #efbb9f;
        }

        .from-sage-300 {
          --tw-gradient-from: #a5c3ab;
        }
        .to-sage-400 {
          --tw-gradient-to: #87af8f;
        }
        .from-sage-400 {
          --tw-gradient-from: #87af8f;
        }
        .to-sage-500 {
          --tw-gradient-to: #699b73;
        }

        .from-lavender-300 {
          --tw-gradient-from: #bdb1cf;
        }
        .to-lavender-400 {
          --tw-gradient-to: #a797bf;
        }

        .from-peach-300 {
          --tw-gradient-from: #f3ccb7;
        }
        .to-peach-400 {
          --tw-gradient-to: #efbb9f;
        }
      `}</style>
    </div>
  );
}

export default App;
