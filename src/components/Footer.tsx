import { Link } from '@tanstack/react-router'
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#0f131f] text-gray-300 pt-16 pb-12 border-t-2 border-[#31a400]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/assets/ehan-logo-2.svg"
                alt="Ethan Industries"
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-white font-medium text-sm pt-2">
              Precision Engineering for Modern Industry.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Bridging Indian precision manufacturing excellence with European & global quality standards. Castings, forgings, and CNC machining — sourced, qualified, and delivered.
            </p>
            <div className="pt-2">
              <a
                href="https://www.linkedin.com/company/ethan-industries/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded bg-[#1c2233] text-white hover:bg-[#31a400] transition"
                aria-label="Ethan Industries on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide border-b border-gray-800 pb-2">
              General Contacts
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#31a400] shrink-0 mt-1" />
                <span className="text-xs text-gray-400 leading-relaxed">
                  Survey No. 35, Plot No. 4, near Patel Chowk, Vavdi Industrial Area, Rajkot, Gujarat — 360004, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#31a400] shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href="mailto:info@ethanind.com" className="text-gray-300 hover:text-[#31a400] transition">
                    info@ethanind.com
                  </a>
                  <a href="mailto:sales@ethanind.com" className="text-gray-300 hover:text-[#31a400] transition">
                    sales@ethanind.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#31a400] shrink-0" />
                <a href="tel:+919825292686" className="text-xs text-gray-300 hover:text-[#31a400] transition">
                  +91 98252 92686
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: What We Supply */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide border-b border-gray-800 pb-2">
              What We Supply
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  className="text-xs text-gray-400 hover:text-[#31a400] transition flex items-center justify-between group py-1"
                >
                  <span>Casting Solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition text-[#31a400]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-xs text-gray-400 hover:text-[#31a400] transition flex items-center justify-between group py-1"
                >
                  <span>Forging Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition text-[#31a400]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-xs text-gray-400 hover:text-[#31a400] transition flex items-center justify-between group py-1"
                >
                  <span>Precision CNC Machining</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition text-[#31a400]" />
                </Link>
              </li>
              <li>
                <Link
                  to="/materials"
                  className="text-xs text-gray-400 hover:text-[#31a400] transition flex items-center justify-between group py-1"
                >
                  <span>Materials Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition text-[#31a400]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide border-b border-gray-800 pb-2">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="/application" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  Application
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/materials" className="text-gray-400 hover:text-[#31a400] transition py-1 block">
                  Materials
                </Link>
              </li>
              <li className="col-span-2">
                <Link to="/export" className="text-[#31a400] font-bold hover:underline transition py-1 flex items-center gap-1.5">
                  <span>🚢 Global Export & Logistics Hub</span>
                  <span className="text-[10px] bg-[#31a400]/20 px-1.5 py-0.5 rounded text-[#31a400]">DDP/CIF</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Export Compliance Strip */}
        <div className="my-8 py-4 px-6 bg-[#181d2c] rounded-lg border border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span className="text-[#31a400]">🌐</span>
            <span>Export Logistics Assurance:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-gray-300">
              <span className="text-[#31a400]">✓</span> Port Mundra (APSEZ) Container Line
            </span>
            <span className="flex items-center gap-1 text-gray-300">
              <span className="text-[#31a400]">✓</span> DDP Doorstep Delivery in Europe & USA
            </span>
            <span className="flex items-center gap-1 text-gray-300">
              <span className="text-[#31a400]">✓</span> ISPM-15 & VCI Seaworthy Packaging
            </span>
            <span className="flex items-center gap-1 text-gray-300">
              <span className="text-[#31a400]">✓</span> EN 10204 3.1 & PPAP Level 3
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Ethan Industries. All Rights Reserved.</p>
          <p className="flex items-center gap-4">
            <span>Rajkot Precision Manufacturing Hub, India</span>
            <span>•</span>
            <span>Germany Representation Office</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
