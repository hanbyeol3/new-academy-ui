import { useState, useEffect } from 'react';
import './ImagePopup.css';

interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImagePopup = ({ isOpen, onClose }: ImagePopupProps) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleClose = () => {
    if (dontShowAgain) {
      const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24시간
      localStorage.setItem('imagePopupHidden', expiryTime.toString());
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
    <div className="image-popup-overlay" onClick={handleBackgroundClick}>
      <div className="image-popup-container">
        <button className="image-popup-close" onClick={handleClose} aria-label="닫기">
          ×
        </button>
        
        <div className="image-popup-content">
          <div className="image-popup-image">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" 
              alt="새학기 모집 이벤트"
            />
          </div>
          
          <div className="image-popup-header">
            <h2>🎉 2025년 새학기 모집</h2>
            <p>꿈을 향한 첫 걸음을 함께 시작하세요!</p>
          </div>
          
          <div className="image-popup-actions">
            <button className="btn btn-primary image-popup-cta" onClick={handleClose}>
              자세히 보기
            </button>
          </div>
          
          <div className="image-popup-footer">
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

export default ImagePopup;