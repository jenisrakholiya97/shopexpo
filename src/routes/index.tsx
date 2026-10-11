import { useState, useEffect } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Factory, 
  Users, 
  Clock, 
  Award,
  Compass,
  FileCheck2,
  Sparkles,
  Quote,
  Ship,
  Anchor,
  Globe2,
  Truck,
  Box,
  PackageCheck
} from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { openInquiry } = useInquiry()
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: 'Precision Engineering for Modern Industry.',
      subtitle: 'Castings · Forgings · CNC Machining',
      description: 'Bridging Indian precision manufacturing excellence with European & global quality standards. Sourced, qualified, and delivered.',
      image: '/assets/casting-2.webp',
      cta: 'View Our Products',
      ctaLink: '/products',
    },
    {
      title: 'Global Export Gateway Through Port Mundra.',
      subtitle: 'Direct Container Shipments & Seamless DDP Door Delivery',
      description: 'Zero customs hassle for international OEMs. Certified seaworthy ISPM-15 packaging, EN 10204 3.1 MTC inspection, and direct weekly sailings to Hamburg, Rotterdam, and New York.',
      image: '/assets/All-Processing-Possibilities.webp',
      cta: 'Explore Global Export',
      ctaLink: '/export',
    },
    {
      title: 'One Strategic Partner. Full Manufacturing Scope.',
      subtitle: 'Rajkot Engineering Hub & Germany Representation',
      description: 'From raw castings and forgings to fully finished, ready-to-assemble CNC machined components with micron-level tolerances.',
      image: '/assets/forging-1.webp',
      cta: 'Explore Technologies',
      ctaLink: '/technologies',
    },
    {
      title: 'Custom Engineering & Precision Export Assemblies.',
      subtitle: 'From High-Precision Tooling to Turnkey Ready-to-Install Parts',
      description: 'Complete in-house manufacturing oversight: 3D CAD/CAM engineering, casting & forging production, CNC sub-assembly integration, and 100% pre-shipment CMM inspection.',
      image: '/assets/cnc-machining-1.webp',
      cta: 'Discover Export Capabilities',
      ctaLink: '/services',
    },
  ]

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const services = [
    {
      title: 'Custom Tooling & Pattern Engineering',
      desc: 'Tooling design, 3D CAD/CAM simulation, and casting pattern development engineered for zero-defect serial production.',
      img: '/assets/technical-review.webp',
      href: '/services',
    },
    {
      title: 'Precision Export Casting Production',
      desc: 'Sand, investment, and pressure die casting from 0.05 kg to 5,000 kg in grey iron, ductile iron, carbon steel, and alloys.',
      img: '/assets/casting.webp',
      href: '/services',
    },
    {
      title: 'Heavy & Precision Forgings',
      desc: 'Closed-die, open-die, and rolled ring forgings from 0.05 kg to 4,000 kg with continuous grain-flow metallurgical integrity.',
      img: '/assets/forging-1.webp',
      href: '/services',
    },
    {
      title: 'Tight-Tolerance CNC Machining',
      desc: 'Multi-axis VMC/HMC milling, precision CNC turning down to ±0.005 mm, and ready-to-assemble sub-assembly integration.',
      img: '/assets/cnc-machining-1.webp',
      href: '/services',
    },
    {
      title: 'Quality Metallurgy & EN 10204 3.1 Certification',
      desc: 'Spectrometer chemistry, CMM dimensional reports, ultrasonic/magnetic particle NDT, and 100% heat-number traceability.',
      img: '/assets/quality.webp',
      href: '/services',
    },
    {
      title: 'ISPM-15 Seaworthy Packing & DDP Logistics',
      desc: 'VCI anti-rust barrier packaging, heat-treated wooden crates, direct Mundra Port sailings, and turnkey DDP delivery.',
      img: '/assets/delivery.webp',
      href: '/services',
    },
  ]

  const supplyPillars = [
    {
      name: 'Casting',
      weight: 'Weight range: 0.05 kg – 5,000 kg',
      desc: 'End-to-end custom casting solutions for ferrous and non-ferrous metals across critical applications.',
      processes: [
        'Sand Casting (Resin & Green Sand)',
        'Lost Wax / Investment Casting',
        'Pressure Die Casting (HPDC)',
        'Gravity Die Casting (GDC)',
        'Centrifugal & Shell Moulding',
      ],
      img: '/assets/casting-2.webp',
      href: '/products#casting',
      inquiryType: 'Casting',
    },
    {
      name: 'Forging',
      weight: 'Weight range: 0.05 kg – 4,000 kg',
      desc: 'High-performance forged components with optimal grain flow, high fatigue resistance, and structural integrity.',
      processes: [
        'Open Die Forging (50 kg – 4,000 kg)',
        'Closed Die Forging (0.05 kg – 350 kg)',
        'Roll Forging & Ring-Rolled Rings',
        'Drop Forging & Press Forging',
      ],
      img: '/assets/forging-1.webp',
      href: '/products#forging',
      inquiryType: 'Forging',
    },
    {
      name: 'CNC Machining',
      weight: 'Tolerances down to ±0.005 mm',
      desc: 'Precision CNC turning and milling with multi-axis capabilities for complex, tight-tolerance geometries.',
      processes: [
        '3, 4 & 5-Axis CNC Milling (VMC / HMC)',
        'High-Precision CNC Turning Centers',
        'Surface Grinding & Cylindrical Grinding',
        'Honing, Broaching & CMM Verification',
      ],
      img: '/assets/cnc-machining-1.webp',
      href: '/products#cnc-machining',
      inquiryType: 'CNC Machining',
    },
  ]

  const whyChooseUs = [
    {
      title: 'Engineering Depth, Not Just Order Processing',
      desc: 'Our team reads drawings, understands tolerances, and engages with material specifications. We ask the right questions from the first inquiry through to serial production.',
      icon: Compass,
    },
    {
      title: 'Ethics and Transparency at Every Step',
      desc: 'We operate under ISO 9001 and IATF 16949 international standards. Every manufacturing phase, melt report, and inspection milestone is fully documented and auditable.',
      icon: FileCheck2,
    },
    {
      title: 'Direct Factory Export Pricing & Full Accountability',
      desc: 'Deal directly with the manufacturing source in Rajkot. No trading markups, no communication middlemen — direct engineering collaboration, scheduled production slots, and guaranteed FOB/CIF/DDP deliveries.',
      icon: Factory,
    },
    {
      title: 'Honest Over Optimistic',
      desc: 'We decline inquiries we cannot fulfil. You receive a clear answer — yes or no — before committing any resources. No false promises. No surprises at delivery.',
      icon: ShieldCheck,
    },
    {
      title: 'Single Source, Full Scope',
      desc: 'Castings, forgings, and CNC Machining — all from one integrated manufacturing partner. Eliminate coordination bottlenecks, lower supply chain risk, and ensure single-point quality accountability.',
      icon: Award,
    },
  ]

  const industries = [
    { name: 'Pumps & Valves', img: '/assets/Pumps-Valves.webp' },
    { name: 'Hydraulics', img: '/assets/Hydraulics-1.webp' },
    { name: 'Agricultural Machinery', img: '/assets/Agricultural-Machinery.webp' },
    { name: 'Marine Equipment', img: '/assets/Marine-Equipment.webp' },
    { name: 'Automotive Industry', img: '/assets/Automotive-Industry.webp' },
    { name: 'Construction Machinery', img: '/assets/Construction-Machinery.webp' },
    { name: 'General Engineering', img: '/assets/General-Engineering.webp' },
    { name: 'Medical Technology', img: '/assets/Medical-Technology.webp' },
    { name: 'Food Processing', img: '/assets/Food-Processing.webp' },
  ]

  const certifications = [
    { name: 'Bureau Veritas', code: 'ISO / Marine', desc: 'Quality Audited' },
    { name: 'DNV', img: '/assets/DNV.webp', desc: 'Maritime & Offshore' },
    { name: 'IATF 16949', code: 'Automotive', desc: 'Auto Quality Management' },
    { name: 'ISO 9001 / 14001', code: 'Quality & Eco', desc: 'Certified Management' },
    { name: 'NORSOK Standard', code: 'Oil & Gas', desc: 'Material Qualification' },
    { name: 'PED Certified', code: 'Pressure Equip.', desc: 'EU Directive 2014/68/EU' },
    { name: 'AS9100D', img: '/assets/AS9100D.webp', desc: 'Aerospace Standard' },
    { name: "Lloyd's Register", code: 'Marine & Industrial', desc: 'Approved Manufacturer' },
  ]

  return (
    <div className="bg-white">
      {/* 1. HERO SLIDER */}
      <section className="relative bg-[#0f131f] text-white overflow-hidden min-h-[580px] sm:min-h-[640px] flex items-center">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10 block' : 'opacity-0 z-0 hidden pointer-events-none'
            }`}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.38] scale-105 transition-transform duration-7000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f131f]/95 via-[#0f131f]/80 to-transparent" />
            </div>

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-20">
              <div className="max-w-2xl space-y-4">
                <span className="inline-block py-1 px-3 bg-[#31a400]/20 border border-[#31a400] text-[#31a400] text-xs font-bold uppercase tracking-wider rounded">
                  {slide.subtitle}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold !text-white tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                  {slide.description}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to={slide.ctaLink}
                    className="ethan-btn-primary"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => openInquiry('General')}
                    className="ethan-btn-outline"
                  >
                    Request Technical RFQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'w-8 bg-[#31a400]' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 text-white hover:bg-[#31a400] transition flex items-center justify-center border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 text-white hover:bg-[#31a400] transition flex items-center justify-center border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* 2. GREEN BANNER HIGHLIGHT STRIP */}
      <section className="bg-[#31a400] text-white py-6 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-center sm:text-left">
          <Quote className="w-8 h-8 text-white/40 shrink-0 hidden sm:block" />
          <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white m-0">
            We offer a comprehensive range of <span className="underline decoration-white/60">high-quality materials</span> to meet diverse industry needs.
          </h2>
        </div>
      </section>

      {/* 3. ABOUT ETHAN INDUSTRIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
                About Ethan Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] ethan-heading-underline">
                One Strategic Partner. <br />
                Full Manufacturing Scope.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-gray-600 text-base leading-relaxed">
              <p>
                <strong>Ethan Industries</strong> is a premier manufacturer and international exporter of high-precision metal components based in Rajkot, India, with dedicated technical representation in Germany. We engineer and export heavy-duty castings, forgings, and finished CNC machined parts directly to industrial OEMs across Europe, North America, and worldwide.
              </p>
              <p>
                We operate as your dedicated direct manufacturing and export partner — fully integrated into your global supply chain, strictly adhering to international ASTM/DIN/EN standards, and committed to on-time ocean delivery.
              </p>
              <div className="pt-2">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 font-bold text-[#31a400] hover:text-[#298d00] transition text-sm group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES AT A GLANCE (6 Cards) */}
      <section className="py-20 bg-[#f7f9fa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] ethan-heading-underline-center">
              Our Manufacturing & Export <span className="text-[#31a400]">Capabilities</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Comprehensive manufacturing and export engineering capabilities built to deliver precision products directly to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-bold text-[#31a400] uppercase tracking-wider block mb-0.5">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#31a400] hover:text-[#298d00] transition"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="ethan-btn-primary">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE SUPPLY (Casting, Forging, CNC Machining) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
                Manufacturing Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] ethan-heading-underline mt-1">
                What <span className="text-[#31a400]">We Supply</span>
              </h2>
              <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl">
                From raw castings and forgings to fully machined, ready-to-assemble components with international inspection certificates.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link to="/products" className="ethan-btn-primary">
                <span>View all products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supplyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 bg-gray-900 overflow-hidden">
                  <img
                    src={pillar.img}
                    alt={pillar.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#31a400] text-white text-xs font-bold px-3 py-1 rounded shadow">
                      {pillar.name}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f131f]">{pillar.name}</h3>
                    <p className="text-xs font-semibold text-[#31a400] mt-1 mb-2">
                      {pillar.weight}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {pillar.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-gray-100">
                      {pillar.processes.map((proc, pidx) => (
                        <div key={pidx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#31a400] shrink-0" />
                          <span>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={pillar.href}
                      className="text-xs font-bold text-[#0f131f] hover:text-[#31a400] transition flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => openInquiry(pillar.inquiryType)}
                      className="text-xs font-bold text-[#31a400] hover:underline"
                    >
                      Request RFQ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CORE PILLARS & INFRASTRUCTURE */}
      <section className="py-20 bg-[#f7f9fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left circular Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-[#31a400] p-6 bg-white shadow-xl flex items-center justify-center">
                <span className="font-serif text-8xl sm:text-9xl font-bold text-[#0f131f] select-none tracking-tighter">
                  E
                </span>
                <div className="absolute -bottom-3 bg-[#31a400] text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  Ethan Standards
                </div>
              </div>
            </div>

            {/* Right 4 Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-[#31a400]/10 flex items-center justify-center text-[#31a400] mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f131f]">Quality Control</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Quality Control Department is managed by highly qualified engineers with dimensional, metallurgical, and visual testing protocols.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-[#31a400]/10 flex items-center justify-center text-[#31a400] mb-3">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f131f]">Manufacturing Infrastructure</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our advanced manufacturing facilities and precision foundries are equipped with state-of-the-art technologies and modern machineries in induction furnaces, automated forging presses, and multi-axis CNCs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-[#31a400]/10 flex items-center justify-center text-[#31a400] mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f131f]">Customer Satisfaction</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  At Ethan we care about our customers, we’re efficient, helpful and friendly with proactive communication across all time zones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded bg-[#31a400]/10 flex items-center justify-center text-[#31a400] mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f131f]">Service Commitment</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We strive to fulfill all our commitments on or before our deadlines with weekly tracking updates and milestone logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY EUROPEAN & AMERICAN OEMS CHOOSE US (5 Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] ethan-heading-underline-center mt-2">
              Why European and American OEMs Choose Us
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Built on transparency, German engineering discipline, and deep roots in India’s premier manufacturing capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="bg-[#fcfdfe] p-6 rounded-lg border border-gray-200/80 hover:border-[#31a400] shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-9 h-9 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0f131f] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES WE SERVE (9 Cards) */}
      <section className="py-20 bg-[#0f131f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
                Applications
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Industries <span className="text-[#31a400]">We Serve</span>
              </h2>
              <p className="mt-3 text-gray-400 text-sm max-w-xl">
                Ethan Industries supplies mission-critical metal components to high-consequence industries across the globe.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                to="/application"
                className="ethan-btn-primary"
              >
                <span>View all applications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <Link
                key={idx}
                to="/application"
                className="group relative h-64 rounded-lg overflow-hidden border border-gray-800 shadow-md block"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#31a400] transition">
                    {ind.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#31a400] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GLOBALLY OPERATING FAMILY BUSINESS BANNER */}
      <section className="relative py-24 bg-[#0f131f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/assets/All-Processing-Possibilities.webp"
            alt="Global logistics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f131f] via-[#0f131f]/90 to-[#0f131f]/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
              International Reach
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Global Exporter of <span className="text-[#31a400]">Precision Engineered Products</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Supplying certified industrial metal components from India’s manufacturing capital to leading OEMs across 40+ countries worldwide with multilingual engineering support.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/contact-us" className="ethan-btn-primary">
                Contact Our Team
              </Link>
              <button
                onClick={() => openInquiry('General')}
                className="ethan-btn-outline"
              >
                Inquire Directly
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9B. GLOBAL EXPORT & LOGISTICS INFRASTRUCTURE */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#31a400] flex items-center gap-1.5">
                <Ship className="w-4 h-4" />
                <span>International Supply Chain Powerhouse</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] mt-1">
                Global Export & <span className="text-[#31a400]">DDP Delivery Hub</span>
              </h2>
              <p className="mt-3 text-gray-600 text-sm max-w-2xl">
                Strategically positioned 280 km from Port Mundra — India’s largest commercial deep-sea container terminal. We provide complete hands-free DDP doorstep deliveries directly into European and American manufacturing facilities.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3">
              <Link
                to="/export"
                className="ethan-btn-primary"
              >
                <span>Explore Export Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#31a400] shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#31a400]/10 text-[#31a400] flex items-center justify-center">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0f131f]">Port Mundra (APSEZ) Gateway</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct weekly liner departures from Gujarat’s deep-water port to Hamburg, Rotterdam, Antwerp, Genoa, and New York, avoiding transshipment delays.
              </p>
              <span className="inline-block text-[11px] font-bold text-[#31a400]">280 km from Rajkot Hub →</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#31a400] shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#31a400]/10 text-[#31a400] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0f131f]">DDP Doorstep Delivery</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ethan handles customs clearance, import tariffs, harbor fees, and inland trucking across Europe & North America. Quoted transparently in EUR (€) or USD ($).
              </p>
              <span className="inline-block text-[11px] font-bold text-[#31a400]">Zero Customs Friction →</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#31a400] shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#31a400]/10 text-[#31a400] flex items-center justify-center">
                <PackageCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0f131f]">ISPM-15 Seaworthy Packing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Heat-treated fumigated timber crates, VCI corrosion-inhibitor barrier bags, silica desiccants, and Euro standard pallet sizing for zero-rust ocean transit.
              </p>
              <span className="inline-block text-[11px] font-bold text-[#31a400]">IPPC Wheat Stamp Certified →</span>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#31a400] shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#31a400]/10 text-[#31a400] flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0f131f]">EN 10204 3.1 Traceability</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full spectrometer chemical & mechanical test certificates, CMM balloon inspection reports, Certificate of Origin, and PPAP Level 3 documentation.
              </p>
              <span className="inline-block text-[11px] font-bold text-[#31a400]">100% Auditable Quality →</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. VENDOR CERTIFICATIONS SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f131f] ethan-heading-underline-center mb-4">
            Manufactured & Certified to the Standards <span className="text-[#31a400]">Your Industry Demands</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-12">
            Every export product is manufactured under stringent ISO 9001 and IATF 16949 quality management, 100% heat-number traceability, and EN 10204 3.1 inspection.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 border border-gray-200 rounded-lg bg-gray-50/50 hover:bg-white hover:border-[#31a400] hover:shadow-md transition flex flex-col items-center justify-center space-y-2"
              >
                {cert.img ? (
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#31a400]/10 flex items-center justify-center text-[#31a400] font-bold text-sm">
                    {cert.code || 'ISO'}
                  </div>
                )}
                <h4 className="text-xs font-bold text-[#0f131f]">{cert.name}</h4>
                <span className="text-[11px] text-gray-500">{cert.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA STRIP */}
      <section className="bg-[#0f131f] text-white py-16 border-t-4 border-[#31a400]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Export Precision Engineered Products to Your Facility?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Send us your 2D drawings, 3D STEP models, or annual volume estimates. We provide rapid technical feedback and transparent commercial quotes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => openInquiry('General')}
              className="ethan-btn-primary text-sm px-8"
            >
              Request a Technical Quote
            </button>
            <Link
              to="/contact-us"
              className="ethan-btn-outline text-sm px-8"
            >
              Contact Our Sales Offices
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
