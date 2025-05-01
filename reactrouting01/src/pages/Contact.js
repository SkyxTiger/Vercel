import React, { useState } from 'react';
import '../App';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ส่งข้อมูลหรือเชื่อม API ได้ที่นี่
    alert('ขอบคุณที่ติดต่อเรา!\nเราจะติดต่อกลับโดยเร็วที่สุด');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>ติดต่อเรา</h2>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="ชื่อของคุณ"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="อีเมลของคุณ"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="ข้อความของคุณ"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">ส่งข้อความ</button>
        </form>

        <div className="contact-info">
          <h3>ข้อมูลติดต่อ</h3>
          <p>📍 ที่อยู่: 123 ถนนสุขุมวิท กรุงเทพฯ</p>
          <p>📞 โทร: 02-123-4567</p>
          <p>✉️ อีเมล: support@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
