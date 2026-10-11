import { useState } from 'react'
import { X, CheckCircle, Upload, Send, Building, Mail, Phone, User, FileText } from 'lucide-react'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
  defaultProduct?: string
}

export default function InquiryModal({ isOpen, onClose, defaultProduct = '' }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    destinationCountry: 'Germany',
    destinationPortOrCity: '',
    incoterm: 'DDP (Doorstep Delivery)',
    currency: 'EUR (€)',
    product: defaultProduct || 'Casting',
    material: 'Grey Cast Iron',
    quantity: '',
    packaging: 'ISPM-15 Wooden Crates + VCI Anti-Rust Bags',
    inspectionDoc: 'EN 10204 3.1 MTC',
    message: '',
  })
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      destinationCountry: 'Germany',
      destinationPortOrCity: '',
      incoterm: 'DDP (Doorstep Delivery)',
      currency: 'EUR (€)',
      product: 'Casting',
      material: 'Grey Cast Iron',
      quantity: '',
      packaging: 'ISPM-15 Wooden Crates + VCI Anti-Rust Bags',
      inspectionDoc: 'EN 10204 3.1 MTC',
      message: '',
    })
    setFileName('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f131f] text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
          <div>
            <span className="text-[#31a400] text-xs uppercase tracking-wider font-bold">Ethan Industries RFQ</span>
            <h3 className="text-xl font-bold text-white mt-0.5">Request a Technical Quotation</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-[#31a400]/10 text-[#31a400] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#0f131f]">Thank You, {formData.name || 'Partner'}!</h4>
              <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
                Your RFQ inquiry has been received by our engineering sales team. We will review your technical specifications and get back to you within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="ethan-btn-primary px-8"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-500 mb-2">
                Provide your drawings or requirement details. Direct communication with our technical team in India & Germany.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Bauer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Precision Drives GmbH"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="michael@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+49 170 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* International Logistics & Export Terms Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#0f131f] border-b border-gray-200 pb-1.5">
                  <span className="flex items-center gap-1.5 text-[#31a400]">
                    <span>🌐</span>
                    <span>International Export & Delivery Terms</span>
                  </span>
                  <span className="text-gray-400 font-normal">Direct from Port Mundra</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Incoterms 2020 *
                    </label>
                    <select
                      value={formData.incoterm}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] outline-none bg-white font-medium"
                    >
                      <option value="DDP (Doorstep Delivery)">DDP (Delivered Duty Paid - Door Delivery)</option>
                      <option value="CIF (Seaport)">CIF (Sea Freight to Destination Port)</option>
                      <option value="FOB (Mundra Port)">FOB (Port Mundra, Gujarat)</option>
                      <option value="DAP (Delivered at Place)">DAP (Delivered to Destination Depot)</option>
                      <option value="EXW (Rajkot Works)">EXW (Ex-Works Rajkot Hub)</option>
                      <option value="Air Freight Express">Air Cargo Expedited (3-5 Days)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Destination Country *
                    </label>
                    <select
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] outline-none bg-white font-medium"
                    >
                      <option value="Germany">Germany (DE)</option>
                      <option value="United States">United States (USA)</option>
                      <option value="France">France (FR)</option>
                      <option value="Italy">Italy (IT)</option>
                      <option value="United Kingdom">United Kingdom (UK)</option>
                      <option value="Netherlands">Netherlands (NL)</option>
                      <option value="Belgium">Belgium (BE)</option>
                      <option value="Austria">Austria (AT)</option>
                      <option value="Switzerland">Switzerland (CH)</option>
                      <option value="Canada">Canada (CA)</option>
                      <option value="UAE / GCC">UAE / Saudi Arabia</option>
                      <option value="Other Country">Other Global Destination</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Destination Port / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hamburg / Chicago / Lyon"
                      value={formData.destinationPortOrCity}
                      onChange={(e) => setFormData({ ...formData, destinationPortOrCity: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Target Currency
                    </label>
                    <select
                      value={formData.currency}
                      onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] outline-none bg-white font-medium"
                    >
                      <option value="EUR (€)">EUR (€) Euro</option>
                      <option value="USD ($)">USD ($) US Dollar</option>
                      <option value="GBP (£)">GBP (£) British Pound</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Seaworthy Packaging
                    </label>
                    <select
                      value={formData.packaging}
                      onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] outline-none bg-white"
                    >
                      <option value="ISPM-15 Wooden Crates + VCI Anti-Rust Bags">ISPM-15 Wood + VCI Anti-Rust</option>
                      <option value="Euro Pallet + Steel Strapping">Euro Pallet + Steel Straps</option>
                      <option value="Corrugated Heavy Cartons">Heavy-Duty Export Cartons</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Test Certification
                    </label>
                    <select
                      value={formData.inspectionDoc}
                      onChange={(e) => setFormData({ ...formData, inspectionDoc: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] outline-none bg-white"
                    >
                      <option value="EN 10204 3.1 MTC">EN 10204 3.1 Mill Cert</option>
                      <option value="PPAP Level 3 / ISIR">PPAP Level 3 / ISIR</option>
                      <option value="EN 10204 3.2 Third-Party">EN 10204 3.2 (TUV / SGS)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Technology / Process
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none bg-white"
                  >
                    <option value="Casting">Casting (Sand / Investment / Die)</option>
                    <option value="Forging">Forging (Open / Closed / Ring)</option>
                    <option value="CNC Machining">CNC Precision Machining</option>
                    <option value="Full Assembly">Full Machined Assembly</option>
                    <option value="Other">Other Custom Process</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Material Grade
                  </label>
                  <select
                    value={formData.material}
                    onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none bg-white"
                  >
                    <option value="Grey Cast Iron">Grey Cast Iron (GG25)</option>
                    <option value="Ductile Iron">Ductile Iron (GGG40/50)</option>
                    <option value="Carbon Steel">Carbon & Alloy Steel</option>
                    <option value="Stainless Steel">Stainless Steel (304 / 316 / Duplex)</option>
                    <option value="Aluminium">Cast & Forged Aluminium</option>
                    <option value="Brass / Bronze">Bronze / Brass / Copper</option>
                    <option value="Super Alloys">Nickel Super Alloys</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Annual / Batch Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 500 pcs / year"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Project Details / Tolerances / Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="Include weight range, machining tolerances, surface treatment requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                />
              </div>

              {/* Upload mock */}
              <div className="border-2 border-dashed border-gray-200 rounded p-3 text-center bg-gray-50 hover:bg-gray-100/80 transition cursor-pointer relative">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFileName(e.target.files[0].name)
                    }
                  }}
                />
                <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <Upload className="w-4 h-4 text-[#31a400]" />
                  <span>{fileName ? `Selected: ${fileName}` : 'Attach Technical Drawing (PDF, STEP, DWG, CAD - max 25MB)'}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="ethan-btn-primary px-6 text-sm"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit RFQ</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
