import { Smartphone, Battery, Droplet, Wrench, CheckCircle } from "lucide-react";
import HeroImg from "../assets/hero-image.png"

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
    { name: "Ali Khan", text: "My iPhone screen was fixed in under 30 minutes. Highly recommend!" },
    { name: "Sara Rahimi", text: "Professional and quick service. My Samsung works perfectly now." },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
     <section className="relative text-white overflow-hidden bg-black">
      {/* Gray circular glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#3a3a3a] to-transparent rounded-full blur-[160px] opacity-60 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={HeroImg}
            alt="Electronic Devices"
            className="max-w-[90%] md:max-w-[85%] relative z-10"
          />
        </div>

        {/* Right (Text + CTA) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fast & Reliable <br /> Device Repairs
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            We repair phones, tablets, laptops, and more — restoring your tech
            to perfect working condition quickly and affordably.
          </p>
          <p className="text-gray-400">
            Trust our expert technicians for professional service.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Get a Free Quote
          </button>
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
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic mb-4">"{t.text}"</p>
              <span className="font-semibold text-gray-800 dark:text-gray-100">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
