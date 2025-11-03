import React from "react";
import Ab1 from "../assets/About-1.webp";
import Footer from "./Footer";

export default function About() {
  const sections = [
    {
      title: "Hvem vi er",
      desc: "FixNow er et fullservice reparasjonsfirma for elektronikk som er dedikert til å bringe enhetene dine tilbake til topp ytelse med hastighet, pålitelighet og ærlighet.",
      img: Ab1,
      reverse: false,
    },
    {
      title: "Vår misjon",
      desc: "Vi tror på å gi kundene våre enheter som fungerer feilfritt – så du slipper å bekymre deg for at teknologien svikter. Ekte deler, sertifiserte teknikere, rask levering.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      reverse: true,
    },
    {
      title: "Vår visjon",
      desc: "Å være den mest pålitelige reparasjonspartneren for alle – støttet av gjennomsiktig prising, fremragende kundeservice og en garanti du kan stole på.",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
      reverse: false,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-blue-600 dark:text-blue-400 leading-tight">
          Om FixNow
        </h1>
        <p className="max-w-3xl mx-auto text-lg lg:text-xl text-gray-700 dark:text-gray-300">
          Vi reparerer enhetene dine raskt og pålitelig. Vårt ekspertteam bruker ekte deler for å gi teknologien din et nytt liv.
        </p>
      </section>

      {/* Sections */}
      <div className="space-y-32 mb-5">
        {sections.map((sec, idx) => (
          <section
            key={idx}
            className={`max-w-6xl mx-auto px-6 lg:px-16 flex flex-col ${
              sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12 lg:gap-16`}
          >
            <div className="lg:w-1/2 relative group">
              <img
                src={sec.img}
                alt={sec.title}
                className="rounded-3xl shadow-2xl w-full object-cover transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">
                {sec.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl leading-relaxed">
                {sec.desc}
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <section className="py-24 px-6 lg:px-16 text-center bg-white dark:bg-gray-900 border-t mt-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6">
          Klar til å komme i gang?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl mb-10">
          Ta kontakt i dag, så håndterer vi reparasjonen av enheten din med omsorg og hastighet.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transform transition hover:scale-105 duration-300">
          Kontakt oss
        </button>
      </section>
      <Footer />
    </div>
  );
}
