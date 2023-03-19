import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      This is the header
      <div className="logo">
        <Link to="/">Support Desk</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            LogIn
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;