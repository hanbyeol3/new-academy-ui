import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CTASection from './components/CTASection';
import QuickSection from './components/QuickSection';
import Footer from './components/Footer';
import MobileDrawer from './components/MobileDrawer';
import Notice from './components/Notice';
import Popup from './components/Popup';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024 && isDrawerOpen) {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    // 팝업 표시 로직
    const checkPopup = () => {
      const popupHidden = localStorage.getItem('popupHidden');
      const currentTime = new Date().getTime();
      
      if (!popupHidden || currentTime > parseInt(popupHidden)) {
        setTimeout(() => {
          setIsPopupOpen(true);
        }, 2000); // 2초 후 팝업 표시
      }
    };

    checkPopup();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Top bar */}
        <div className="topbar">
          <div className="wrap">
            <div className="links">
              <Link to="/">HOME</Link>
              <a href="#">Cafe</a>
              <a href="#">Blog</a>
            </div>
            <div className="auth">
              <Link to="/login">로그인</Link> · <Link to="/signup" className="signup">회원가입</Link>
            </div>
          </div>
        </div>

        <Header isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawer} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CTASection />
              <QuickSection />
            </>
          } />
          <Route path="/notice" element={<Notice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
        
        <Popup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;