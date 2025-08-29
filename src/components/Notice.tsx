import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Notice.css';

interface NoticeItem {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  views: number;
  isImportant: boolean;
  category: string;
}

const Notice = () => {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '일반공지', '입학안내', '학사일정', '시험안내', '특별프로그램'];

  // 샘플 데이터
  useEffect(() => {
    const sampleNotices: NoticeItem[] = [
      {
        id: 1,
        title: "26학년도 사관학교 면접 체력 프로그램 소개",
        content: `
        <h2>26학년도 사관학교 면접 체력 프로그램 안내</h2>
        
        <p>안녕하세요, 대치숨마투스학원입니다.</p>
        
        <p>26학년도 사관학교 지원을 준비하는 수험생들을 위한 면접 및 체력 프로그램을 다음과 같이 안내드립니다.</p>
        
        <h3>📋 프로그램 개요</h3>
        <ul>
          <li><strong>대상:</strong> 사관학교 지원 예정 학생</li>
          <li><strong>기간:</strong> 2025년 8월 1일 ~ 2025년 11월 30일</li>
          <li><strong>장소:</strong> 본원 및 가평캠퍼스</li>
        </ul>
        
        <h3>💪 체력 프로그램</h3>
        <ul>
          <li>팔굽혀펴기, 윗몸일으키기 강화 훈련</li>
          <li>3km 달리기 및 지구력 향상</li>
          <li>개인별 맞춤 체력 관리</li>
          <li>전문 트레이너 지도</li>
        </ul>
        
        <h3>🎤 면접 프로그램</h3>
        <ul>
          <li>개별 모의면접 실시</li>
          <li>집단토론 및 발표 연습</li>
          <li>리더십 역량 강화</li>
          <li>예상 질문 및 답변 요령</li>
        </ul>
        
        <p><strong>문의:</strong> 031-543-2315 (입학상담실)</p>
        `,
        date: "2025-07-27",
        author: "입학상담실",
        views: 156,
        isImportant: true,
        category: "특별프로그램"
      },
      {
        id: 2,
        title: "가평 캠퍼스 입소 안내",
        content: `
        <h2>가평 캠퍼스 입소 안내</h2>
        
        <p>2025년 여름학기 가평 캠퍼스 입소 관련 안내사항입니다.</p>
        
        <h3>📅 입소 일정</h3>
        <ul>
          <li><strong>입소일:</strong> 2025년 8월 5일 (월) 오후 2시</li>
          <li><strong>준비물:</strong> 개인용품, 학습도구, 세면도구</li>
          <li><strong>집결장소:</strong> 본원 1층 로비</li>
        </ul>
        
        <h3>🏠 캠퍼스 시설</h3>
        <ul>
          <li>개인 학습공간</li>
          <li>24시간 자습실</li>
          <li>식당 및 매점</li>
          <li>체육시설</li>
        </ul>
        
        <p><strong>주의사항:</strong> 입소 전 개인 건강상태를 확인하시기 바랍니다.</p>
        `,
        date: "2025-07-31",
        author: "학생관리부",
        views: 89,
        isImportant: true,
        category: "학사일정"
      },
      {
        id: 3,
        title: "[공지] 2026학년도 전입신고 안내",
        content: `
        <h2>2026학년도 전입신고 안내</h2>
        
        <p>전입 예정 학생 및 학부모님께 안내드립니다.</p>
        
        <h3>📋 신고 기간</h3>
        <ul>
          <li><strong>접수기간:</strong> 2025년 7월 15일 ~ 8월 15일</li>
          <li><strong>접수방법:</strong> 온라인 접수 (홈페이지) 또는 방문 접수</li>
        </ul>
        
        <h3>📄 필요서류</h3>
        <ul>
          <li>전입신고서 (홈페이지 다운로드)</li>
          <li>학교생활기록부 사본</li>
          <li>주민등록등본</li>
          <li>학부모 신분증 사본</li>
        </ul>
        
        <p>자세한 사항은 입학상담실로 문의하시기 바랍니다.</p>
        `,
        date: "2025-07-14",
        author: "입학상담실",
        views: 203,
        isImportant: false,
        category: "입학안내"
      },
      {
        id: 4,
        title: "2025년 여름학기 특강 안내",
        content: `
        <h2>2025년 여름학기 특강 안내</h2>
        
        <p>여름방학을 맞아 다양한 특강 프로그램을 운영합니다.</p>
        
        <h3>📚 개설 과목</h3>
        <ul>
          <li>수학 심화과정</li>
          <li>영어 독해 및 작문</li>
          <li>과학 실험 특강</li>
          <li>논술 및 면접 대비</li>
        </ul>
        
        <h3>⏰ 시간표</h3>
        <ul>
          <li>오전반: 9:00 - 12:00</li>
          <li>오후반: 13:00 - 16:00</li>
          <li>저녁반: 19:00 - 22:00</li>
        </ul>
        
        <p>수강신청은 선착순으로 마감됩니다.</p>
        `,
        date: "2025-07-10",
        author: "교무부",
        views: 142,
        isImportant: false,
        category: "일반공지"
      },
      {
        id: 5,
        title: "8월 모의고사 일정 안내",
        content: `
        <h2>8월 모의고사 일정 안내</h2>
        
        <p>8월 모의고사 일정을 다음과 같이 안내드립니다.</p>
        
        <h3>📅 시험 일정</h3>
        <ul>
          <li><strong>고3:</strong> 2025년 8월 20일 (화)</li>
          <li><strong>고2:</strong> 2025년 8월 21일 (수)</li>
          <li><strong>고1:</strong> 2025년 8월 22일 (목)</li>
        </ul>
        
        <h3>⏰ 시간표</h3>
        <ul>
          <li>1교시: 9:00 - 10:20 (국어)</li>
          <li>2교시: 10:50 - 12:10 (수학)</li>
          <li>3교시: 13:10 - 14:30 (영어)</li>
          <li>4교시: 15:00 - 16:20 (탐구)</li>
        </ul>
        
        <p>응시료는 별도 안내드리겠습니다.</p>
        `,
        date: "2025-07-08",
        author: "교무부",
        views: 287,
        isImportant: false,
        category: "시험안내"
      }
    ];
    
    setNotices(sampleNotices);
  }, []);

  const filteredNotices = notices.filter(notice => {
    const matchesCategory = selectedCategory === '전체' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNotices = filteredNotices.slice(startIndex, startIndex + itemsPerPage);

  const handleNoticeClick = (notice: NoticeItem) => {
    setSelectedNotice(notice);
    setNotices(prev => prev.map(n => 
      n.id === notice.id ? { ...n, views: n.views + 1 } : n
    ));
  };

  const handleBackToList = () => {
    setSelectedNotice(null);
  };

  if (selectedNotice) {
    return (
      <div className="notice-page">
        <div className="notice-container">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">홈</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/notice" className="breadcrumb-link" onClick={handleBackToList}>공지사항</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">상세보기</span>
          </div>

          <article className="notice-detail">
            <header className="notice-header">
              <div className="notice-meta">
                <span className={`notice-category ${selectedNotice.isImportant ? 'important' : ''}`}>
                  {selectedNotice.isImportant ? '중요' : selectedNotice.category}
                </span>
                <span className="notice-date">{selectedNotice.date}</span>
              </div>
              <h1 className="notice-title">{selectedNotice.title}</h1>
              <div className="notice-info">
                <span className="notice-author">작성자: {selectedNotice.author}</span>
                <span className="notice-views">조회수: {selectedNotice.views}</span>
              </div>
            </header>

            <div 
              className="notice-content"
              dangerouslySetInnerHTML={{ __html: selectedNotice.content }}
            />

            <div className="notice-actions">
              <button className="btn btn-secondary" onClick={handleBackToList}>
                목록으로
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="notice-page">
      <div className="notice-container">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">홈</Link>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">공지사항</span>
        </div>

        <header className="page-header">
          <h1 className="page-title">📢 공지사항</h1>
          <p className="page-subtitle">학원의 중요한 소식을 확인하세요</p>
        </header>

        <div className="notice-filters">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="제목, 내용 검색..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        <div className="notice-list">
          {currentNotices.length > 0 ? (
            <>
              <div className="list-header">
                <span className="col-no">번호</span>
                <span className="col-title">제목</span>
                <span className="col-author">작성자</span>
                <span className="col-date">작성일</span>
                <span className="col-views">조회</span>
              </div>
              
              {currentNotices.map((notice, index) => (
                <div 
                  key={notice.id} 
                  className={`notice-item ${notice.isImportant ? 'important' : ''}`}
                  onClick={() => handleNoticeClick(notice)}
                >
                  <span className="notice-no">
                    {notice.isImportant ? '공지' : startIndex + index + 1}
                  </span>
                  <div className="notice-title-cell">
                    <span className="notice-title">{notice.title}</span>
                    <span className={`notice-badge ${notice.category}`}>
                      {notice.category}
                    </span>
                  </div>
                  <span className="notice-author">{notice.author}</span>
                  <span className="notice-date">{notice.date}</span>
                  <span className="notice-views">{notice.views}</span>
                </div>
              ))}
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📄</div>
              <h3>검색 결과가 없습니다</h3>
              <p>다른 검색어로 다시 시도해보세요.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ‹ 이전
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              다음 ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;