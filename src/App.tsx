import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { AuthProvider, useAuth } from './AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Toaster } from '../components/ui/sonner';
import { 
  Menu, X, Phone, Clock, 
  Instagram, MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import ScrollToTop from './components/ScrollToTop';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ResidentOffice from './pages/ResidentOffice';
import VirtualOffice from './pages/VirtualOffice';
import MeetingRoom from './pages/MeetingRoom';
import Location from './pages/Location';
import Gallery from './pages/Gallery';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '상주사무실', path: '/resident' },
    { name: '비상주사무실', path: '/non-resident' },
    { name: '회의실', path: '/meeting-room' },
    { name: '갤러리', path: '/gallery' },
    { name: '위치안내', path: '/location' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">마이테라 공유오피스</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary text-white hover:opacity-90">
              <Link to="/contact">상담·예약</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border-custom overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-background-sub rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-primary text-white">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>상담·예약</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">마이테라 공유오피스 동탄점</span>
            </div>
            <p className="text-gray-300 max-w-md mb-8 leading-relaxed">
              마이테라 공유오피스 동탄점은 사업자 등록과 업무 운영을 함께 해결할 수 있는 실무 중심 공유오피스입니다. 
              1인 창업자부터 소규모 팀까지, 바로 사용할 수 있는 업무 환경을 제공합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">서비스 안내</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/resident" className="hover:text-accent transition-colors">상주사무실 (1~2인실)</Link></li>
              <li><Link to="/non-resident" className="hover:text-accent transition-colors">비상주사무실 (사업자등록)</Link></li>
              <li><Link to="/meeting-room" className="hover:text-accent transition-colors">회의실 대관</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">공간 갤러리</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">고객지원</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/location" className="hover:text-accent transition-colors">오시는 길</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">상담 예약</Link></li>
              <li className="flex items-center gap-2"><Phone size={16} /> 0507-1414-6711</li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 shrink-0" />
                <div>
                  <p>평일 : 09:00~18:00</p>
                  <p>(상담 24시간 가능)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 마이테라 공유오피스. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


// --- Main App ---

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <FloatingCTA />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/resident" element={<ResidentOffice />} />
                  <Route path="/non-resident" element={<VirtualOffice />} />
                  <Route path="/meeting-room" element={<MeetingRoom />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>
              <Footer />
              <Toaster position="top-center" />
            </div>
          </Router>
        </AuthProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
