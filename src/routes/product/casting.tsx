import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, ArrowRight, Layers, FileCheck, ShieldCheck } from 'lucide-react'
import { useInquiry } from '../../context/InquiryContext'

export const Route = createFileRoute('/product/casting')({
  component: ProductCastingPage,
})

function ProductCastingPage() {
  const { openInquiry } = useInquiry()

  const methods = [
    { name: 'Sand Casting', desc: 'Resin & green sand for small to heavy parts up to 5,000 kg.' },
    { name: 'Investment Casting (Lost Wax)', desc: 'Near net-shape parts with high surface finish and tight tolerances.' },
    { name: 'Pressure Die Casting (HPDC)', desc: 'High-volume aluminium and zinc parts with complex internal cavities.' },
    { name: 'Gravity Die Casting (GDC)', desc: 'Permanent mould aluminium parts with dense grain structure.' },
    { name: 'Centrifugal Casting', desc: 'Symmetrical cylindrical tubes, bushings, and liners.' },
    { name: 'Shell Moulding', desc: 'Superior dimensional precision for hydraulic valves and engine cores.' },
  ]

  return (
    <div className="bg-white">
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/casting-2.webp" alt="Casting" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">Product Category</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
            Precision Casting Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl">
            Custom engineered castings in Grey Iron, Ductile Iron, Carbon Steel, Stainless Steel, and Non-Ferrous Alloys. Sourced from certified Rajkot foundries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl font-extrabold text-[#0f131f] ethan-heading-underline">
                End-to-End Casting Capabilities
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                From pattern tooling and 3D simulation to melting, heat treatment, proof machining, and final CMM inspection, Ethan Industries coordinates the entire casting cycle.
              </p>
              <div className="space-y-3 pt-2">
                {methods.map((m, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded border border-gray-200">
                    <h4 className="text-xs font-bold text-[#0f131f]">{m.name}</h4>
                    <p className="text-[11px] text-gray-600">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => openInquiry('Casting')}
                  className="ethan-btn-primary"
                >
                  Request Casting RFQ
                </button>
                <Link to="/products" className="ethan-btn-primary bg-gray-800 border-gray-800">
                  Back to All Products
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-xl">
                <img
                  src="/assets/casting-2.webp"
                  alt="Foundry"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
