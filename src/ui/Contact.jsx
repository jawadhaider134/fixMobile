import React from "react";
import { Mail, Home, Phone } from "lucide-react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed">
            Have any questions or need assistance? Reach out to us via email, phone, or visit our office. We’re here to help!
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-lg">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>support@fixnow.com</span>
            </div>
            {/* Address */}
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-lg">
              <Home className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>123 Main Street, Kabul, Afghanistan</span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-lg">
              <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>+1 905-123-4567</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="space-y-6">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transform transition hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}
