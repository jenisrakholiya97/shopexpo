import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Hammer, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Microscope 
} from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/technologies')({
  component: TechnologiesPage,
})

function TechnologiesPage() {
  const { openInquiry } = useInquiry()

  const techCategories = [
    {
      group: 'Casting Technologies',
      icon: Flame,
      items: [
        {
          title: 'Sand Casting',
          desc: 'Utilizing green sand and chemically bonded resin sand moulding systems. Ideal for medium to massive components where mechanical strength and cost-effective tooling are key priorities.',
          specs: 'Weight: up to 5,000 kg · Flask sizes up to 3,000 mm · Materials: Grey Iron, SG Iron, Carbon & Alloy Steels',
          img: '/assets/Sand-Casting.webp',
        },
        {
          title: 'Investment Casting (Lost Wax)',
          desc: 'High-precision ceramic shell moulding providing near-net-shape components with superior dimensional accuracy and smooth surface finishes (Ra 3.2 µm). Drastically reduces subsequent machining requirements.',
          specs: 'Weight: 0.05 kg – 120 kg · Tolerances: ISO 8062 CT4-CT6 · Materials: Stainless Steel, Super Alloys, Carbon Steels',
          img: '/assets/investment-casting.webp',
        },
        {
          title: 'Pressure Die Casting (HPDC & LPDC)',
          desc: 'High-speed automated injection into hardened steel dies for thin-walled, geometrically complex aluminum and zinc alloy components with exceptionally high cycle rates.',
          specs: 'Locking forces: 160T – 2,500T · High volume serial production · Materials: AlSi9Cu3, AlSi10Mg, ADC12',
          img: '/assets/pressure-die-casting.webp',
        },
        {
          title: 'Gravity Die Casting (GDC)',
          desc: 'Permanent mould casting where molten metal flows under gravity. Produces denser grain structures, higher mechanical properties, and lower porosity than sand casting.',
          specs: 'Weight: 0.1 kg – 50 kg · Pressure-tight applications · Materials: Aluminium alloys, Copper alloys',
          img: '/assets/Gravity-Casting.webp',
        },
        {
          title: 'Centrifugal Casting',
          desc: 'Rotating permanent moulds utilizing centrifugal force to produce dense, defect-free symmetrical hollow shapes such as cylinder liners, heavy bushings, and rings.',
          specs: 'OD up to 1,200 mm · Length up to 2,500 mm · Materials: Bronze, Ductile Iron, Alloy Steel',
          img: '/assets/Centrifugal-Casting.webp',
        },
      ],
    },
    {
      group: 'Forging Technologies',
      icon: Hammer,
      items: [
        {
          title: 'Open Die Forging',
          desc: 'Forging between flat or simple contoured dies without fully confining the metal. Guarantees sound internal consolidation and continuous grain flow for high-load components.',
          specs: 'Weight: 50 kg – 4,000 kg · Shafts up to 6,000 mm length · Materials: Carbon, Alloy, Stainless Steels',
          img: '/assets/Open-Die-Forging.webp',
        },
        {
          title: 'Closed Die Forging (Drop & Press)',
          desc: 'Precision impression dies in hammer and hydraulic press lines. Delivers optimal strength-to-weight ratios for automotive, agricultural, and industrial drive-train parts.',
          specs: 'Weight: 0.05 kg – 350 kg · Press capacity up to 6,300T · High repeatability across serial batches',
          img: '/assets/Closed-Die-Forging.webp',
        },
        {
          title: 'Ring-Rolled Forging',
          desc: 'Seamless forged rolled rings with continuous circumferential grain flow, providing unmatched resistance to impact, fatigue, and burst pressures.',
          specs: 'Outside Diameter up to 3,000 mm · Face height up to 600 mm · Flanges, bearing rings, gear blanks',
          img: '/assets/Roll-Forging.webp',
        },
      ],
    },
    {
      group: 'Precision Machining & Quality Tech',
      icon: Cpu,
      items: [
        {
          title: 'CNC Turning & Multi-Axis Milling',
          desc: 'Advanced CNC turning centers with live tooling, and 3-axis, 4-axis, and 5-axis vertical & horizontal machining centers (VMC/HMC).',
          specs: 'Positional accuracy: ±0.005 mm · CMM inspection with full 3D point cloud reports · In-process probing',
          img: '/assets/cnc-machining-2.webp',
        },
      ],
    },
  ]

  const materials = [
    { title: 'Grey Cast Iron', grades: 'EN-GJL-150 / 200 / 250 / 300 (GG15 - GG30)', desc: 'Excellent vibration dampening and machinability for housings, gearboxes, and pulleys.' },
    { title: 'Ductile / SG Iron', grades: 'EN-GJS-400 / 500 / 600 / 700 (GGG40 - GGG70)', desc: 'High tensile strength, impact toughness, and elongation for safety-critical components.' },
    { title: 'Carbon & Alloy Steels', grades: 'C45, 42CrMo4, 16MnCr5, 20MnCr5, 34CrNiMo6', desc: 'Case-hardening and quenched & tempered steels for gears, shafts, and heavy machinery.' },
    { title: 'Stainless Steels', grades: 'AISI 304, 316, 316L, 1.4408, 1.4404, 1.4462 (Duplex)', desc: 'Corrosion-resistant grades for chemical, food, marine, and pump & valve applications.' },
    { title: 'Non-Ferrous Alloys', grades: 'AlSi10Mg, AlSi7Mg, Bronze (RG7, CuSn12), Brass', desc: 'Lightweight and bearing alloys with excellent thermal and anti-friction properties.' },
    { title: 'Super Alloys', grades: 'Inconel 625/718, Hastelloy C276, Monel 400', desc: 'Extreme temperature, high-pressure, and severe chemical environment compatibility.' },
  ]

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/cnc-machining-2.webp"
            alt="Technologies"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
            Manufacturing Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 max-w-4xl leading-tight">
            The Technologies Behind Every Component We Supply
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            State-of-the-art foundry facilities, computerized forging presses, and multi-axis CNC machining centers operated to international standards.
          </p>
        </div>
      </section>

      {/* Technologies Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {techCategories.map((cat, cidx) => {
            const GroupIcon = cat.icon
            return (
              <div key={cidx} className="space-y-10">
                <div className="border-b border-gray-200 pb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f131f]">
                    {cat.group}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#fcfdfe] rounded-lg overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-48 overflow-hidden bg-gray-900 relative">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5 space-y-2">
                          <h3 className="text-lg font-bold text-[#0f131f]">{item.title}</h3>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                          <div className="pt-2">
                            <span className="text-[11px] font-semibold text-[#31a400] block bg-[#31a400]/10 p-2 rounded border border-[#31a400]/20">
                              {item.specs}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <button
                          onClick={() => openInquiry(item.title)}
                          className="w-full ethan-btn-primary py-2 text-xs"
                        >
                          Inquire for {item.title}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Materials We Work With */}
      <section className="py-20 bg-[#f7f9fa] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
              Metallurgy Scope
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f131f] ethan-heading-underline-center mt-1">
              Materials We Work With
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              All raw materials sourced with verified 3.1 mill test certificates and full heat traceability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((mat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-2 hover:border-[#31a400] transition"
              >
                <span className="text-xs font-bold text-[#31a400] uppercase tracking-wider">
                  Material Group 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#0f131f]">{mat.title}</h3>
                <p className="text-xs font-semibold text-gray-800 bg-gray-50 p-1.5 rounded border border-gray-100 font-mono">
                  {mat.grades}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed pt-1">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/materials" className="ethan-btn-primary">
              <span>View Comprehensive Materials Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f131f] text-white text-center border-t-4 border-[#31a400]">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need Guidance on the Best Manufacturing Process for Your Part?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Our metallurgists and manufacturing engineers evaluate casting vs. forging vs. machining from bar stock to optimize your part cost and durability.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openInquiry('Process Consulting')}
              className="ethan-btn-primary"
            >
              Consult an Application Engineer
            </button>
            <Link to="/contact-us" className="ethan-btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
