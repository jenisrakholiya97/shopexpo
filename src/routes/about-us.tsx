import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  Award, 
  ArrowRight, 
  Building2, 
  Globe2, 
  Clock 
} from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/about-us')({
  component: AboutUsPage,
})

function AboutUsPage() {
  const { openInquiry } = useInquiry()

  const values = [
    {
      title: 'Excellence',
      desc: 'A commitment to delivering performance that consistently surpasses expectations. We do not accept "good enough" — in manufacturing precision, in metallurgical integrity, or in export delivery.',
      icon: Award,
    },
    {
      title: 'Integrity',
      desc: 'The highest ethical standards in every interaction. We are honest about what we can and cannot do. We document everything. We do not make commitments we cannot keep.',
      icon: ShieldCheck,
    },
    {
      title: 'Agility & Responsiveness',
      desc: 'Decisions are made promptly, with consideration for all stakeholders. We respond fast, adapt to change, and do not let process become an obstacle.',
      icon: Zap,
    },
    {
      title: 'Continuous Improvement',
      desc: 'We constantly drive to enhance our processes, tighten quality results, and improve efficiency at every stage of the supply chain — ours and yours.',
      icon: RefreshCw,
    },
    {
      title: 'Proactive Innovation',
      desc: 'We take a proactive approach to developing new engineering solutions — in casting metallurgy, precision machining tooling, and export delivery efficiency.',
      icon: Target,
    },
  ]

  const workflowSteps = [
    {
      step: '01',
      title: 'Direct Alignment & Drawing Review',
      desc: 'We start with a direct conversation to understand your application, expectations, and way of working. Once aligned, you share your drawings, specifications, or initial requirements for detailed review.',
    },
    {
      step: '02',
      title: '48-Hour Feasibility Response',
      desc: 'Within 48 hours we give you a clear answer. If we can supply to your requirements, we tell you how. If we cannot, we tell you that too. No false leads.',
    },
    {
      step: '03',
      title: 'Tooling Engineering & Foundry / Forge Setup',
      desc: 'Our engineering team designs custom pattern equipment, forging dies, and CNC fixture setups tailored to exact component tolerances and material metallurgy.',
    },
    {
      step: '04',
      title: 'Tooling, Sampling & PPAP Approval',
      desc: 'We manage tooling development, first article samples, and inspection reporting (ISIR/PPAP). You approve at each stage before serial production begins.',
    },
    {
      step: '05',
      title: 'On-Ground Quality Inspection',
      desc: 'Our on-ground team monitors production, conducts pre-shipment inspection, and manages documentation — Certificates, test reports, packing lists, certificates of conformance.',
    },
    {
      step: '06',
      title: 'Global Freight & Door Delivery',
      desc: 'We manage export logistics from our facility to your door — sea freight, air freight, or courier — with full documentation and customs clearance support.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/All-Processing-Possibilities.webp"
            alt="About Ethan"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
            About Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 max-w-3xl leading-tight">
            Built on One Conviction: India Can Deliver International Quality.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Headquartered in Rajkot, India. Represented in Germany. Purpose-built to be the engineering and supply chain partner European and American OEMs rarely find.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#f7f9fa] p-8 rounded-lg border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded bg-[#31a400]/10 flex items-center justify-center text-[#31a400]">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#0f131f]">Our Mission</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build a seamless, world-class supply chain platform that bridges communication, distance, and cultural gaps between Indian manufacturing and international companies.
              </p>
            </div>

            <div className="bg-[#f7f9fa] p-8 rounded-lg border border-gray-200 space-y-4">
              <div className="w-12 h-12 rounded bg-[#31a400]/10 flex items-center justify-center text-[#31a400]">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#0f131f]">Our Vision</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Established to meet the growing demand for a reliable, integrated global supply chain partner — one that holds itself to the same standards it promises to buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Background */}
      <section className="py-16 bg-[#f7f9fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
                Our Roots
              </span>
              <h2 className="text-3xl font-extrabold text-[#0f131f] ethan-heading-underline">
                Why Rajkot? The Precision Heart of India.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rajkot is recognized across the world as one of the densest industrial manufacturing clusters for precision casting, closed die forging, engine parts, and CNC machining. 
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Situated in Rajkot with direct deep-sea highway access to Port Mundra, Ethan Industries combines advanced casting foundries, heavy forging lines, and high-precision CNC machining with dedicated German representation to deliver zero-friction cross-border product export.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-3 text-xs font-bold text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#31a400]" />
                  <span>Rajkot Operations Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#31a400]" />
                  <span>Germany Sales & Technical Rep</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#31a400]" />
                  <span>ISO 9001 / IATF 16949 Certified Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#31a400]" />
                  <span>End-to-End Export Logistics</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="/assets/cnc-machining-2.webp"
                  alt="Precision Machining"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-lg">Rajkot · Germany · Worldwide</p>
                  <p className="text-xs text-gray-300">Precision components engineered to international standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For (Core Values) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] ethan-heading-underline-center mt-1">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="bg-[#fcfdfe] p-6 rounded-lg border border-gray-200/80 hover:border-[#31a400] shadow-sm hover:shadow-md transition space-y-3"
                >
                  <div className="w-10 h-10 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f131f]">{val.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We Work (Step-by-step workflow) */}
      <section className="py-20 bg-[#0f131f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
              Operational Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              How We Work
            </h2>
            <p className="mt-3 text-gray-400 text-sm">
              From first technical drawings through to continuous serialized deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                className="bg-[#181d2c] border border-gray-800 p-6 rounded-lg space-y-3 relative hover:border-[#31a400] transition"
              >
                <span className="text-3xl font-extrabold text-[#31a400]/40 font-mono">
                  {wf.step}
                </span>
                <h3 className="text-base font-bold text-white">{wf.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f131f]">
            Ready to Partner for Precision Product Export?
          </h2>
          <p className="text-gray-600 text-sm">
            Contact us today for 2D/3D drawing evaluation, export quotations (DDP/CIF), and material feasibility reports.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openInquiry('General')}
              className="ethan-btn-primary"
            >
              Request a Technical Quote
            </button>
            <Link to="/contact-us" className="ethan-btn-primary bg-[#0f131f] hover:bg-black border-[#0f131f]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
