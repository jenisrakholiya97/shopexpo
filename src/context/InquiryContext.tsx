import { createContext, useContext, useState, type ReactNode } from 'react'

interface InquiryContextType {
  isOpen: boolean
  defaultProduct: string
  openInquiry: (product?: string) => void
  closeInquiry: () => void
}

const InquiryContext = createContext<InquiryContextType>({
  isOpen: false,
  defaultProduct: 'Casting',
  openInquiry: () => {},
  closeInquiry: () => {},
})

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [defaultProduct, setDefaultProduct] = useState('Casting')

  const openInquiry = (product = 'Casting') => {
    setDefaultProduct(product)
    setIsOpen(true)
  }

  const closeInquiry = () => {
    setIsOpen(false)
  }

  return (
    <InquiryContext.Provider value={{ isOpen, defaultProduct, openInquiry, closeInquiry }}>
      {children}
    </InquiryContext.Provider>
  )
}

export function useInquiry() {
  return useContext(InquiryContext)
}
