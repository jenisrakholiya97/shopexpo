import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  CheckCircle2, 
  Wrench, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  ArrowRight,
  FileCheck2,
  Anchor
} from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

function ServicesPage() {
  const { openInquiry } = useInquiry()

  const exportCapabilitiesList = [
    {
      title: 'Custom Tooling, CAD/CAM & Pattern Engineering',
      subtitle: 'Optimized tooling and mold engineering for zero-defect serial export production.',
      desc: 'Every precision export component begins with rigorous engineering. Our technical team designs and develops custom casting patterns, core boxes, forging dies, and CNC fixture setups directly from your 2D engineering drawings and 3D CAD/STEP models.',
      highlights: [
        'Precision 3D CAD/CAM model reviews & DFM manufacturability optimization',
        'Custom pattern manufacturing (Alloy, Cast Iron, Wood) & forging die tooling',
        'Tooling life management and dimensional repeatability monitoring',
        'Rapid prototype sample development with First Article Inspection (FAIR/ISIR)',
      ],
      img: '/assets/technical-review.webp',
      icon: Wrench,
    },
    {
      title: 'Precision Export Casting Production',
      subtitle: 'High-integrity ferrous and non-ferrous casting products for global OEMs.',
      desc: 'We manufacture and export custom castings ranging from 0.05 kg to 5,000 kg. Utilizing green sand, resin sand, investment (lost-wax), centrifugal, and pressure die casting methods to supply ready-to-use parts to international industries.',
      highlights: [
        'Sand casting, lost-wax investment casting & high-pressure die casting',
        'Weight range: 0.05 kg to 5,000 kg single-piece casting capacity',
        'Ferrous & non-ferrous alloys: Grey Iron, SGI, Carbon/Alloy Steel, Stainless, Bronze',
        'Strict conformance with ASTM, EN, DIN, BS, and JIS international standards',
      ],
      img: '/assets/casting.webp',
      icon: Layers,
    },
    {
      title: 'Heavy & Precision Forging Production',
      subtitle: 'Optimal grain flow, superior tensile density, and severe service durability.',
      desc: 'Our forging facilities produce open die forgings, closed die forgings, and seamless rolled rings engineered for extreme pressure, cyclic fatigue, and high-wear environments in global pump, valve, marine, and heavy engineering sectors.',
      highlights: [
        'Closed die forging (0.05 kg – 350 kg) & Open die forging (up to 4,000 kg)',
        'Seamless rolled rings up to 2,500 mm outer diameter',
        'Continuous grain flow orientation for maximized fatigue and tensile strength',
        'Controlled heat treatment: Normalizing, Annealing, Quenching & Tempering',
      ],
      img: '/assets/forging.webp',
      icon: ShieldCheck,
    },
    {
      title: 'CNC Machining & Ready-to-Assemble Sub-Assemblies',
      subtitle: 'Sub-micron precision with advanced 4-axis and 5-axis machining centers.',
      desc: 'We do not export rough castings or forgings that burden your production lines. We supply fully CNC turned, milled, drilled, and ground components machined to tolerances down to ±0.005 mm, complete with surface treatment and sub-assembly.',
      highlights: [
        '3, 4 & 5-Axis CNC vertical and horizontal machining centers (VMC/HMC)',
        'High-precision CNC turning, boring, threading, and cylindrical grinding',
        'Surface treatments: Zinc plating, Electroless Nickel, Phosphating, Painting',
        'Complete CMM coordinate inspection reports with 100% ballooned drawings',
      ],
      img: '/assets/cnc-machining.webp',
      icon: Sparkles,
    },
    {
      title: 'Quality Control, Metallurgy & EN 10204 3.1 Certification',
      subtitle: '100% material traceability and certified testing accompanying every export lot.',
      desc: 'Every exported production lot is tested in our metallurgical and physical testing laboratory. We provide chemical spectrometer analysis, mechanical tensile and impact testing, and non-destructive examination (UT, MPI, RT) with EN 10204 3.1 Mill Test Certificates.',
      highlights: [
        'Chemical composition verification via 32-channel optical emission spectrometers',
        'Mechanical tensile, yield, elongation, and Charpy V-notch impact testing',
        'Hydrostatic pressure testing for valve bodies and pressure-retaining casings',
        'Certified EN 10204 3.1 & 3.2 inspection documentation provided with every container',
      ],
      img: '/assets/quality.webp',
      icon: FileCheck2,
    },
    {
      title: 'Seaworthy ISPM-15 Packaging & DDP Export Logistics',
      subtitle: 'Zero-rust guarantee and direct Port Mundra deep-sea container sailings.',
      desc: 'All exported components are preserved with VCI anti-corrosion barrier wrapping, packed inside ISPM-15 certified heat-treated timber crates, and shipped via direct container lines from Port Mundra with full DDP door delivery into European and US factories.',
      highlights: [
        'VCI molecular rust-preventive wrapping, silica desiccants & anti-rust oils',
        'ISPM-15 heat-treated fumigated seaworthy wooden boxes with IPPC wheat stamp',
        'Direct ocean container lines from Port Mundra (280 km) to European & US ports',
        'Complete export documentation: Certificate of Origin (COO), MTC, B/L, Commercial Invoice',
      ],
      img: '/assets/delivery.webp',
      icon: Truck,
    },
  ]

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/All-Processing-Possibilities.webp"
            alt="Export Manufacturing Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
            Export Manufacturing & Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 max-w-3xl leading-tight">
            Complete Export Manufacturing: Castings, Forgings & Precision CNC Machining.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Direct precision manufacturing and international export from our industrial hub in Rajkot, India to OEM assembly lines across Europe, North America, and worldwide.
          </p>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {exportCapabilitiesList.map((srv, idx) => {
            const Icon = srv.icon
            const isReversed = idx % 2 === 1
            return (
              <div
                key={idx}
                id={`capability-${idx}`}
                className="scroll-mt-24 border-b border-gray-100 pb-20 last:border-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31a400]">
                      <Icon className="w-4 h-4" />
                      <span>Export Capability {String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f131f]">
                      {srv.title}
                    </h2>
                    <p className="text-sm font-semibold text-[#31a400]">
                      {srv.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {srv.desc}
                    </p>
                    <div className="space-y-2 pt-2">
                      {srv.highlights.map((h, hidx) => (
                        <div key={hidx} className="flex items-start gap-2.5 text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#31a400] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => openInquiry(srv.title)}
                        className="ethan-btn-primary text-xs"
                      >
                        Request Quote for This Product Line
                      </button>
                      {srv.title.includes('Logistics') && (
                        <Link
                          to="/export"
                          className="ethan-btn-outline text-xs"
                        >
                          Explore Global Export Hub & Transit Times →
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
                      <img
                        src={srv.img}
                        alt={srv.title}
                        className="w-full h-72 sm:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0f131f] text-white text-center border-t-4 border-[#31a400]">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need an Export Quotation for Your Component Drawings?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Our engineering team reviews your drawings, tolerances, and batch sizes and provides transparent factory-direct DDP or CIF export pricing within 48 hours.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openInquiry('Drawing Review')}
              className="ethan-btn-primary"
            >
              Submit Drawings for Export RFQ
            </button>
            <Link to="/contact-us" className="ethan-btn-outline">
              Contact International Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
