import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 shadow-inner mt-20 border-t border-gray-900 dark:border-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* About / Logo */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            FixNow
          </Link>
          <p className="text-gray-600 dark:text-gray-400">
            FixNow helps you find the best mobiles and accessories with reviews and great prices.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-pink-500"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
          <Link to="/mobiles/iphone" className="hover:text-blue-600 dark:hover:text-blue-400">iPhone</Link>
          <Link to="/mobiles/samsung" className="hover:text-blue-600 dark:hover:text-blue-400">Samsung</Link>
          <Link to="/mobiles/xiaomi" className="hover:text-blue-600 dark:hover:text-blue-400">Xiaomi</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
        </div>

        {/* Newsletter / Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
          <p className="text-gray-600 dark:text-gray-400">
            Get the latest updates on products and deals.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} FixNow. All rights reserved.
      </div>
    </footer>
  );
}
