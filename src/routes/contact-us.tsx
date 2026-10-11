import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Send, 
  User, 
  Building, 
  Clock, 
  Globe2 
} from 'lucide-react'

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
    </svg>
  )
}

export const Route = createFileRoute('/contact-us')({
  component: ContactUsPage,
})

function ContactUsPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: 'RFQ Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-[#0f131f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/All-Processing-Possibilities.webp"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 max-w-3xl leading-tight">
            Let's grow together.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Every inquiry is reviewed by our engineering team. We respond within 48 hours with a clear, definitive answer.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#31a400]">
                  Offices & Representatives
                </span>
                <h2 className="text-3xl font-extrabold text-[#0f131f] ethan-heading-underline mt-1">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Connect with our technical team in Rajkot, India or our direct representative in Germany.
                </p>
              </div>

              {/* Germany Representative */}
              <div className="bg-[#f7f9fa] p-6 rounded-lg border border-gray-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31a400]">
                  <Globe2 className="w-4 h-4" />
                  <span>European Representation</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f131f]">
                  Harit Sorathiya
                </h3>
                <p className="text-xs text-gray-600 font-medium">
                  Business Development Manager — Europe
                </p>
                <div className="pt-2 space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#31a400]" />
                    <a href="mailto:sales@ethanind.com" className="hover:text-[#31a400] transition">
                      sales@ethanind.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#31a400]" />
                    <span>Central European Time (CET) Hours</span>
                  </div>
                </div>
              </div>

              {/* India Headquarters */}
              <div className="bg-[#f7f9fa] p-6 rounded-lg border border-gray-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31a400]">
                  <Building className="w-4 h-4" />
                  <span>India Headquarters & Operations</span>
                </div>
                <h3 className="text-lg font-bold text-[#0f131f]">
                  Ethan Industries
                </h3>
                <div className="pt-1 space-y-2.5 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#31a400] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Survey No. 35, Plot No. 4, near Patel Chowk, Vavdi Industrial Area, Rajkot, Gujarat — 360004, India
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#31a400]" />
                    <a href="tel:+919825292686" className="hover:text-[#31a400] transition font-semibold">
                      +91 98252 92686
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#31a400]" />
                    <a href="mailto:info@ethanind.com" className="hover:text-[#31a400] transition">
                      info@ethanind.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#31a400]" />
                    <a
                      href="https://www.linkedin.com/company/ethan-industries/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#31a400] transition"
                    >
                      Ethan Industries on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* International Export Desk Card */}
              <div className="bg-[#0f131f] text-white p-6 rounded-lg border border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#31a400]">
                  <span>🚢</span>
                  <span>International Export & Logistics Desk</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Port Mundra Direct Ocean Shipments
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Direct commercial point of contact for overseas engineering and supply chain managers requiring DDP door-to-door deliveries, container bookings, and export compliance documents.
                </p>
                <div className="pt-1 space-y-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#31a400]" />
                    <a href="mailto:export@ethanind.com" className="hover:text-[#31a400] transition font-semibold text-white">
                      export@ethanind.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-[#31a400] font-bold">Incoterms:</span>
                    <span>DDP (Europe/USA), CIF, FOB Mundra, EXW</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-[#31a400] font-bold">Banking:</span>
                    <span>EUR (€), USD ($), GBP (£) via SWIFT / LC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-[#0f131f] mb-2">
                  Send us a message
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Fill out the form below and attach any preliminary requirements. We respond within 48 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-[#31a400]/10 text-[#31a400] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#0f131f]">
                      Thank You, {form.firstName}!
                    </h4>
                    <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                      Your message has been sent to our sales & engineering desk. We have logged your request and will reach back out shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="ethan-btn-primary px-8 mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Michael"
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Schmidt"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="m.schmidt@company.de"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+49 89 1234567"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="Company GmbH / Inc."
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                          Subject / Requirement
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none bg-white"
                        >
                          <option value="RFQ Inquiry">New RFQ Inquiry</option>
                          <option value="Casting Project">Casting Project</option>
                          <option value="Forging Project">Forging Project</option>
                          <option value="CNC Machining">CNC Machining</option>
                          <option value="Export Logistics & DDP">Export Logistics & DDP Delivery</option>
                          <option value="General Query">General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your component application, annual volume, target alloy, and delivery requirements..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#31a400] focus:border-[#31a400] outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="ethan-btn-primary w-full sm:w-auto px-8"
                      >
                        {loading ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps / Location Info */}
      <section className="bg-gray-100 h-96 relative border-t border-gray-200">
        <iframe
          title="Ethan Industries Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118151.72895697334!2d70.7388944583196!3d22.285816353982928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe9381b7!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded shadow-lg border border-gray-200 text-xs space-y-1 max-w-sm hidden sm:block">
          <p className="font-bold text-[#0f131f]">Ethan Industries Facility</p>
          <p className="text-gray-600">Vavdi Industrial Area, Rajkot — 360004, Gujarat, India</p>
        </div>
      </section>
    </div>
  )
}
