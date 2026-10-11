import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, ArrowRight, ShieldCheck, FileCheck, Layers } from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/materials')({
  component: MaterialsPage,
})

function MaterialsPage() {
  const { openInquiry } = useInquiry()

  const materialsList = [
    {
      name: 'Grey Cast Iron',
      grades: 'GG20, GG25, GG30 · EN-GJL-200, EN-GJL-250, EN-GJL-300',
      desc: 'Outstanding damping capacity, high compressive strength, and excellent thermal conductivity. Ideal for machine bases, engine cylinder blocks, pump housings, and brake discs.',
      img: '/assets/Ductile-Iron.webp',
    },
    {
      name: 'Ductile Iron (SG Iron)',
      grades: 'GGG40, GGG50, GGG60, GGG70 · EN-GJS-400-15, EN-GJS-500-7',
      desc: 'Nodular graphite provides high tensile strength, elongation, and shock resistance approaching that of carbon steel. Used in automotive suspension components, hydraulic valves, and crankshafts.',
      img: '/assets/Ductile-Iron.webp',
    },
    {
      name: 'Steel Casting',
      grades: 'GS-C25, WCB, WCC, LCC, 1.0619',
      desc: 'Weldable carbon steel castings for pressure equipment, valve bodies, and structural machinery requiring high ductility and field weldability.',
      img: '/assets/casting-2.webp',
    },
    {
      name: 'Special Steel Casting',
      grades: '1.4408, 1.4308, CF8, CF8M, CF3M (Stainless Steel Castings)',
      desc: 'Austenitic stainless steels providing superior corrosion resistance against acids, chemical flows, and marine atmospheric conditions.',
      img: '/assets/casting-2.webp',
    },
    {
      name: 'Duplex and Super Duplex',
      grades: '1.4462 (2205 Duplex), 1.4410 (2507 Super Duplex), CD4MCu',
      desc: 'Exceptional resistance to pitting, crevice corrosion, and stress corrosion cracking in aggressive chloride environments. High mechanical yield strength.',
      img: '/assets/Duplex-and-Super-Duplex.webp',
    },
    {
      name: 'Cast Aluminum',
      grades: 'AlSi10Mg, AlSi7Mg, AlSi9Cu3, ADC12, A356, A380',
      desc: 'High strength-to-weight ratio, excellent thermal conductivity, and ease of machining for automotive housings, electronic enclosures, and aerospace brackets.',
      img: '/assets/Cast-Aluminum.webp',
    },
    {
      name: 'Gunmetal (Bronze)',
      grades: 'RG5, RG7, CuSn5Zn5Pb5, CuSn10, CuSn12',
      desc: 'Heavy-duty bearing bronze with low friction coefficients, superior anti-seize characteristics, and saltwater resistance for marine bushings and pump impellers.',
      img: '/assets/Brass.webp',
    },
    {
      name: 'Brass',
      grades: 'CuZn39Pb3 (CW614N), CuZn40Pb2, High Tensile Brass',
      desc: 'Excellent hot formability, precision machinability, and aesthetic finish for fluid fittings, electrical terminals, and gas control valves.',
      img: '/assets/Brass.webp',
    },
    {
      name: 'Nickel-Based Super Alloys',
      grades: 'Inconel 625, Inconel 718, Hastelloy C-276, Monel 400',
      desc: 'Maintains extreme mechanical strength, creep resistance, and chemical stability under severe high temperatures (up to 1,000°C) and corrosive media.',
      img: '/assets/Nickel-Based-Super-Alloys.webp',
    },
    {
      name: 'Other Materials',
      grades: 'Copper Alloys, Tool Steels, Custom Client Specifications',
      desc: 'We readily accommodate non-standard proprietary chemistry specifications, custom micro-alloying, and specialized European and American standards upon request.',
      img: '/assets/Other-Materials.webp',
    },
  ]

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/Nickel-Based-Super-Alloys.webp"
            alt="Materials Overview"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
            Metallurgy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 max-w-3xl leading-tight">
            Overview of Our Materials
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            From conventional grey iron to exotic nickel-based super alloys — supplied with 3.1 Mill Test Certificates and full metallurgical traceability.
          </p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#0f131f] ethan-heading-underline-center">
              Comprehensive Range of Alloys & Grades
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              We melt, forge, and machine to DIN, EN, ASTM, ASME, BS, and JIS international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialsList.map((mat, idx) => (
              <div
                key={idx}
                className="bg-[#fcfdfe] rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 bg-gray-900 overflow-hidden">
                    <img
                      src={mat.img}
                      alt={mat.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-white text-base font-bold drop-shadow-sm">
                        {mat.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="bg-gray-50 border border-gray-200 p-2 rounded">
                      <span className="text-[11px] font-mono text-gray-700 font-bold block">
                        {mat.grades}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {mat.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => openInquiry(mat.name)}
                    className="w-full ethan-btn-primary py-2 text-xs"
                  >
                    Inquire for {mat.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Strip */}
      <section className="py-16 bg-[#f7f9fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center mx-auto md:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0f131f]">Chemical Composition</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Optical emission spectrometry ensures exact chemistry percentages for carbon, sulfur, silicon, chrome, and nickel.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center mx-auto md:mx-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0f131f]">Mechanical Properties</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Universal testing machines for yield strength, tensile strength, elongation, reduction of area, and Charpy impact tests.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center mx-auto md:mx-0">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0f131f]">Microstructure & NDT</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Nodularity checks for ductile iron, grain size analysis, ultrasonic testing (UT), and magnetic particle inspection (MPI).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0f131f] text-white text-center border-t-4 border-[#31a400]">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need a Specific Alloy Grade or Material Equivalence?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Contact our metallurgy team. We confirm cross-standard equivalence between European (EN/DIN), US (ASTM/AISI), and Indian (IS) standards.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openInquiry('Materials')}
              className="ethan-btn-primary"
            >
              Request Material RFQ
            </button>
            <Link to="/contact-us" className="ethan-btn-outline">
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
