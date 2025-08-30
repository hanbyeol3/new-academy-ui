import "./Footer.css";
import logoBlueSpan from "../assets/logo_blue_span.png";

const Footer = () => {
  const footerLinks = [
    { name: "개인정보취급방침", path: "/privacy" },
    { name: "이용약관", path: "/terms" },
    { name: "이메일무단수집거부", path: "/email-policy" },
    { name: "수강료안내", path: "/fees" },
    { name: "오시는 길", path: "/location" },
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
          <div className="footer-logo-section">
            <img src={logoBlueSpan} alt="광릉한샘 기숙학원" className="footer-logo" />
          </div>
          
          <div className="info-section">
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">주소 : 경기 가평군 조종면 명지산로 540 (상판리)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Tel : 031-543-0202</span>
                <span className="info-separator">|</span>
                <span className="info-label">입학상담 : 031-543-2315</span>
                <span className="info-separator">|</span>
                <span className="info-label">Fax : 031-543-0409</span>
              </div>
              <div className="info-item">
                <span className="info-label">사업자등록번호 : 126-86-24797</span>
                <span className="info-separator">|</span>
                <span className="info-label">대표자명 : 신인호</span>
              </div>
              <div className="info-item">
                <span className="info-label">학원설립 운영등록증 : 광릉한샘기숙학원 제 380호</span>
                <span className="info-separator">|</span>
                <span className="info-label">광릉한샘원격학원 : 제 395호</span>
                <span className="info-separator">|</span>
                <span className="info-label">광릉한샘기숙학원</span>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-label">입학상담문의</div>
            <a href="tel:031-543-2315" className="contact-phone">031.543.2315</a>
            <div className="contact-fax">Fax. 031.543.0409</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            COPYRIGHT(C) 광릉한샘기숙학원 ALL RIGHT RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
