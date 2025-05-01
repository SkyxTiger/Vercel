import { useState, useEffect } from "react";
import '../App'; // สร้างไฟล์ CSS แยกต่างหาก

const UserTest = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapiserver.reactbd.com/nextamazon');
      if (!response.ok) {
        throw new Error(`เกิดข้อผิดพลาด: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>กำลังโหลดข้อมูล...</div>;
  if (error) return <div>เกิดข้อผิดพลาด: {error}</div>;

  return (
    <div className="user-list">
      <h2>รายการสินค้า</h2>
      <div className="product-grid">
        {users.map(user => (
          <div className="product-card" key={user._id}>
            <img src={user.image} alt={user.title} />
            <h3>{user.title}</h3>
            <p className="category">{user.category}</p>
            <p className="price">
              <span className="old-price">฿{user.oldPrice}</span>
              <span className="new-price">฿{user.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTest;
