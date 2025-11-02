import { useState, useEffect } from "react";
import { Star , ArrowLeft, ArrowRight} from "lucide-react";

export default function Testimonials() {
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
    },
  ];

  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Update slidesPerView based on screen size
  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = testimonials.length - slidesPerView;

  const prevSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

      <div className="relative">
        {/* Slider container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${(100 / slidesPerView) * current}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-full md:w-1/2 px-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg h-full flex flex-col">
                  {/* Photo & Name */}
                  <div className="flex items-center mb-4">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {t.name}
                    </h3>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-5 h-5 mr-1 ${
                          idx < t.rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="italic text-gray-700 dark:text-gray-300 mt-auto">
                    "{t.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons moved outside overflow-hidden */}
        <div className="absolute top-1/2 left-[-80px] transform -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-lg"
          >
             <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-[-80px] transform -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow-lg"
          >
             <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
