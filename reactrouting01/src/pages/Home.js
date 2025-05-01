import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  const goToPage = (path, message) => {
    navigate(path, { state: { msg: message } });
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา!</h1>
        <p>บริการของเรามีหลากหลายให้คุณเลือกใช้</p>
      </div>
      
      <div className="home-buttons">
        <button className="home-btn" onClick={() => goToPage('/contact', 'มาจากหน้า Home')}>
          ไปหน้า Contact
        </button>
        <button className="home-btn" onClick={() => goToPage('/login', 'กรุณาล็อกอินก่อน')}>
          ไปหน้า Login
        </button>
        <button className="home-btn" onClick={() => goToPage('/register', 'กรุณาสมัครสมาชิกก่อน')}>
          ไปหน้า Register
        </button>
      </div>
      
      <div className="home-footer">
        <p>© 2025 Website by Your Company</p>
      </div>
    </div>
  );
}

export default Home;
