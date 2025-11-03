import React from "react";
import { Phone, Clock } from "lucide-react";

export default function Banner() {
  return (
    <div className="hidden md:flex bg-blue-600 text-white py-2 px-6 items-center justify-center gap-6 text-base">
      {/* Phone section */}
      <div className="flex items-center gap-2">
        <Phone className="w-5 h-5" />
        <span>+1 (555) 123-4567</span>
      </div>

      {/* Divider */}
      <div className="border-l border-white h-5"></div>

      {/* Working hours section */}
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5" />
        <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
      </div>
    </div>
  );
}
