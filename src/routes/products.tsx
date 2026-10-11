import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Hammer, 
  Cpu, 
  Scale, 
  Package, 
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/products')({
  component: ProductsPage,
})

function ProductsPage() {
  const { openInquiry } = useInquiry()

  const castingMethods = [
    {
      method: 'Sand Casting',
      use: 'Medium to large, lower complexity parts. Cost-effective tooling.',
    },
    {
      method: 'Lost Wax (Investment Casting)',
      use: 'High accuracy, complex geometries, thin walls. Excellent surface finish.',
    },
    {
      method: 'Pressure Die Casting (HPDC)',
      use: 'High-volume, tight tolerance, non-ferrous materials.',
    },
    {
      method: 'Gravity Die Casting',
      use: 'Non-ferrous materials, better surface finish than sand, lower tooling cost than HPDC.',
    },
    {
      method: 'Centrifugal Casting',
      use: 'Cylindrical parts — pipes, rings, bushings with superior density.',
    },
    {
      method: 'Shell Moulding',
      use: 'Better dimensional accuracy than green sand, smoother finish for core components.',
    },
  ]

  const forgingMethods = [
    {
      method: 'Open Die Forging',
      spec: '50 kg – 4,000 kg',
    },
    {
      method: 'Closed Die Forging',
      spec: '0.05 kg – 350 kg',
    },
    {
      method: 'Ring-Rolled Forging',
      spec: 'Height up to 600 mm · OD up to 3,000 mm',
    },
    {
      method: 'Press & Drop Forging',
      spec: 'Precision dies with tight parting-line tolerances',
    },
  ]

  const cncCapabilities = [
    { title: 'CNC Turning & Mill-Turn', desc: 'Dia up to 800 mm, length up to 2,000 mm with driven tooling.' },
    { title: '3, 4 & 5-Axis VMC Milling', desc: 'Complex contouring, multi-sided machining with high repeatability.' },
    { title: 'Grinding & Honing', desc: 'Cylindrical, centerless, and surface grinding achieving Ra < 0.4 µm.' },
    { title: 'Tolerances', desc: 'Down to ±0.005 mm with 100% CMM inspection and full PPAP level 3 documentation.' },
  ]

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/casting-2.webp"
            alt="Products"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
            Manufacturing Scope
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 max-w-4xl leading-tight">
            Precision-Engineered Components. Made in India. Delivered to International Standards.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Three product categories. One qualified partner. Full scope from raw castings and forgings to finished, assembled components.
          </p>
        </div>
      </section>

      {/* Materials & Supply Conditions Bar */}
      <section className="py-12 bg-[#f7f9fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                Materials Scope
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>Ferrous:</strong> Grey Cast Iron · Ductile Iron (SG Iron) · Carbon Steel · Alloy Steel · Stainless Steel (304, 316, Duplex, Super Duplex)
              </p>
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong>Non-Ferrous:</strong> Aluminium alloys · Copper · Bronze · Brass · Nickel-Based Super Alloys
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                Supply Conditions
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Every component can be delivered at any stage of completion:
              </p>
              <div className="flex flex-wrap gap-2 text-xs pt-1">
                <span className="bg-white border border-gray-200 px-2.5 py-1 rounded font-medium text-gray-800">Raw Casting / Forging</span>
                <span className="bg-white border border-gray-200 px-2.5 py-1 rounded font-medium text-gray-800">Proof / Pre-Machined</span>
                <span className="bg-white border border-gray-200 px-2.5 py-1 rounded font-medium text-gray-800">Fully Finished CNC Machined</span>
                <span className="bg-white border border-gray-200 px-2.5 py-1 rounded font-medium text-gray-800">Surface Coated & Assembled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. CASTING SOLUTIONS */}
      <section id="casting" className="py-20 bg-white border-b border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/assets/casting-2.webp"
                  alt="Casting Solutions"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#31a400] flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> Category 01
                </span>
                <h2 className="text-3xl font-extrabold text-[#0f131f] mt-1">
                  Casting Solutions
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Ethan Industries provides end-to-end custom casting solutions — from pattern making and moulding through heat treatment and finishing — for ferrous and non-ferrous metals across a wide range of industries.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Casting Methods & Capabilities:
                </h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#31a400] text-white font-bold">
                      <tr>
                        <th className="p-3 w-1/3">Method</th>
                        <th className="p-3">Typical Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {castingMethods.map((cm, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                          <td className="p-3 font-bold text-gray-900">{cm.method}</td>
                          <td className="p-3 text-gray-600">{cm.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => openInquiry('Casting')}
                  className="ethan-btn-primary text-xs"
                >
                  Request Casting RFQ
                </button>
                <span className="text-xs text-gray-500">Weight range: 0.05 kg – 5,000 kg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORGING CAPABILITIES */}
      <section id="forging" className="py-20 bg-[#f7f9fa] border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 lg:order-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#31a400] flex items-center gap-1.5">
                  <Hammer className="w-4 h-4" /> Category 02
                </span>
                <h2 className="text-3xl font-extrabold text-[#0f131f] mt-1">
                  Forging Capabilities
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Ethan Industries is a trusted supply chain partner for high-performance forged components — delivering precision-engineered solutions from raw forgings through to fully machined, ready-to-assemble parts.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Hot Forging Specifications:
                </h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#31a400] text-white font-bold">
                      <tr>
                        <th className="p-3 w-1/3">Method</th>
                        <th className="p-3">Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {forgingMethods.map((fm, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                          <td className="p-3 font-bold text-gray-900">{fm.method}</td>
                          <td className="p-3 text-gray-600">{fm.spec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => openInquiry('Forging')}
                  className="ethan-btn-primary text-xs"
                >
                  Request Forging RFQ
                </button>
                <span className="text-xs text-gray-500">Weight range: 0.05 kg – 4,000 kg</span>
              </div>
            </div>

            <div className="lg:col-span-5 lg:order-2">
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/assets/forging-1.webp"
                  alt="Forging Capabilities"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRECISION CNC MACHINING */}
      <section id="cnc-machining" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/assets/cnc-machining-1.webp"
                  alt="CNC Machining"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#31a400] flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> Category 03
                </span>
                <h2 className="text-3xl font-extrabold text-[#0f131f] mt-1">
                  Precision CNC Machining
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Our precision machining services cover CNC turning, milling, and grinding — for both small and large batch production. We supply components with tight tolerances, superior surface finishes, and optimised lead times.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cncCapabilities.map((cap, i) => (
                  <div key={i} className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                    <h4 className="text-xs font-bold text-gray-900">{cap.title}</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => openInquiry('CNC Machining')}
                  className="ethan-btn-primary text-xs"
                >
                  Request Machining RFQ
                </button>
                <span className="text-xs text-gray-500">Tolerances down to ±0.005 mm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0f131f] text-white text-center border-t-4 border-[#31a400]">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Specific Part Drawing Ready for Quotation?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Upload your technical 2D drawings or 3D CAD models. Our application engineers will calculate cost, tooling cycle, and lead time.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openInquiry('General')}
              className="ethan-btn-primary"
            >
              Request a Technical Quote
            </button>
            <Link to="/contact-us" className="ethan-btn-outline">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
