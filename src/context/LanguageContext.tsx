import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type LanguageCode = 'EN' | 'DE' | 'FR' | 'ES' | 'IT'

export interface LanguageOption {
  code: LanguageCode
  name: string
  flag: string
  nativeName: string
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'EN', name: 'English', flag: '🇬🇧', nativeName: 'English (UK/US)' },
  { code: 'DE', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'FR', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'ES', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'IT', name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
]

export interface Translations {
  exportGateway: string
  announcement: string
  deOffice: string
  inHQ: string
  currency: string
  requestRfq: string
  nav: {
    home: string
    about: string
    services: string
    products: string
    technologies: string
    export: string
    application: string
    contact: string
  }
}

const TRANSLATIONS: Record<LanguageCode, Translations> = {
  EN: {
    exportGateway: 'Export Gateway',
    announcement: 'Direct Port Mundra Ocean Shipments | DDP Doorstep Delivery Across EU & USA | ISPM-15 & VCI Seaworthy Packing',
    deOffice: 'DE Office',
    inHQ: 'IN HQ',
    currency: 'Currency',
    requestRfq: 'Request RFQ',
    nav: {
      home: 'Home',
      about: 'About us',
      services: 'Services',
      products: 'Products',
      technologies: 'Technologies',
      export: 'Global Export',
      application: 'Application',
      contact: 'Contact us',
    },
  },
  DE: {
    exportGateway: 'Export-Portal',
    announcement: 'Direkte Seefracht ab Hafen Mundra | DDP Frei Haus Lieferungen in EU & USA | ISPM-15 & VCI Verpackung',
    deOffice: 'Büro Deutschland',
    inHQ: 'Zentrale Indien',
    currency: 'Währung',
    requestRfq: 'Angebot anfordern',
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      products: 'Produkte',
      technologies: 'Technologien',
      export: 'Globaler Export',
      application: 'Anwendungen',
      contact: 'Kontakt',
    },
  },
  FR: {
    exportGateway: 'Passerelle Export',
    announcement: 'Expéditions directes port de Mundra | Livraison DDP porte-à-porte en UE & USA | Emballage ISPM-15 certifié',
    deOffice: 'Bureau Allemagne',
    inHQ: 'Siège Inde',
    currency: 'Devise',
    requestRfq: 'Demander un devis',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      products: 'Produits',
      technologies: 'Technologies',
      export: 'Exportation Globale',
      application: 'Applications',
      contact: 'Contact',
    },
  },
  ES: {
    exportGateway: 'Portal Exportación',
    announcement: 'Envíos marítimos directos desde puerto Mundra | Entregas DDP puerta a puerta en UE y EE. UU. | Embalaje ISPM-15',
    deOffice: 'Oficina Alemania',
    inHQ: 'Sede India',
    currency: 'Moneda',
    requestRfq: 'Solicitar cotización',
    nav: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      services: 'Servicios',
      products: 'Productos',
      technologies: 'Tecnologías',
      export: 'Exportación Global',
      application: 'Aplicaciones',
      contact: 'Contacto',
    },
  },
  IT: {
    exportGateway: 'Gateway Export',
    announcement: 'Spedizioni marittime dirette porto Mundra | Consegne DDP franco fabbrica in UE e USA | Imballaggio ISPM-15',
    deOffice: 'Ufficio Germania',
    inHQ: 'Sede India',
    currency: 'Valuta',
    requestRfq: 'Richiedi preventivo',
    nav: {
      home: 'Home',
      about: 'Chi siamo',
      services: 'Servizi',
      products: 'Prodotti',
      technologies: 'Tecnologie',
      export: 'Export Globale',
      application: 'Applicazioni',
      contact: 'Contatti',
    },
  },
}

interface LanguageContextType {
  currentLang: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: Translations
  languages: LanguageOption[]
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'EN',
  setLanguage: () => {},
  t: TRANSLATIONS.EN,
  languages: LANGUAGES,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('EN')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ethan_language') as LanguageCode
      if (saved && TRANSLATIONS[saved]) {
        setCurrentLang(saved)
      }
    } catch {
      // ignore
    }
  }, [])

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLang(lang)
    try {
      localStorage.setItem('ethan_language', lang)
    } catch {
      // ignore
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        t: TRANSLATIONS[currentLang] || TRANSLATIONS.EN,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
