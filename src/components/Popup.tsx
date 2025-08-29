import { useState, useEffect } from 'react';
import './Popup.css';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup = ({ isOpen, onClose }: PopupProps) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleClose = () => {
    if (dontShowAgain) {
      const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24시간
      localStorage.setItem('popupHidden', expiryTime.toString());
    }
    onClose();
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleBackgroundClick}>
      <div className="popup-container">
        <button className="popup-close" onClick={handleClose} aria-label="닫기">
          ×
        </button>
        
        <div className="popup-content">
          <div className="popup-header">
            <h2>🎉 2025년 새학기 모집</h2>
            <p>꿈을 향한 첫 걸음을 함께 시작하세요!</p>
          </div>
          
          <div className="popup-image">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
              alt="새학기 모집 이벤트"
            />
          </div>
          
          <div className="popup-body">
            <div className="highlight-box">
              <h3>🌟 특별 혜택</h3>
              <ul>
                <li>✅ 첫 달 수강료 20% 할인</li>
                <li>✅ 무료 레벨 테스트 & 학습 상담</li>
                <li>✅ 개인별 맞춤 커리큘럼 제공</li>
                <li>✅ 전문 강사진의 1:1 밀착 관리</li>
              </ul>
            </div>
            
            <div className="contact-info">
              <h4>📞 문의 및 상담</h4>
              <div className="contact-details">
                <span className="phone">031-543-2315</span>
                <span className="hours">평일 09:00 ~ 18:00</span>
              </div>
            </div>
          </div>
          
          <div className="popup-actions">
            <button className="btn btn-primary popup-cta" onClick={handleClose}>
              상담 신청하기
            </button>
          </div>
          
          <div className="popup-footer">
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
              />
              <span className="checkmark"></span>
              24시간 동안 보지 않기
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;