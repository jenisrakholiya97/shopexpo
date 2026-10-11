import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

interface FloatingControlsProps {
  onOpenInquiry: () => void
}

export default function FloatingControls({ onOpenInquiry }: FloatingControlsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating Send Inquiry Button on the right edge */}
      <button
        onClick={onOpenInquiry}
        className="floating-inquiry-tab flex items-center justify-center cursor-pointer shadow-lg active:scale-95 transition"
        title="Send Inquiry"
        aria-label="Send Inquiry"
      >
        Send Inquiry
      </button>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-scroll-top hover:scale-105 active:scale-95 transition"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </>
  )
}
