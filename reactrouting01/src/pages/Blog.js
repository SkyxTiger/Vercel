import React, { useState, useEffect } from 'react';
import '../App.css';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // จำลองข้อมูลบทความ (สามารถเปลี่ยนเป็น fetch จาก API จริงได้)
    const demoPosts = [
      {
        id: 1,
        title: '5 เทคนิคการเลือกซื้อสินค้าออนไลน์ให้ปลอดภัย',
        content: 'การซื้อของออนไลน์ในปัจจุบันได้รับความนิยมอย่างมาก...',
        author: 'admin',
        date: '1 พฤษภาคม 2025',
      },
      {
        id: 2,
        title: 'เทรนด์อีคอมเมิร์ซมาแรงปี 2025',
        content: 'ธุรกิจออนไลน์กำลังเปลี่ยนแปลงอย่างรวดเร็วในปี 2025...',
        author: 'marketing team',
        date: '20 เมษายน 2025',
      },
      {
        id: 3,
        title: 'วิธีดูแลรักษาสินค้าที่ซื้อมาใหม่',
        content: 'หลังจากที่คุณซื้อสินค้าใหม่มาแล้ว ควรดูแลรักษาอย่างไร...',
        author: 'admin',
        date: '10 เมษายน 2025',
      },
    ];

    setPosts(demoPosts);
  }, []);

  return (
    <div className="blog-container">
      <h2>บทความล่าสุด</h2>
      <div className="blog-list">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-meta">🖋 {post.author} | 📅 {post.date}</p>
            <p className="blog-content">{post.content}</p>
            <button className="read-more-btn">อ่านเพิ่มเติม</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
