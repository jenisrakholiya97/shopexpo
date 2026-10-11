import { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X, Phone, ChevronRight, FileText, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageDropdown from './LanguageDropdown'

interface HeaderProps {
  onOpenInquiry?: () => void
}

export default function Header({ onOpenInquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('EUR (€)')
  const { t, currentLang } = useLanguage()
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [currentPath])

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about-us' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.products, href: '/products' },
    { label: t.nav.technologies, href: '/technologies' },
    { label: t.nav.export, href: '/export' },
    { label: t.nav.application, href: '/application' },
    { label: t.nav.contact, href: '/contact-us' },
  ]

  return (
    <>
      {/* Top Export Announcement & International Desk Bar */}
      <div className="bg-[#0f131f] text-gray-300 text-xs py-1.5 px-4 border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#31a400] text-white font-bold text-[10px] uppercase tracking-wider shrink-0 shadow-2xs">
              {t.exportGateway}
            </span>
            <span className="hidden md:inline text-gray-300 font-medium text-[11px] truncate">
              {t.announcement}
            </span>
            <span className="md:hidden text-gray-300 font-medium text-[11px] truncate">
              Mundra Port Shipping | DDP Europe & USA
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-[11px] text-gray-400 shrink-0">
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="text-[#31a400] font-bold">{t.deOffice}:</span>
              <a href="tel:+491701234567" className="hover:text-white transition">+49 (0) 6221 82590</a>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 border-l border-gray-700/80 pl-3">
              <span className="text-[#31a400] font-bold">{t.inHQ}:</span>
              <a href="tel:+919825292686" className="hover:text-white transition">+91 98252 92686</a>
            </div>
            <div className="flex items-center gap-1 border-l border-gray-700/80 pl-3">
              <span className="text-gray-400">{t.currency}:</span>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="bg-transparent text-white font-bold cursor-pointer outline-none text-[11px] hover:text-[#31a400] transition"
                aria-label="Select Target Currency"
              >
                <option value="EUR (€)" className="bg-[#0f131f] text-white">EUR (€)</option>
                <option value="USD ($)" className="bg-[#0f131f] text-white">USD ($)</option>
                <option value="GBP (£)" className="bg-[#0f131f] text-white">GBP (£)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md py-2.5 border-b border-gray-200/80'
            : 'bg-white py-3.5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 focus:outline-none group">
              <img
                src="/assets/ehan-logo.svg"
                alt="Ethan Industries"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links — Ultra-clean, non-crowded layout */}
            <nav className="hidden lg:flex items-center justify-center flex-1 max-w-3xl gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPath === link.href
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-2.5 py-1.5 rounded-md text-[13px] xl:text-[13.5px] font-semibold whitespace-nowrap transition-all duration-150 relative ${
                      isActive
                        ? 'text-[#31a400] bg-[#31a400]/10 font-bold'
                        : 'text-[#1e2433] hover:text-[#31a400] hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Right Side Actions — Compact Language Dropdown & Scaled-down RFQ CTA */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              {/* Language Dropdown Component */}
              <LanguageDropdown />

              {/* Compact, elegantly proportioned Request RFQ Button */}
              {onOpenInquiry && (
                <button
                  onClick={onOpenInquiry}
                  className="bg-[#31a400] hover:bg-[#298d00] text-white py-1 px-2.5 text-[11.5px] font-semibold rounded-md shadow-2xs hover:shadow transition-all inline-flex items-center gap-1.5 whitespace-nowrap"
                  title="Request Technical Quotation"
                >
                  <FileText className="w-3 h-3" />
                  <span>{t.requestRfq}</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <LanguageDropdown />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-[#31a400] hover:bg-gray-100 transition focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <img
                  src="/assets/ehan-logo.svg"
                  alt="Ethan Industries"
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mt-5 space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-md text-sm font-semibold transition ${
                        isActive
                          ? 'bg-[#31a400]/10 text-[#31a400] font-bold'
                          : 'text-[#1e2433] hover:bg-gray-50 hover:text-[#31a400]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  )
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-4">
              {/* Language Selection in Mobile Drawer */}
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold mb-2">Select Language</p>
                <LanguageDropdown align="left" className="w-full" />
              </div>

              {onOpenInquiry && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenInquiry()
                  }}
                  className="w-full ethan-btn-primary py-2.5 text-xs font-semibold rounded-md shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.requestRfq}</span>
                </button>
              )}

              <div className="text-xs text-gray-500 space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#31a400]" />
                  <span>+91 98252 92686</span>
                </div>
                <div className="text-[11px] text-gray-400">
                  <span>sales@ethanind.com • info@ethanind.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
