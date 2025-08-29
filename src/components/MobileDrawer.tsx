import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileDrawer.css';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('학원안내');

  const menuItems = [
    {
      title: '학원안내',
      items: [
        { name: '공지사항', path: '/notice' },
        { name: '학원소개', path: '/intro' },
        { name: '선생님 소개', path: '/teachers' },
        { name: '시설 안내', path: '/facilities' },
        { name: '오시는 길', path: '/location' }
      ]
    },
    {
      title: '중등부',
      items: [
        { name: '중등종합반 모집안내', path: '/middle/info' },
        { name: '학교별 시험&수행 분석', path: '/middle/analysis' },
        { name: '중등종합반 커리큘럼', path: '/middle/curriculum' },
        { name: '사회/과학(단과)', path: '/middle/subjects' }
      ]
    },
    {
      title: '고등부',
      items: [
        { name: '고등단과 모집안내', path: '/high/info' },
        { name: '학교별 시험&수행 분석', path: '/high/analysis' },
        { name: '국어단과 커리큘럼', path: '/high/korean' },
        { name: '영어단과 커리큘럼', path: '/high/english' },
        { name: '수학단과 커리큘럼', path: '/high/math' },
        { name: '고등탐구(단과)', path: '/high/inquiry' },
        { name: '고3 모의고사반', path: '/high/mock' }
      ]
    },
    {
      title: '독학재수',
      items: [
        { name: '모집안내', path: '/repeat/info' },
        { name: '독학재수반 커리큘럼', path: '/repeat/curriculum' }
      ]
    },
    {
      title: '설명회/입학원서',
      items: [
        { name: '온라인Q&A', path: '/admission/qa' },
        { name: '온라인 원서접수', path: '/admission/apply' },
        { name: '설명회 신청', path: '/admission/seminar' }
      ]
    },
    {
      title: '학원Story',
      items: [
        { name: '숨마투스 갤러리', path: '/story/gallery' },
        { name: '월간학사일정', path: '/story/schedule' },
        { name: '합격생 수기', path: '/story/success' },
        { name: '성적향상 사례', path: '/story/improvement' }
      ]
    }
  ];

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <aside className={`mobile-drawer ${isOpen ? 'open' : ''}`} aria-label="전체메뉴">
        <div className="drawer-hero">
          <button className="drawer-close" onClick={onClose} aria-label="닫기">
            ×
          </button>
          <h3>로그인 해주세요</h3>
          <div className="drawer-subtitle">로그인 후 다양한 프로그램을 만나보세요</div>
          <div className="drawer-cta">
            <a href="#" onClick={handleLinkClick}>로그인</a>
            <a href="#" onClick={handleLinkClick}>회원가입</a>
          </div>
        </div>

        <div className="drawer-content">
          {menuItems.map((menu) => (
            <section key={menu.title} className="menu-section">
              <div className="accordion-item">
                <button
                  className={`accordion-header ${openAccordion === menu.title ? 'active' : ''}`}
                  onClick={() => toggleAccordion(menu.title)}
                >
                  <span>{menu.title}</span>
                  <span className="accordion-icon">
                    {openAccordion === menu.title ? '▴' : '▾'}
                  </span>
                </button>
                <div className={`accordion-content ${openAccordion === menu.title ? 'open' : ''}`}>
                  <ul>
                    {menu.items.map((item) => (
                      <li key={item.name}>
                        <Link to={item.path} onClick={handleLinkClick}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;