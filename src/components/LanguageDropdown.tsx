import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useLanguage, type LanguageCode } from '../context/LanguageContext'

interface LanguageDropdownProps {
  className?: string
  align?: 'left' | 'right'
}

export default function LanguageDropdown({ className = '', align = 'right' }: LanguageDropdownProps) {
  const { currentLang, setLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const activeLanguage = languages.find((l) => l.code === currentLang) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Visual Trigger Button */}
      <button
        type="button"
        id="language-dropdown-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition-all shadow-2xs focus:outline-none focus:ring-1 focus:ring-[#31a400] cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-[#31a400] shrink-0" />
        <span className="text-sm leading-none" role="img" aria-label={activeLanguage.name}>
          {activeLanguage.flag}
        </span>
        <span className="text-[12px] font-bold text-[#0f131f]">{activeLanguage.code}</span>
        <ChevronDown
          className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#31a400]' : ''
          }`}
        />
      </button>

      {/* Floating Menu Popover */}
      {isOpen && (
        <div
          className={`absolute ${
            align === 'right' ? 'right-0' : 'left-0'
          } top-full mt-1.5 w-48 rounded-lg bg-white shadow-2xl ring-1 ring-black/10 border border-gray-200 py-1.5 z-50 animate-fade-in`}
          style={{ zIndex: 9999 }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-dropdown-btn"
        >
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 mb-1">
            Languages
          </div>
          {languages.map((lang) => {
            const isSelected = currentLang === lang.code
            return (
              <button
                key={lang.code}
                id={`lang-opt-${lang.code.toLowerCase()}`}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#31a400]/10 text-[#31a400] font-bold'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[12px] leading-tight">{lang.nativeName}</span>
                    <span className="text-[10px] text-gray-400">{lang.name}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#31a400] shrink-0" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
