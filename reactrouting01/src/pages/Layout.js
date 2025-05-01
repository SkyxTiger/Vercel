import { Outlet, Link } from 'react-router-dom';
import '../App.css';

function Layout() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-left">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>

        <ul className="nav-right">
          <li><Link to="/Register">Register</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
