import { createFileRoute, Link } from '@tanstack/react-router'
import { Hammer, CheckCircle2 } from 'lucide-react'
import { useInquiry } from '../../context/InquiryContext'

export const Route = createFileRoute('/product/forging')({
  component: ProductForgingPage,
})

function ProductForgingPage() {
  const { openInquiry } = useInquiry()

  const methods = [
    { name: 'Open Die Forging', spec: '50 kg – 4,000 kg', desc: 'Shafts, cylinders, discs, and blocks forged with superior structural density.' },
    { name: 'Closed Die Forging', spec: '0.05 kg – 350 kg', desc: 'Drop and press forging with precision dies for automotive and machinery components.' },
    { name: 'Ring-Rolled Forging', spec: 'OD up to 3,000 mm', desc: 'Seamless rolled rings for bearing races, flanges, and heavy gear blanks.' },
  ]

  return (
    <div className="bg-white">
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/forging-1.webp" alt="Forging" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">Product Category</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
            Forging Capabilities & Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl">
            High-strength hot forged components engineered for maximum fatigue resistance, grain flow alignment, and critical mechanical loads.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl font-extrabold text-[#0f131f] ethan-heading-underline">
                High-Performance Hot Forging
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utilizing state-of-the-art closed die hammer lines, hydraulic presses up to 6,300T, and automated induction heating to achieve exact tolerances and zero defect metallographic integrity.
              </p>
              <div className="space-y-3 pt-2">
                {methods.map((m, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded border border-gray-200">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-[#0f131f]">{m.name}</h4>
                      <span className="text-[11px] font-bold text-[#31a400]">{m.spec}</span>
                    </div>
                    <p className="text-[11px] text-gray-600 mt-1">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => openInquiry('Forging')}
                  className="ethan-btn-primary"
                >
                  Request Forging RFQ
                </button>
                <Link to="/products" className="ethan-btn-primary bg-gray-800 border-gray-800">
                  Back to All Products
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-xl">
                <img
                  src="/assets/forging-1.webp"
                  alt="Forging Line"
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
