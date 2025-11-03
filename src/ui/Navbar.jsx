import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, ChevronDown, Menu, X, Plus, Minus } from "lucide-react";
import Banner from "./Banner";
import logo from "../assets/logo.png"

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { name: "Hjem", to: "/" },
    { name: "Om oss", to: "/about" },
    {
      name: "Mobiltelefoner",
      dropdown: [
        { name: "iPhone", to: "/mobiles/iphone" },
        { name: "Samsung", to: "/mobiles/samsung" },
        { name: "Xiaomi", to: "/mobiles/xiaomi" },
      ],
    },
    { name: "Kontakt", to: "/contact" },
  ];

  return (
    <>
      <Banner />
      <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex justify-center items-center">
          <span>
              <img src={logo} alt="logo" className="w-12 h-12" />
            </span> Smart Tek Repair
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-gray-700 dark:text-gray-200">
            {menuItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className={`relative ${
                    idx !== menuItems.length - 1
                      ? "border-r border-gray-900 dark:border-white pr-4 mr-4"
                      : "pr-0"
                  }`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to="/mobiles"
                    className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                  >
                    {item.name} <ChevronDown className="w-4 h-4" />
                  </Link>

                  {dropdownOpen && (
                    <div className="absolute bg-white dark:bg-gray-800 mt-2 rounded-lg shadow-lg w-40 z-50">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.to}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.to}
                  className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                    idx !== menuItems.length - 1
                      ? "border-r border-gray-900 dark:border-white pr-4 mr-4"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Dark Mode Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
            </button>

            <button
              className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
              onClick={() => setSidebarOpen(false)}
            >
              FixNow
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 dark:text-gray-200">
            {menuItems.map((item, idx) =>
              item.dropdown ? (
                <div key={idx}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex justify-between items-center w-full font-semibold"
                  >
                    {item.name}
                    {mobileDropdownOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </button>

                  {mobileDropdownOpen && (
                    <div className="flex flex-col ml-4 mt-2 gap-2 animate-fadeIn">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.to}
                          onClick={() => setSidebarOpen(false)}
                          className="hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.to}
                  onClick={() => setSidebarOpen(false)}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
}
