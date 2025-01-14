import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="Logo" className="w-auto h-16" />
              </Link>
              <span className="flex items-center gap-1 ml-2 text-sm font-medium text-gray-500">
                <FaMinus color="#6b7280" size={10} />
                ADMIN
              </span>
            </div>
            <nav className="ml-6 space-x-6">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                Homepage
              </Link>
              <Link
                to="/candidates"
                className="text-violet-600 border-gray-300  border-2 rounded-full font-medium py-1 px-8"
              >
                Candidates
              </Link>
              <Link
                to="/positions"
                className="text-gray-500 hover:text-gray-700"
              >
                Positions
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img
                src={Profile}
                alt="Profile"
                className="h-16 w-16 rounded-full"
              />
              <span className="ml-2 font-medium text-gray-900">Jhon</span>
            </div>
            <select className="text-sm font-medium border-none rounded-2xl bg-gray-200 p-2 pr-px">
              <option>EN</option>
              <option>FR</option>
              <option>ES</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
