import { Smartphone, Battery, Droplet, Wrench, CheckCircle , Laptop ,Tablet, Monitor, Watch, Speaker, Volume2, Gamepad, Camera } from "lucide-react";
import HeroImg from "../assets/hero-image.png"
// import { Star } from "lucide-react";
import Testemonials from "./Testemonials";
import Footer from "./Footer";

export default function Home() {
  // Services data
  const services = [
    {
      title: "Screen Replacement",
      desc: "Cracked or broken screen? We replace it quickly with genuine parts.",
      icon: Smartphone,
    },
    {
      title: "Battery Replacement",
      desc: "Old battery? Get a new one and restore full power.",
      icon: Battery,
    },
    {
      title: "Water Damage Repair",
      desc: "Accidental spill? We fix water damage safely and fast.",
      icon: Droplet,
    },
    {
      title: "Diagnostics",
      desc: "Not sure what's wrong? We diagnose all types of issues.",
      icon: Wrench,
    },
  ];

  // Features data
  const features = [
    "Certified Technicians",
    "Fast & Reliable Repairs",
    "Affordable Pricing",
    "Warranty on Repairs",
  ];

  // Testimonials placeholder
 const testimonials = [
  {
    name: "Sarah Johnson",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "This product is amazing! The quality exceeded my expectations."
  },
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Fantastic service and fast delivery. Highly recommended!"
  },
  {
    name: "Emily Clark",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Absolutely love it! I will definitely buy again."
  },
  {
    name: "Michael Smith",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 4,
    text: "Good quality, prompt support. Happy with my purchase!"
  }
];


  return (
    <>
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
<section
  className="relative bg-[#1f1f1f] text-white overflow-hidden py-16 h-[90vh]"
  style={{
    backgroundImage: `url('/src/assets/divider.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundPosition: "center center", 
  }}
>
  {/* Left glow */}
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#3a3a3a] to-transparent rounded-full blur-[160px] opacity-60 pointer-events-none"></div>

  {/* Content wrapper */}
  <div className="relative container mt-20 mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
    
    {/* Left images hidden on mobile */}
    <div className="w-full md:w-1/2 hidden md:flex justify-center md:justify-start items-end gap-6 mb-10 md:mb-0 relative">
      {/* Laptop */}
      <div className="w-full absolute top-[-334px] left-[-120px]">
        <img
          src="/src/assets/macbook.png"
          alt="Laptop"
          className="w-60 md:w-[40rem] drop-shadow-2xl z-10"
        />
      </div>
      {/* iPad */}
      <div className="absolute right-[-20px] top-[-160px]">
        <img
          src="/src/assets/ipad-pro-p.png"
          alt="iPad"
          className="w-44 md:w-[25rem] drop-shadow-2xl relative -translate-x-8 -translate-y-8 z-20"
        />
      </div>
      {/* iPhone */}
      <div className="absolute top-1 right-[-80px]">
        <img
          src="/src/assets/apple_iphone-1.png"
          alt="iPhone"
          className="w-32 md:w-[20rem] drop-shadow-2xl relative -translate-x-12 -translate-y-12 z-30"
        />
      </div>
    </div>

    {/* Right side */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
      <div>
        <h2 className="text-3xl md:text-2xl font-bold">We fix all electronic devices</h2>
        <p className="text-gray-300 text-sm mt-2">Click on your device to see services and prices</p>
      </div>

      {/* Device icons */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-8">
        {[
          { label: "Mobile", icon: Smartphone },
          { label: "Tablet", icon: Tablet },
          { label: "Laptop", icon: Laptop },
          { label: "PC/Mac", icon: Monitor },
          { label: "Watch", icon: Watch },
          { label: "Sound", icon: Volume2 },
          { label: "Console", icon: Gamepad },
          { label: "Camera", icon: Camera },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#2a2a2a] hover:bg-[#333] p-4 rounded-xl flex flex-col items-center justify-center transition cursor-pointer"
          >
            <item.icon className="w-8 h-8 text-cyan-400 mb-2" />
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Contact button */}
      <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <button className="border border-gray-400 hover:border-cyan-400 hover:text-cyan-400 px-6 py-2 rounded-md transition whitespace-nowrap">
          Contact us
        </button>
        <p className="text-gray-400 text-sm">
          Contact us if your device is not listed here, we are sure we can help you!
        </p>
      </div>
    </div>
  </div>
</section>




      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <s.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <span className="font-semibold text-gray-800 dark:text-gray-100">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testemonials />
    <Footer />
    </div>
    </>
  );
}
