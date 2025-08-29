import { Link } from "react-router-dom";
import "./CTASection.css";

const CTASection = () => {
  const ctaCards = [
    {
      title: "중등부 모집안내",
      subtitle: "",
      icon: "🎓",
      path: "/special/military",
      color: "primary",
    },
    {
      title: "고등부 단과 안내",
      subtitle: "",
      icon: "📖",
      path: "/special/winter",
      color: "accent",
    },
    {
      title: "독학재수반 안내",
      subtitle: "",
      icon: "📚",
      path: "/special/csat",
      color: "primary",
    },
    {
      title: "설명회 접수",
      subtitle: "",
      icon: "📋",
      path: "/story/achievement",
      color: "accent",
    },
    {
      title: "온라인 원서 접수",
      subtitle: "",
      icon: "💻",
      path: "/story/improvement",
      color: "primary",
    },
    {
      title: "강사진 소개",
      subtitle: "",
      icon: "👨‍🏫",
      path: "/special/art",
      color: "accent",
    },
  ];

  return (
    <section className="cta-section">
      <div className="cta-grid">
        {ctaCards.map((card, index) => (
          <Link
            key={index}
            to={card.path}
            className={`cta-card ${card.color}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="card-icon">{card.icon}</div>
            <div className="card-content">
              <div className="card-title">
                <span className="title-main">{card.title}</span>
                {card.subtitle && (
                  <span className="title-sub">{card.subtitle}</span>
                )}
              </div>
            </div>
            <div className="card-action">
              <span>자세히 보기</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="card-bg-icon">{card.icon}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CTASection;
