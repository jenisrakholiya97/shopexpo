import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingControls from '../components/FloatingControls'
import InquiryModal from '../components/InquiryModal'
import { InquiryProvider, useInquiry } from '../context/InquiryContext'
import { LanguageProvider } from '../context/LanguageContext'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Ethan Industries | Precision Engineering & Supply Chain Partner',
      },
      {
        name: 'description',
        content: 'Ethan Industries bridges Indian precision manufacturing with European quality standards. Castings, forgings, and CNC machining, — sourced, qualified and delivered.',
      },
      {
        name: 'theme-color',
        content: '#31a400',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/assets/core-value-icon.svg',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function PageShell({ children }: { children: React.ReactNode }) {
  const { isOpen, defaultProduct, openInquiry, closeInquiry } = useInquiry()

  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      <Header onOpenInquiry={() => openInquiry('Casting')} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingControls onOpenInquiry={() => openInquiry('Casting')} />
      <InquiryModal
        isOpen={isOpen}
        onClose={closeInquiry}
        defaultProduct={defaultProduct}
      />
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased text-[#2e2d2c] selection:bg-[#31a400]/20 selection:text-[#0f131f]">
        <InquiryProvider>
          <LanguageProvider>
            <PageShell>{children}</PageShell>
          </LanguageProvider>
        </InquiryProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
