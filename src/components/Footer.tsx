import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { name: '개인정보취급방침', path: '/privacy' },
    { name: '이용약관', path: '/terms' },
    { name: '이메일무단수집거부', path: '/email-policy' },
    { name: '수강료안내', path: '/fees' },
    { name: '오시는 길', path: '/location' }
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.path} className="footer-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="footer-content">
          <div className="footer-info">
            <div className="info-section">
              <div className="info-row">
                <span className="info-label">주소</span>
                <span>경기도 가평군 조종면 명지산로 540 (상판리)</span>
              </div>
              <div className="info-row">
                <span className="info-label">대표전화</span>
                <span>031-543-0202</span>
                <span className="divider">|</span>
                <span className="info-label">입학상담</span>
                <span>031-543-2315</span>
                <span className="divider">|</span>
                <span className="info-label">팩스</span>
                <span>031-543-0409</span>
              </div>
              <div className="info-row">
                <span className="info-label">사업자등록번호</span>
                <span>126-86-24797</span>
                <span className="divider">|</span>
                <span className="info-label">대표자명</span>
                <span className="highlight">신한종</span>
              </div>
              <div className="info-row">
                <span className="info-label">학원등록증</span>
                <span className="highlight">대치숨마투스학원</span>
                <span>제 380호</span>
                <span className="divider">|</span>
                <span className="highlight">대치숨마투스원격학원</span>
                <span>제 395호</span>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <div className="contact-section">
              <div className="contact-label">입학상담문의</div>
              <a href="tel:031-543-2315" className="contact-phone">
                031.543.2315
              </a>
              <div className="contact-fax">Fax. 031.543.0409</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <span>COPYRIGHT(C) </span>
            <span className="highlight">대치숨마투스학원</span>
            <span> ALL RIGHT RESERVED.</span>
          </div>
          <div className="footer-badges">
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">우수학원</span>
            </div>
            <div className="badge">
              <span className="badge-icon">✨</span>
              <span className="badge-text">신뢰기관</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;