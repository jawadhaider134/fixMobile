import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Mobile() {
  const { company } = useParams(); // get company from route
  const companies = [
    { name: "iPhone", slug: "iphone", logo: "/src/assets/Apple.svg" },
    { name: "Samsung", slug: "samsung", logo: "/src/assets/samsung.svg" },
    { name: "Xiaomi", slug: "xiaomi", logo: "/src/assets/Xiaomi.svg" },
    { name: "OnePlus", slug: "oneplus", logo: "/src/assets/OnePlus.svg" },
    { name: "Vivo", slug: "vivo", logo: "/src/assets/Sony.svg" },
    { name: "Nokia", slug: "nokia", logo: "/src/assets/Nokia.svg" },
    { name: "Motorola", slug: "motorola", logo: "/src/assets/Motorola.svg" },
    { name: "LG", slug: "LG", logo: "/src/assets/LG.svg" },
    { name: "Google", slug: "google", logo: "/src/assets/Google.svg" },
  ];

  const [selectedCompany, setSelectedCompany] = useState(company || null);

  useEffect(() => {
    // Update selectedCompany if route changes
    if (company) setSelectedCompany(company);
  }, [company]);

  // Example product data
  const products = {
    iphone: ["iPhone 14", "iPhone 14 Pro", "iPhone 13"],
    samsung: ["Samsung S23", "Samsung Note 20", "Samsung A52"],
    xiaomi: ["Xiaomi Mi 13", "Redmi Note 12", "Poco X4"],
    oneplus: ["OnePlus 11", "OnePlus Nord 3"],
    vivo: ["Vivo X90", "Vivo V27"],
    nokia: ["Nokia 3310", "Nokia X20"],
    motorola: ["Motorola Edge", "Motorola G82"],
    lg: ["LG Velvet", "LG Wing"],
    google: ["Google Pixel 8", "Pixel 7a"],
  };

  return (
    <div className="px-6 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Click the logo that you want
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {companies.map((comp) => (
          <div
            key={comp.slug}
            className={`w-20 h-20 flex items-center justify-center rounded-xl shadow-md border cursor-pointer transition-all duration-300 ${
              selectedCompany === comp.slug
                ? "border-cyan-400 shadow-xl"
                : "border-gray-200 bg-white dark:bg-gray-800"
            }`}
            onClick={() => setSelectedCompany(comp.slug)} // only changes products
          >
            <Link to={`/mobiles/${comp.slug}`} className="w-full h-full flex items-center justify-center">
              <img
                src={comp.logo}
                alt={comp.name}
                className="w-12 h-12 object-contain"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {selectedCompany &&
          products[selectedCompany]?.map((product, i) => (
            <div
              key={i}
              className="w-full max-w-xs p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-center">{product}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
