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
import DetailPopup from './components/Popup';
import ImagePopup from './components/ImagePopup';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);

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
      const imagePopupHidden = localStorage.getItem('imagePopupHidden');
      const detailPopupHidden = localStorage.getItem('popupHidden');
      const currentTime = new Date().getTime();
      
      // 이미지 팝업 먼저 체크
      if (!imagePopupHidden || currentTime > parseInt(imagePopupHidden)) {
        setTimeout(() => {
          setIsImagePopupOpen(true);
        }, 2000); // 2초 후 이미지 팝업 표시
      }
    };

    checkPopup();
  }, []);

  // 이미지 팝업이 닫힐 때 상세 팝업을 띄우는 로직
  const handleImagePopupClose = () => {
    setIsImagePopupOpen(false);
    
    // 이미지 팝업이 24시간 동안 숨겨져 있지 않다면 상세 팝업도 표시
    const detailPopupHidden = localStorage.getItem('popupHidden');
    const currentTime = new Date().getTime();
    
    if (!detailPopupHidden || currentTime > parseInt(detailPopupHidden)) {
      setTimeout(() => {
        setIsDetailPopupOpen(true);
      }, 500); // 0.5초 후 상세 팝업 표시
    }
  };

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
        
        <ImagePopup 
          isOpen={isImagePopupOpen} 
          onClose={handleImagePopupClose} 
        />
        
        <DetailPopup 
          isOpen={isDetailPopupOpen} 
          onClose={() => setIsDetailPopupOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;