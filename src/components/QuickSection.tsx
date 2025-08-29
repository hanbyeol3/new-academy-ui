import { Link } from 'react-router-dom';
import './QuickSection.css';

const QuickSection = () => {
  const notices = [
    {
      title: "26학년도 사관학교 면접 체력 프로그램 소개",
      date: "2025-07-27",
      isNew: true
    },
    {
      title: "가평 캠퍼스 입소 안내",
      date: "2025-07-31",
      isNew: true
    },
    {
      title: "[공지] 2026학년도 전입신고 안내",
      date: "2025-07-14",
      isNew: false
    },
    {
      title: "2025년 여름학기 특강 안내",
      date: "2025-07-10",
      isNew: false
    }
  ];

  const quickCards = [
    {
      title: "온라인 원서접수",
      subtitle: "바로 신청",
      icon: "📝",
      path: "/admission/apply",
      color: "primary"
    },
    {
      title: "주간시간표",
      subtitle: "학습 계획",
      icon: "📅",
      path: "/schedule",
      color: "accent"
    },
    {
      title: "입학문의",
      subtitle: "상담 연결",
      icon: "💬",
      path: "/contact",
      color: "primary"
    },
    {
      title: "응원편지",
      subtitle: "격려 메세지",
      icon: "💌",
      path: "/support",
      color: "accent"
    }
  ];

  return (
    <section className="quick-section">
      <div className="quick-container">
        <div className="quick-grid">
          <article className="notice-card">
            <div className="card-header">
              <h3>📢 공지사항</h3>
              <Link to="/notice" className="more-link">
                더보기 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M9 18L15 12L9 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <ul className="notice-list">
              {notices.map((notice, index) => (
                <li key={index} className="notice-item">
                  <Link to="/notice" className="notice-link">
                    <div className="notice-content">
                      <span className="notice-title">
                        {notice.title}
                        {notice.isNew && <span className="new-badge">NEW</span>}
                      </span>
                      <time className="notice-date">{notice.date}</time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <div className="quick-cards-grid">
            {quickCards.map((card, index) => (
              <Link 
                key={index}
                to={card.path} 
                className={`quick-card ${card.color}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="quick-icon">{card.icon}</div>
                <div className="quick-content">
                  <div className="quick-title">{card.title}</div>
                  <div className="quick-subtitle">{card.subtitle}</div>
                </div>
                <div className="quick-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M9 18L15 12L9 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSection;