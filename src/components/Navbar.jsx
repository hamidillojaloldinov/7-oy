import Logo from "../assets/home/desktop/audiophile.png";
import { Link } from "react-router-dom";  
import shop from "../assets/home/desktop/Combined-Shape.png";
function Navbar() {
  return (
      <nav className="border-b-2 border-slate-300 pt-8 pb-9 flex items-center justify-between h-7 w-[1110px] mx-auto">
        <Link to="/">
        <img src={Logo} alt="Logo" />
        </Link>
        <div className="links flex gap-8">
          <Link to="/" className="hover:text-[#d87D4A] link">
            HOME
          </Link>
          <Link to="/headphones" className="hover:text-[#d87D4A] link">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="hover:text-[#d87D4A] link">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="hover:text-[#d87D4A] link">
            EARPHONES
          </Link>
        </div>
        <Link className="link hover:text-[#d87D4A]" to="/trash">
        <img className="hover:text-[#d87D4A]  " src={shop} alt="Shop" />
        </Link>
      </nav>
  );
}

export default Navbar;
