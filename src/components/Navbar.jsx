import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="logo">Makeup by Rediet</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact" className="btn">Book</Link>
      </div>
    </nav>
  );
}
