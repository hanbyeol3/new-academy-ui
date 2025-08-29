import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    birthDate: '',
    gender: '',
    school: '',
    grade: ''
  });
  
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
    allAgree: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const [accordionStates, setAccordionStates] = useState({
    terms: false,
    privacy: false,
    marketing: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 에러 메시지 제거
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAgreementChange = (name: string, checked: boolean) => {
    if (name === 'allAgree') {
      setAgreements({
        terms: checked,
        privacy: checked,
        marketing: checked,
        allAgree: checked
      });
    } else {
      const newAgreements = {
        ...agreements,
        [name]: checked
      };
      newAgreements.allAgree = newAgreements.terms && newAgreements.privacy && newAgreements.marketing;
      setAgreements(newAgreements);
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.username.trim()) {
      newErrors.username = '아이디를 입력해주세요.';
    } else if (formData.username.length < 4) {
      newErrors.username = '아이디는 4자 이상이어야 합니다.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
    }
    
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '휴대폰 번호를 입력해주세요.';
    }
    
    if (!agreements.terms) {
      newErrors.terms = '이용약관에 동의해주세요.';
    }
    
    if (!agreements.privacy) {
      newErrors.privacy = '개인정보 처리방침에 동의해주세요.';
    }
    
    return newErrors;
  };

  const toggleAccordion = (type: 'terms' | 'privacy' | 'marketing') => {
    setAccordionStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // 회원가입 로직 (여기서는 콘솔 출력)
    console.log('Signup attempt:', { ...formData, agreements });
    alert('회원가입 기능은 준비 중입니다.');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-header">
            <Link to="/login" className="back-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M19 12H5M12 19l-7-7 7-7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              로그인으로
            </Link>
            <h1>회원가입</h1>
            <p>학원 서비스 이용을 위해 회원가입을 진행해주세요</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>🔐 로그인 정보</h3>
              
              <div className="form-group">
                <label htmlFor="username">아이디 *</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={errors.username ? 'error' : ''}
                  placeholder="4자 이상의 영문, 숫자 조합"
                />
                {errors.username && <span className="error-message">{errors.username}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">이메일 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="example@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">비밀번호 *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                    placeholder="8자 이상"
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">비밀번호 확인 *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error' : ''}
                    placeholder="비밀번호 재입력"
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>👤 개인정보</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="실명을 입력하세요"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">휴대폰 번호 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="010-1234-5678"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="birthDate">생년월일</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">성별</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">선택</option>
                    <option value="male">남성</option>
                    <option value="female">여성</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>🎓 학업정보</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="school">학교명</label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="재학 중인 학교명"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="grade">학년</label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                  >
                    <option value="">선택</option>
                    <option value="middle1">중학교 1학년</option>
                    <option value="middle2">중학교 2학년</option>
                    <option value="middle3">중학교 3학년</option>
                    <option value="high1">고등학교 1학년</option>
                    <option value="high2">고등학교 2학년</option>
                    <option value="high3">고등학교 3학년</option>
                    <option value="graduate">졸업생</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>📝 약관동의</h3>
              
              <div className="agreements">
                <label className="checkbox-container main-agreement">
                  <input 
                    type="checkbox"
                    checked={agreements.allAgree}
                    onChange={(e) => handleAgreementChange('allAgree', e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  전체 동의
                </label>

                <div className="sub-agreements">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox"
                      checked={agreements.terms}
                      onChange={(e) => handleAgreementChange('terms', e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    이용약관 동의 (필수)
                    <button 
                      type="button" 
                      className="agreement-link"
                      onClick={() => toggleAccordion('terms')}
                    >
                      보기
                    </button>
                  </label>
                  
                  {accordionStates.terms && (
                    <div className="accordion-content">
                      <div className="terms-content">
                        <h4>이용약관</h4>
                        <p>제1조 (목적)<br/>
                        본 약관은 대치숨마투스학원(이하 "학원")에서 제공하는 교육 서비스의 이용 조건 및 절차, 학원과 이용자의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.</p>
                        
                        <p>제2조 (용어의 정의)<br/>
                        1. "학원"이란 대치숨마투스학원을 말합니다.<br/>
                        2. "이용자"란 학원의 교육 서비스를 이용하는 학생 및 학부모를 말합니다.</p>
                        
                        <p>제3조 (약관의 효력 및 변경)<br/>
                        본 약관은 학원 내 게시 또는 기타의 방법으로 이용자에게 공시함으로써 효력이 발생합니다.</p>
                      </div>
                    </div>
                  )}

                  <label className="checkbox-container">
                    <input 
                      type="checkbox"
                      checked={agreements.privacy}
                      onChange={(e) => handleAgreementChange('privacy', e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    개인정보 처리방침 동의 (필수)
                    <button 
                      type="button" 
                      className="agreement-link"
                      onClick={() => toggleAccordion('privacy')}
                    >
                      보기
                    </button>
                  </label>
                  
                  {accordionStates.privacy && (
                    <div className="accordion-content">
                      <div className="terms-content">
                        <h4>개인정보 처리방침</h4>
                        <p>제1조 (개인정보의 처리목적)<br/>
                        학원은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.<br/>
                        1. 교육 서비스 제공<br/>
                        2. 학습 관리 및 상담<br/>
                        3. 수강료 결제 및 관리</p>
                        
                        <p>제2조 (개인정보의 처리 및 보유기간)<br/>
                        학원은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                      </div>
                    </div>
                  )}

                  <label className="checkbox-container">
                    <input 
                      type="checkbox"
                      checked={agreements.marketing}
                      onChange={(e) => handleAgreementChange('marketing', e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    마케팅 정보 수신 동의 (선택)
                    <button 
                      type="button" 
                      className="agreement-link"
                      onClick={() => toggleAccordion('marketing')}
                    >
                      보기
                    </button>
                  </label>
                  
                  {accordionStates.marketing && (
                    <div className="accordion-content">
                      <div className="terms-content">
                        <h4>마케팅 정보 수신 동의</h4>
                        <p>제1조 (마케팅 정보의 수집 및 이용목적)<br/>
                        학원은 다음의 목적을 위하여 마케팅 정보를 수집하고 이용합니다.<br/>
                        1. 신규 강의 및 프로그램 안내<br/>
                        2. 이벤트 및 할인 혜택 정보 제공<br/>
                        3. 학습 관련 유용한 정보 제공</p>
                        
                        <p>제2조 (마케팅 정보 수신 철회)<br/>
                        마케팅 정보 수신에 대한 동의는 언제든지 철회할 수 있으며, 철회 시에는 해당 목적으로의 개인정보 처리를 중단합니다.</p>
                      </div>
                    </div>
                  )}
                </div>

                {(errors.terms || errors.privacy) && (
                  <span className="error-message">필수 약관에 동의해주세요.</span>
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary signup-button">
              회원가입 완료
            </button>

            <div className="login-link">
              이미 계정이 있으신가요? 
              <Link to="/login"> 로그인</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;