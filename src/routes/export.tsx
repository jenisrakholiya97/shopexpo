import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Ship, 
  Anchor, 
  Truck, 
  Plane, 
  ShieldCheck, 
  FileCheck2, 
  FileText, 
  Globe2, 
  Clock, 
  Box, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  PackageCheck, 
  Building2, 
  BadgeCheck
} from 'lucide-react'
import { useInquiry } from '../context/InquiryContext'

export const Route = createFileRoute('/export')({
  component: ExportPage,
})

function ExportPage() {
  const { openInquiry } = useInquiry()
  const [activeTab, setActiveTab] = useState<'europe' | 'north-america' | 'middle-east' | 'asia'>('europe')
  const [selectedIncoterm, setSelectedIncoterm] = useState<'ddp' | 'cif' | 'fob' | 'exw'>('ddp')

  const shippingLanes = {
    europe: [
      { port: 'Hamburg / Bremerhaven, Germany', seaDays: '20 - 24 days', frequency: 'Weekly Direct', customs: 'EU Customs Cleared (DDP Available)' },
      { port: 'Rotterdam, Netherlands', seaDays: '19 - 23 days', frequency: 'Bi-Weekly Direct', customs: 'EU Central Hub Distribution' },
      { port: 'Antwerp, Belgium', seaDays: '20 - 24 days', frequency: 'Weekly Direct', customs: 'Full Container (FCL) & Groupage (LCL)' },
      { port: 'Genoa / Trieste, Italy', seaDays: '16 - 20 days', frequency: 'Weekly Mediterranean', customs: 'Southern Europe OEM Express' },
      { port: 'Le Havre, France', seaDays: '21 - 25 days', frequency: 'Weekly Direct', customs: 'Inland Trucking to Paris & Lyon' },
      { port: 'Southampton / Felixstowe, UK', seaDays: '22 - 26 days', frequency: 'Weekly Direct', customs: 'UK Customs Clearance Handled' },
    ],
    'north-america': [
      { port: 'New York / New Jersey, USA', seaDays: '26 - 30 days', frequency: 'Weekly Direct', customs: 'US Customs & Border Protection Cleared' },
      { port: 'Savannah / Charleston, USA', seaDays: '28 - 32 days', frequency: 'Weekly Direct', customs: 'Southeast US Manufacturing Corridor' },
      { port: 'Houston, Texas, USA', seaDays: '30 - 34 days', frequency: 'Weekly Gulf Express', customs: 'Oil & Gas / Heavy Industrial Hub' },
      { port: 'Los Angeles / Long Beach, USA', seaDays: '32 - 36 days', frequency: 'Weekly Trans-Pacific', customs: 'West Coast Distribution' },
      { port: 'Montreal / Vancouver, Canada', seaDays: '30 - 35 days', frequency: 'Bi-Weekly', customs: 'CBSA Compliance Documented' },
    ],
    'middle-east': [
      { port: 'Jebel Ali / Dubai, UAE', seaDays: '3 - 5 days', frequency: '3x Weekly Direct', customs: 'GCC Common Customs Tariff' },
      { port: 'Dammam / Jeddah, Saudi Arabia', seaDays: '5 - 8 days', frequency: '2x Weekly Direct', customs: 'SABER & SASO Certified' },
      { port: 'Hamad, Qatar', seaDays: '4 - 6 days', frequency: 'Weekly Direct', customs: 'GCC Industrial Clearance' },
      { port: 'Sohar / Muscat, Oman', seaDays: '3 - 5 days', frequency: 'Weekly Direct', customs: 'Direct Coastal Transit' },
    ],
    asia: [
      { port: 'Singapore Hub', seaDays: '9 - 12 days', frequency: 'Weekly Direct', customs: 'Southeast Asia Gateway' },
      { port: 'Port Klang, Malaysia', seaDays: '10 - 13 days', frequency: 'Weekly Direct', customs: 'ASEAN Tariff Documentation' },
      { port: 'Yokohama / Tokyo, Japan', seaDays: '18 - 22 days', frequency: 'Weekly Direct', customs: 'JIS & Precision Inspection Verified' },
      { port: 'Busan, South Korea', seaDays: '17 - 21 days', frequency: 'Weekly Direct', customs: 'Heavy Engineering OEM Lanes' },
    ],
  }

  const incotermDetails = {
    ddp: {
      code: 'DDP',
      title: 'Delivered Duty Paid (Doorstep to Warehouse)',
      badge: 'Most Popular for European & North American OEMs',
      description: 'Ethan takes 100% responsibility for the entire journey. We manufacture, inspect, package, export from Mundra, ship across oceans, clear customs at destination, pay all import tariffs and harbor fees, and deliver by local truck directly into your warehouse.',
      buyerBenefits: [
        'Zero customs paperwork or import hassle for the buyer',
        'No foreign currency or exchange rate risk — invoice in EUR (€) or USD ($)',
        'Local trucking directly into your facility loading dock',
        'Transparent all-inclusive landed pricing with zero surprise charges',
      ],
      ethanScope: 'Manufacturing + Seaworthy Packing + Freight + Insurance + Port Handling + Import Duty + Customs Clearance + Inland Trucking',
      buyerScope: 'Unloading cargo at your facility',
    },
    cif: {
      code: 'CIF',
      title: 'Cost, Insurance & Freight (To Destination Seaport)',
      badge: 'Ideal for Buyers Handling Destination Customs',
      description: 'Ethan covers all manufacturing, export documentation in India, marine insurance, and ocean freight up to your designated seaport of arrival (e.g., Port of Hamburg or Port of New York).',
      buyerBenefits: [
        'Economical ocean freight rates leveraged by Ethan’s shipping volumes',
        'Full maritime insurance included against loss or damage during transit',
        'Buyer controls local customs clearance and local delivery timing',
        'Full set of original shipping documents (B/L, MTC, COO) dispatched immediately',
      ],
      ethanScope: 'Manufacturing + Seaworthy Packing + Export Clearance + Ocean Freight + Marine Insurance',
      buyerScope: 'Import Customs Clearance + Destination Port Terminal Charges + Inland Delivery',
    },
    fob: {
      code: 'FOB',
      title: 'Free on Board (Mundra Port / Kandla Port)',
      badge: 'Best for OEMs with Global Logistics Contracts',
      description: 'Ethan delivers the packaged goods past the ship’s rail at Port Mundra (Gujarat) and handles all Indian export customs formalities. From the ship onward, the buyer’s freight forwarder takes over.',
      buyerBenefits: [
        'Direct control over carrier selection and shipping contracts',
        'Leverage your global corporate freight agreements',
        'Goods fully export cleared through Indian customs by Ethan',
        'Direct tracking from Mundra port container terminal',
      ],
      ethanScope: 'Manufacturing + Seaworthy Packing + Inland Transport to Mundra Port + Indian Export Customs Clearance + Loading onto Vessel',
      buyerScope: 'Ocean Freight + Marine Insurance + Destination Customs + Local Delivery',
    },
    exw: {
      code: 'EXW',
      title: 'Ex Works (Rajkot Manufacturing Works)',
      badge: 'For Global Buyers with Nominated Freight Forwarders',
      description: 'Ethan makes goods ready and seaworthy packaged at our precision manufacturing hub in Rajkot, Gujarat. The buyer’s nominated forwarder arranges pickup directly from our works.',
      buyerBenefits: [
        'Total visibility of inland and sea transport costs',
        'Flexible collection schedules matching your consolidation containers',
        'Full export documentation and packing lists provided ready for collection',
      ],
      ethanScope: 'Manufacturing + Seaworthy Packing + Handover to Buyer’s Carrier at Rajkot Works',
      buyerScope: 'Pickup from Rajkot + Indian Export Clearance + Ocean Freight + Insurance + Destination Duties',
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0f131f] text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/cnc-precision.webp"
            alt="Global Export Logistics"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f131f] via-[#0f131f]/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#31a400]/20 border border-[#31a400] text-[#31a400] text-xs font-bold uppercase tracking-wider rounded">
              <Ship className="w-3.5 h-3.5" />
              <span>Global Industrial Export Powerhouse</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold !text-white tracking-tight leading-tight">
              Exporting Precision Engineering from India to the World
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Direct container shipments from deep-sea Mundra Port to over 40 countries. We bridge Indian precision casting, forging, and CNC machining with European and American OEM requirements with complete DDP door-to-door execution.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-800">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <span className="block text-2xl lg:text-3xl font-extrabold text-[#31a400]">280 km</span>
                <span className="text-xs text-gray-400">Distance to Deep-Sea Mundra Port</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <span className="block text-2xl lg:text-3xl font-extrabold text-white">40+</span>
                <span className="text-xs text-gray-400">Countries Supplied Worldwide</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <span className="block text-2xl lg:text-3xl font-extrabold text-[#31a400]">DDP</span>
                <span className="text-xs text-gray-400">Doorstep Delivery in EU & USA</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <span className="block text-2xl lg:text-3xl font-extrabold text-white">ISPM-15</span>
                <span className="text-xs text-gray-400">Certified Seaworthy Packaging</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => openInquiry('Export Logistics')}
                className="ethan-btn-primary"
              >
                <span>Request Export Quote (DDP/CIF)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="ethan-btn-outline"
              >
                <span>Explore Manufacturing Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location Advantage: Rajkot to Mundra Port */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31a400]">
                <Anchor className="w-4 h-4" />
                <span>Geographic Export Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] leading-tight">
                Direct Gateway Through Mundra Port — India’s Maritime Giant
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ethan Industries operates from Rajkot, Gujarat — the epicenter of Indian precision engineering. Gujarat is blessed with India’s longest coastline and premier deep-water container terminals:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#31a400]/10 text-[#31a400] flex items-center justify-center shrink-0">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f131f]">Port Mundra (APSEZ) — Only 280 km from Rajkot</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      India’s largest commercial port with dedicated deep-draft berths. Capable of handling post-Panamax container vessels with direct weekly sailings to Rotterdam, Hamburg, Antwerp, and New York.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#31a400]/10 text-[#31a400] flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f131f]">Express 6-Hour Highway Link & Inland Container Depot (ICD)</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Dedicated heavy haulage fleet ensures container stuffing directly at our Rajkot facilities with customs sealing under excise/customs supervision, eliminating port delays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#31a400]/10 text-[#31a400] flex items-center justify-center shrink-0">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f131f]">Air Cargo Express via Ahmedabad & Mumbai</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      For pilot batches, urgent tooling prototypes, and sample testing, direct air freight routes deliver to European and American airports within 3 to 5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0f131f] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe2 className="w-64 h-64 text-[#31a400]" />
              </div>

              <div className="relative space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#31a400] font-bold">Logistics Command Center</span>
                <h3 className="text-2xl font-bold !text-white">Seamless Indian Export Process</h3>
                
                <ol className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#31a400] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="block text-white">Precision Manufacturing & 100% CMM QC</strong>
                      <span className="text-gray-400 text-xs">Components cast, forged, and machined in Rajkot, verified with EN 10204 3.1 MTC.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#31a400] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="block text-white">VCI & Seaworthy ISPM-15 Packaging</strong>
                      <span className="text-gray-400 text-xs">Fumigated wooden boxes with corrosion barrier bags and silica desiccants.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#31a400] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="block text-white">Factory Container Stuffing & Customs Sealing</strong>
                      <span className="text-gray-400 text-xs">Self-sealing and digital tamper-proof e-seals under Indian Customs supervision.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#31a400] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="block text-white">Port Mundra Ocean Departure</strong>
                      <span className="text-gray-400 text-xs">Direct liner vessels (Maersk, MSC, Hapag-Lloyd, CMA CGM) with live satellite tracking.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#31a400] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="block text-white">DDP Customs Clearance & Warehouse Unloading</strong>
                      <span className="text-gray-400 text-xs">Duties cleared, harbor release handled, local truck delivered to your loading bay.</span>
                    </div>
                  </li>
                </ol>

                <div className="pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Authorized Economic Operator (AEO) compliant logistics</span>
                    <BadgeCheck className="w-4 h-4 text-[#31a400]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incoterms 2020 Matrix for International Buyers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#31a400] font-bold">Commercial Clarity</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f]">
              International Incoterms 2020 — Zero Hassle for Buyers
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Whether you want completely hands-free DDP doorstep delivery into your European factory or prefer controlling ocean freight via your corporate forwarder on FOB/CIF terms, Ethan provides transparent, legally binding contracts.
            </p>
          </div>

          {/* Interactive Incoterm Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['ddp', 'cif', 'fob', 'exw'] as const).map((term) => (
              <button
                key={term}
                onClick={() => setSelectedIncoterm(term)}
                className={`px-5 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider transition ${
                  selectedIncoterm === term
                    ? 'bg-[#31a400] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Incoterm {incotermDetails[term].code}
              </button>
            ))}
          </div>

          {/* Active Incoterm Detail Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
              <div>
                <span className="text-xs font-bold text-[#31a400] uppercase tracking-wider block">
                  {incotermDetails[selectedIncoterm].badge}
                </span>
                <h3 className="text-2xl font-bold text-[#0f131f] mt-1">
                  {incotermDetails[selectedIncoterm].title}
                </h3>
              </div>
              <div className="px-4 py-2 bg-white rounded border border-gray-200 font-mono text-xl font-bold text-[#31a400]">
                {incotermDetails[selectedIncoterm].code}
              </div>
            </div>

            <p className="py-6 text-gray-700 leading-relaxed text-base">
              {incotermDetails[selectedIncoterm].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
              <div>
                <h4 className="text-sm font-bold text-[#0f131f] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#31a400]" />
                  <span>Key OEM Buyer Benefits</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {incotermDetails[selectedIncoterm].buyerBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#31a400] font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 bg-white p-4 rounded-lg border border-gray-200 text-xs">
                <div>
                  <strong className="block text-gray-900 font-semibold mb-1 uppercase tracking-wider">
                    Ethan Industries Scope:
                  </strong>
                  <p className="text-gray-600 leading-relaxed">
                    {incotermDetails[selectedIncoterm].ethanScope}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <strong className="block text-gray-900 font-semibold mb-1 uppercase tracking-wider">
                    Buyer Scope:
                  </strong>
                  <p className="text-gray-600 leading-relaxed">
                    {incotermDetails[selectedIncoterm].buyerScope}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transit Times & Major Shipping Lanes */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#31a400] font-bold">Global Transit Schedule</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f]">
              Direct Ocean Routes & Port-to-Port Transit Times
            </h2>
            <p className="text-gray-600 text-sm">
              Average container transit times departing from Port Mundra container terminals to major industrial centers around the world.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('europe')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeTab === 'europe'
                  ? 'bg-[#0f131f] text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              🇪🇺 Europe & UK (Main Hubs)
            </button>
            <button
              onClick={() => setActiveTab('north-america')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeTab === 'north-america'
                  ? 'bg-[#0f131f] text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              🇺🇸 USA & Canada
            </button>
            <button
              onClick={() => setActiveTab('middle-east')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeTab === 'middle-east'
                  ? 'bg-[#0f131f] text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              🇦🇪 Middle East & GCC
            </button>
            <button
              onClick={() => setActiveTab('asia')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                activeTab === 'asia'
                  ? 'bg-[#0f131f] text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              🇯🇵 Asia-Pacific Hubs
            </button>
          </div>

          {/* Table of Shipping Lanes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0f131f] text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6 font-semibold">Destination Port / Hub</th>
                    <th className="py-4 px-6 font-semibold">Sea Transit Duration</th>
                    <th className="py-4 px-6 font-semibold">Vessel Frequency</th>
                    <th className="py-4 px-6 font-semibold">Customs & Delivery Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {shippingLanes[activeTab].map((lane, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="py-4 px-6 font-bold text-[#0f131f] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#31a400] shrink-0" />
                        <span>{lane.port}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#31a400]/10 text-[#31a400] font-bold text-xs">
                          <Clock className="w-3.5 h-3.5" />
                          {lane.seaDays}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700 font-medium">{lane.frequency}</td>
                      <td className="py-4 px-6 text-gray-500 text-xs">{lane.customs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
              <span>* Sea transit times are port-to-port estimates based on major scheduled carrier sailings from Mundra Port.</span>
              <span className="font-semibold text-gray-700">Air express available for prototypes (3–5 days).</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seaworthy Packaging & Preservation Protocols */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#31a400] font-bold">Zero Rust Guarantee</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f131f] mt-2 mb-6 leading-tight">
                ISPM-15 Certified Seaworthy Packaging & Anti-Corrosion Protection
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Castings and precision machined surfaces face severe atmospheric humidity and salt spray during 30-day ocean voyages. Ethan enforces rigorous industrial preservation protocols so parts arrive in ready-to-assemble condition:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center shrink-0 mt-1 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f131f]">ISPM-15 Heat Treated & Fumigated Timber Crates</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      All wooden pallets and heavy-duty plywood cases are officially heat-treated (56°C for 30 minutes) and stamped with the international IPPC wheat-ear certification emblem for seamless customs entry worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center shrink-0 mt-1 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f131f]">VCI (Volatile Corrosion Inhibitor) Poly Envelopes</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Components are sealed inside heavy-gauge VCI bags with molecular anti-rust vapor emission and industrial silica gel desiccant packs, creating an active barrier against oxidation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center shrink-0 mt-1 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f131f]">Protective Rust Preventive Oil & Phosphate Primer</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Machined bore diameters, threads, and ground mating faces are coated with specialized de-watering anti-rust fluids or manganese phosphate for multi-month transit resistance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded bg-[#31a400]/10 text-[#31a400] flex items-center justify-center shrink-0 mt-1 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f131f]">Euro Standard Pallet Dimensions & Steel Strapping</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Built to standard European pallet sizes (1200 x 800 mm and 1200 x 1000 mm) with corner edge guards, high-tensile steel strapping, and waterproof stretch wrap.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0f131f] flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-[#31a400]" />
                  <span>Packaging Specifications Checklist</span>
                </h3>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <span className="text-gray-500 block">Timber Compliance</span>
                    <strong className="text-gray-900 text-sm font-bold">ISPM-15 IPPC Stamp</strong>
                  </div>
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <span className="text-gray-500 block">Vapor Barrier</span>
                    <strong className="text-gray-900 text-sm font-bold">VCI Poly Bags + Desiccant</strong>
                  </div>
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <span className="text-gray-500 block">Strapping Strength</span>
                    <strong className="text-gray-900 text-sm font-bold">High-Tensile Steel Straps</strong>
                  </div>
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <span className="text-gray-500 block">Pallet Standard</span>
                    <strong className="text-gray-900 text-sm font-bold">Euro Pallet 1200x800mm</strong>
                  </div>
                </div>

                <div className="p-4 bg-[#31a400]/10 border border-[#31a400]/20 rounded-lg text-xs text-gray-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#31a400]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Every export shipment includes:</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-gray-700">
                    <li>Weatherproof exterior barcoded packing slip pouch</li>
                    <li>Individual part marking (punch / laser / cast logo) per drawing</li>
                    <li>Gross & Tare weight markings in kilograms (KG)</li>
                    <li>Center-of-gravity and forklift handling warning symbols</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openInquiry('Custom Packaging')}
                    className="w-full ethan-btn-primary py-3 text-xs"
                  >
                    Specify Your Packaging Standards
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Documentation & Compliance Vault */}
      <section className="py-20 bg-[#0f131f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#31a400] font-bold">Regulatory Rigor</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold !text-white">
              Complete Export Documentation Accompanying Every Shipment
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Customs authorities and your quality department receive full traceability files prior to container arrival. Zero clearance delays, 100% auditable documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#181d2c] border border-gray-800 p-6 rounded-xl hover:border-[#31a400] transition">
              <FileCheck2 className="w-8 h-8 text-[#31a400] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">EN 10204 3.1 & 3.2 Mill Test Certificates (MTC)</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Complete spectrometer chemical composition analysis (C, Si, Mn, Cr, Ni, Mo, etc.) and physical test values (Yield, Tensile, Elongation, Hardness HB/HRC, Charpy V-notch impact).
              </p>
            </div>

            <div className="bg-[#181d2c] border border-gray-800 p-6 rounded-xl hover:border-[#31a400] transition">
              <FileText className="w-8 h-8 text-[#31a400] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">CMM Dimensional Inspection Reports</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Full 2D/3D ballooned engineering drawings with coordinate measuring machine (CMM) data verifying critical geometric dimensioning and tolerancing (GD&T) per DIN/ISO standards.
              </p>
            </div>

            <div className="bg-[#181d2c] border border-gray-800 p-6 rounded-xl hover:border-[#31a400] transition">
              <Building2 className="w-8 h-8 text-[#31a400] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Certificate of Origin (COO & EUR.1 / GSP)</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Chamber of Commerce verified Certificate of Origin establishing legal provenance for preferential tariff treatment and European / US customs compliance.
              </p>
            </div>

            <div className="bg-[#181d2c] border border-gray-800 p-6 rounded-xl hover:border-[#31a400] transition">
              <ShieldCheck className="w-8 h-8 text-[#31a400] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">PPAP Level 3 & First Article Inspection (ISIR)</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Production Part Approval Process documentation, Process Flow Diagrams, Control Plans, FMEA, Measurement System Analysis (MSA), and Capability Studies (Cp/Cpk).
              </p>
            </div>

            <div className="bg-[#181d2c] border border-gray-800 p-6 rounded-xl hover:border-[#31a400] transition">
              <Box className="w-8 h-8 text-[#31a400] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Packing List & Weight Slips</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Detailed itemized crate manifests specifying crate dimensions, net weight, gross weight, pallet serial numbers, and heat numbers for effortless warehouse receipt.
              </p>
            </div>

            <div className="bg-[#181d2c] border border-gray-800 p-6 rounded-xl hover:border-[#31a400] transition">
              <Anchor className="w-8 h-8 text-[#31a400] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Clean Ocean Bill of Lading (B/L)</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Original non-negotiable or negotiable Bill of Lading and Sea Waybills dispatched through international courier (DHL/FedEx) or electronic telex release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Export CTA Strip */}
      <section className="py-16 bg-[#31a400] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Export Precision Engineered Products to Your Facility?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get an all-inclusive DDP or CIF quotation in EUR (€) or USD ($) for your precision castings, forgings, or CNC components. Direct communication with our technical team.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openInquiry('Export Quotation')}
              className="bg-white text-[#0f131f] hover:bg-gray-100 font-bold px-8 py-3 rounded text-sm transition shadow-lg"
            >
              Request International RFQ
            </button>
            <Link
              to="/contact-us"
              className="bg-[#0f131f] text-white hover:bg-black font-bold px-8 py-3 rounded text-sm transition shadow-lg"
            >
              Contact European / India Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
