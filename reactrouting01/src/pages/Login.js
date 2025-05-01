import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    alert('ล็อกอินสำเร็จ');
    navigate('/', { state: { msg: 'ยินดีต้อนรับกลับบ้าน!' } });
  };

  return (
    <div className="page-container">
      <h1>🔐 เข้าสู่ระบบ</h1>
      {location.state && <p className="info-msg">📝 {location.state.msg}</p>}

      <button onClick={handleLogin} className="main-btn">เข้าสู่ระบบ</button>
      <br /><br />
      <button className="back-btn" onClick={() => navigate('/')}>
        ⬅️ ย้อนกลับหน้า Home
      </button>
    </div>
  );
}

export default Login;
