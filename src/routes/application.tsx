import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  ArrowRight, 
  CheckCircle2, 
  Droplet, 
  Tractor, 
  Anchor, 
  Car, 
  HardHat, 
  Settings, 
  Stethoscope, 
  UtensilsCrossed,
  Layers
} from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/application')({
  component: ApplicationPage,
})

function ApplicationPage() {
  const { openInquiry } = useInquiry()

  const applications = [
    {
      title: 'Pumps & Valves',
      desc: 'One of our most active areas. We supply castings, forgings, and machined components for industrial flow control — including valve bodies, bonnet castings, end caps, flanges, pump casings, and impellers.',
      materials: 'CF8M (316 SS), CF8 (304 SS), WCB (Carbon Steel), Bronze, Ductile Iron, Brass',
      parts: 'Gate valve bodies, globe valve bodies, check valves, ball valve bodies, butterfly discs, pump impellers, weld-neck & blind flanges.',
      critical: 'Pressure tightness, defect-free radiographic quality, zero porosity, tight sealing faces.',
      img: '/assets/Pumps-Valves.webp',
      icon: Droplet,
    },
    {
      title: 'Hydraulic Equipment',
      desc: 'We supply precision castings and machined components for hydraulic systems — including manifold blocks, valve housings, cylinder end caps, and hydraulic fittings.',
      materials: 'Ductile Iron (EN-GJS-400/500), Carbon Steel, Stainless Steel, Aluminium alloys',
      parts: 'Hydraulic manifold blocks, cylinder heads, rod eyes, piston bodies, directional valve spools, hydraulic line connectors.',
      critical: 'Pressure-tight castings up to 350+ bar, micron tolerances on valve bores, fine micro-finishes (Ra < 0.4 µm).',
      img: '/assets/Hydraulics-1.webp',
      icon: Layers,
    },
    {
      title: 'Agricultural Machinery',
      desc: 'Ethan supplies structural castings and forgings for agricultural equipment OEMs — gearbox components, housings, bracket castings, implement fittings, and wear parts.',
      materials: 'Grey Cast Iron, Ductile Iron, Forged Carbon Steel, Aluminium alloys',
      parts: 'Transmission housings, axle brackets, hitch components, harrow discs, furrow points, tillage blades, gear blanks.',
      critical: 'High impact toughness, fatigue resistance against severe field vibration, cost-competitive serial batches.',
      img: '/assets/Agricultural-Machinery.webp',
      icon: Tractor,
    },
    {
      title: 'Marine Equipment',
      desc: 'Corrosion-resistant components for propulsion, steering, hull fittings, and deck machinery with certified marine classification society traceability.',
      materials: 'Duplex 2205, Super Duplex 2507, Marine Grade 316L, Aluminium Bronze, Gunmetal',
      parts: 'Propeller hubs, marine valve bodies, rudder brackets, deck bollards, sea chest strainers, winch gears.',
      critical: 'Saltwater pitting resistance (PREN > 40 for Super Duplex), DNV & Bureau Veritas certification.',
      img: '/assets/Marine-Equipment.webp',
      icon: Anchor,
    },
    {
      title: 'Automotive & Transmission',
      desc: 'Engine, transmission, suspension, and steering components manufactured under IATF 16949 quality guidelines for tier-1 suppliers and OEMs.',
      materials: 'Forged Alloy Steels (16MnCr5, 20MnCr5), SG Iron, High-Pressure Die Cast Aluminium',
      parts: 'Connecting rods, steering knuckles, control arms, differential cages, flywheel rings, turbocharger housings.',
      critical: 'Zero PPM defect target, full PPAP Level 3 documentation, automated eddy current and ultrasonic testing.',
      img: '/assets/Automotive-Industry.webp',
      icon: Car,
    },
    {
      title: 'Construction Machinery',
      desc: 'Heavy-duty wear-resistant castings and hot forgings for excavators, earthmovers, road rollers, and concrete pumping equipment.',
      materials: 'High-Strength Low-Alloy (HSLA) Steels, Quenched & Tempered 42CrMo4, Austempered Ductile Iron (ADI)',
      parts: 'Bucket teeth adapters, track rollers, hydraulic breaker cylinders, boom pivot pins, slew ring blanks.',
      critical: 'High yield strength, severe abrasive wear resistance, deep case hardening.',
      img: '/assets/Construction-Machinery.webp',
      icon: HardHat,
    },
    {
      title: 'General Engineering',
      desc: 'Custom engineered parts for industrial machinery, packaging equipment, power transmission, and automation systems.',
      materials: 'Grey Iron (GG25), Ductile Iron (GGG50), Mild Steel, Tool Steels, Brass',
      parts: 'Pulleys, flywheels, bearing housings (plummer blocks), motor brackets, guide rails, custom machine frames.',
      critical: 'Dimensional accuracy, static and dynamic balancing, rapid prototyping to serial turnaround.',
      img: '/assets/General-Engineering.webp',
      icon: Settings,
    },
    {
      title: 'Medical Technology',
      desc: 'Precision investment cast and micro-machined stainless components for surgical beds, diagnostics, and dental apparatus.',
      materials: 'AISI 316L / 1.4404, Medical-grade Stainless Steels, Titanium Alloys',
      parts: 'Articulated arm joints, surgical table actuators, diagnostic device mounts, precision guide rings.',
      critical: 'Biocompatibility, electro-polished finishes, Ra < 0.2 µm, cleanroom packaging compatibility.',
      img: '/assets/Medical-Technology.webp',
      icon: Stethoscope,
    },
    {
      title: 'Food Processing Machinery',
      desc: 'Sanitary grade stainless steel castings and machined fittings for dairy, beverage, baking, and pharmaceutical food lines.',
      materials: 'Food-grade AISI 304, 316, 316L, 1.4408, Bronze',
      parts: 'Homogenizer blocks, pump casings, mixer paddles, sanitary tri-clamp fittings, filling valve nozzles.',
      critical: 'Crevice-free hygienic surface finish, electro-polished surfaces, FDA / EHEDG compliance.',
      img: '/assets/Food-Processing.webp',
      icon: UtensilsCrossed,
    },
  ]

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/Pumps-Valves.webp"
            alt="Applications"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
            Market Focus
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 max-w-4xl leading-tight">
            Engineering Components for the Industries That Keep the World Running.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            From valve bodies to gearbox housings, pump casings to marine equipment — wherever precision components are critical, Ethan delivers.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] ethan-heading-underline-center">
              Our 9 Core Industrial Sectors
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Supplying precision castings, forgings, and machined components to international industrial manufacturers across Europe, America, and worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, idx) => {
              const Icon = app.icon
              return (
                <div
                  key={idx}
                  className="bg-[#fcfdfe] rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 bg-gray-900 overflow-hidden">
                      <img
                        src={app.img}
                        alt={app.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-3 left-3 bg-[#0f131f]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1.5 border border-white/20">
                        <Icon className="w-3.5 h-3.5 text-[#31a400]" />
                        <span>{app.title}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-bold text-[#0f131f]">{app.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{app.desc}</p>
                      
                      <div className="space-y-1.5 pt-2 text-[11px] border-t border-gray-100">
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Materials:</strong> {app.materials}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-gray-900">Key Parts:</strong> {app.parts}
                        </p>
                        <p className="text-gray-700">
                          <strong className="text-[#31a400]">Critical Demands:</strong> {app.critical}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => openInquiry(app.title)}
                      className="w-full ethan-btn-primary py-2 text-xs"
                    >
                      Inquire for {app.title}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0f131f] text-white text-center border-t-4 border-[#31a400]">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Specialized Manufacturing Partner for Your Sector?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Contact our engineering sales team with your specifications. We match your application with certified Rajkot foundries and precision machining units.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openInquiry('General')}
              className="ethan-btn-primary"
            >
              Request a Technical RFQ
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
