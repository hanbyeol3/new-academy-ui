import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
}

const Header = ({ isDrawerOpen, onToggleDrawer }: HeaderProps) => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

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

  return (
    <header className="header">
      <div className="wrap">
        <Link to="/" className="logo">
          <img src="/src/assets/logo_blue_span.JPG" alt="대치숨마투스학원 남양캠퍼스" />
        </Link>

        <button 
          className={`burger ${isDrawerOpen ? 'active' : ''}`} 
          onClick={onToggleDrawer}
          aria-label="전체메뉴"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="nav" aria-label="주요메뉴">
          <ul>
            {menuItems.map((menu) => (
              <li 
                key={menu.title}
                onMouseEnter={() => setHoveredMenu(menu.title)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a href="#" className="nav-title">{menu.title}</a>
                <ul className={`dropdown ${hoveredMenu === menu.title ? 'show' : ''}`}>
                  {menu.items.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;