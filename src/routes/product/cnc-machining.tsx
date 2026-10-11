import { createFileRoute, Link } from '@tanstack/react-router'
import { Cpu, CheckCircle2 } from 'lucide-react'
import { useInquiry } from '../../context/InquiryContext'

export const Route = createFileRoute('/product/cnc-machining')({
  component: ProductCNCPage,
})

function ProductCNCPage() {
  const { openInquiry } = useInquiry()

  const machines = [
    { name: '5-Axis & 4-Axis VMC Machining', desc: 'Simultaneous 5-axis machining for complex turbine impellers, multi-port valve blocks, and aero-structural parts.' },
    { name: 'High-Precision CNC Turning Centers', desc: 'Twin-spindle, multi-turret CNC lathes with live tooling for complete one-setup turning and milling.' },
    { name: 'Surface & Cylindrical Grinding', desc: 'Centerless and surface grinding lines producing tight diameter tolerances and micro-finishes.' },
    { name: 'Dedicated Cleanroom CMM Inspection', desc: 'Zeiss and Mitutoyo Coordinate Measuring Machines ensuring 100% compliance with geometric dimensioning & tolerancing (GD&T).' },
  ]

  return (
    <div className="bg-white">
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/cnc-machining-1.webp" alt="CNC Machining" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">Product Category</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
            Precision CNC Machining
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl">
            Micron-precision turning, milling, and grinding for high-consequence industrial, automotive, and flow control applications.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl font-extrabold text-[#0f131f] ethan-heading-underline">
                Tolerances Down to ±0.005 mm
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Whether finishing cast and forged blanks or machining directly from solid billets and bar stock, our Rajkot machining facilities are equipped with Japanese and German high-precision machinery.
              </p>
              <div className="space-y-3 pt-2">
                {machines.map((m, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded border border-gray-200">
                    <h4 className="text-xs font-bold text-[#0f131f]">{m.name}</h4>
                    <p className="text-[11px] text-gray-600 mt-1">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => openInquiry('CNC Machining')}
                  className="ethan-btn-primary"
                >
                  Request Machining RFQ
                </button>
                <Link to="/products" className="ethan-btn-primary bg-gray-800 border-gray-800">
                  Back to All Products
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-xl">
                <img
                  src="/assets/cnc-machining-1.webp"
                  alt="CNC Machining Center"
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
