import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop",
      title: "2025년 새학기 모집",
      subtitle: "꿈을 향한 첫 걸음을 함께 시작하세요",
      cta: "모집안내 보기"
    },
    {
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop",
      title: "개별 맞춤 학습",
      subtitle: "학생 개인의 특성에 맞춘 체계적인 교육",
      cta: "커리큘럼 보기"
    },
    {
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop",
      title: "전문 강사진",
      subtitle: "풍부한 경험과 노하우로 완성하는 교육",
      cta: "강사진 소개"
    }
  ];

  const sideButtons = {
    left: [
      { title: '중등부', subtitle: '모집안내', path: '/middle/info' },
      { title: '고등부 단과', subtitle: '안내', path: '/high/info' },
      { title: '독학재수반', subtitle: '안내', path: '/repeat/info' }
    ],
    right: [
      { title: '설명회 접수', path: '/admission/seminar' },
      { title: '온라인 원서', subtitle: '접수', path: '/admission/apply' },
      { title: '강사진 소개', path: '/teachers' }
    ]
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 1000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 1000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 1000);
  };

  return (
    <section className="hero">
      <div className="slider-container">
        <div 
          className="slider" 
          style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} alt={`slide${index + 1}`} />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  <button className="slide-cta btn btn-primary">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-nav">
          <button onClick={prevSlide} className="nav-btn prev" aria-label="이전 슬라이드">
            ‹
          </button>
          <div className="indicator">
            {String(currentSlide + 1).padStart(2, '0')} | {String(slides.length).padStart(2, '0')}
          </div>
          <button onClick={nextSlide} className="nav-btn next" aria-label="다음 슬라이드">
            ›
          </button>
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop only: side round buttons */}
      <div className="side-buttons side-left">
        {sideButtons.left.map((button, index) => (
          <Link key={index} to={button.path} className="side-btn">
            <div className="btn-content">
              <div className="btn-title">{button.title}</div>
              {button.subtitle && <div className="btn-subtitle">{button.subtitle}</div>}
            </div>
          </Link>
        ))}
      </div>

      <div className="side-buttons side-right">
        {sideButtons.right.map((button, index) => (
          <Link key={index} to={button.path} className="side-btn">
            <div className="btn-content">
              <div className="btn-title">{button.title}</div>
              {button.subtitle && <div className="btn-subtitle">{button.subtitle}</div>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;