import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = () => {
    alert('สมัครสมาชิกสำเร็จ');
    navigate('/login', { state: { msg: 'สมัครสำเร็จ กรุณาล็อกอิน' } });
  };

  return (
    <div className="page-container">
      <h1>📝 สมัครสมาชิก</h1>
      {location.state && <p className="info-msg">🗨️ {location.state.msg}</p>}

      <button onClick={handleRegister} className="main-btn">สมัครสมาชิก</button>
      <br /><br />
      <button className="back-btn" onClick={() => navigate('/')}>
        ⬅️ ย้อนกลับหน้า Home
      </button>
    </div>
  );
}

export default Register;
