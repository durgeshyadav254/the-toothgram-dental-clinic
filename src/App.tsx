import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MobileDock from './components/layout/MobileDock'

const Home = lazy(() => import('./pages/Home'))
const SmileStudio = lazy(() => import('./pages/SmileStudio'))
const TheLounge = lazy(() => import('./pages/TheLounge'))
const GlowGallery = lazy(() => import('./pages/GlowGallery'))
const DreamSmile = lazy(() => import('./pages/DreamSmile'))
const Book = lazy(() => import('./pages/Book'))
const Visit = lazy(() => import('./pages/Visit'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageLoader() {
  return (
    <div className="min-h-screen bg-pearl flex items-center justify-center pt-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center animate-pulse-soft">
          <span className="font-display text-rose-deep text-lg italic">T</span>
        </div>
        <p className="font-body text-sm text-ink-faint tracking-wide">Loading…</p>
      </div>
    </div>
  )
}

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smile-studio" element={<SmileStudio />} />
            <Route path="/smile-studio/:slug" element={<SmileStudio />} />
            <Route path="/the-lounge" element={<TheLounge />} />
            <Route path="/glow-gallery" element={<GlowGallery />} />
            <Route path="/dream-smile" element={<DreamSmile />} />
            <Route path="/book" element={<Book />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileDock />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}
