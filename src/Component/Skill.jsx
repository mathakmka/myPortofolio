import { useEffect, useRef, useState } from "react";
// Skill (name, bar, and color)
const skills = [
  {
    Name: "ReactJS",
    value: 80,
    color: "text-blue-400",
    bgColor: "bg-blue-400",
    shadow: "shadow-[0_0px_10px_#60A5FA]",
    pict: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    Name: "VueJS",
    value: 70,
    color: "text-green-500",
    bgColor: "bg-green-500",
    shadow: "shadow-[0_0px_10px_#22C55E]",
    pict: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    Name: "Tailwind",
    value: 90,
    color: "text-blue-700",
    bgColor: "bg-blue-700",
    shadow: "shadow-[0_0px_10px_#1D4ED8]",
    pict: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
  },
  {
    Name: "Bootstrap",
    value: 85,
    color: "text-indigo-600",
    bgColor: "bg-indigo-600",
    shadow: "shadow-[0_0px_10px_#4F46E5]",
    pict: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },
];

export default function Skill() {
  const skillRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      const section = skillRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;

      setScrollTriggered(isVisible);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Ganti gambar tiap 3 detik

    return () => clearInterval(interval); // Bersihkan saat komponen dilepas
  }, []);
  return (
    <section
      id="skill"
      ref={skillRef}
      className="relative justify-center align-middle w-screen md:h-[35rem] bg-[url(https://images.unsplash.com/photo-1662019307725-d00a4c4011f6?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] md:px-5 m-auto"
    >
      {/* Vignette Atas */}
      <div className="absolute top-0 left-0 w-full h-100 bg-gradient-to-b from-black/100 to-transparent z-10 pointer-events-none" />

      {/* Vignette Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-black/100 to-transparent z-10 pointer-events-none" />

      {/* Wrapper konten agar tetap di tengah */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center h-full gap-5 ">
        <div className="relative flex-row md:flex backdrop-blur-md md:bg-gray-100/10 md:drop-shadow-[0rem_2rem_5rem_rgba(0,0,0,0.8)] w-screen h-full md:h-[25rem] my-auto ml-auto mr-auto md:border-b-2 border-b-blue-800 rounded-b-2xl p-0 ">
          {/* Gambar Slider */}
          {/* Gambar Slider */}
          <div className="w-full md:w-1/2 flex justify-center items-center drop-shadow-[0_0_10px_#0083ff]">
            <div className="slider h-20 md:w-full md:h-80 overflow-hidden rounded-bl-2xl rounded-tr-2xl flex align-middle items-center justify-center">
              {skills.map((skill, index) => (
                <img
                  key={skill.Name}
                  src={skill.pict}
                  alt={skill.Name}
                  className={`absolute h-20 md:h-80 object-contain transition-opacity duration-500 ease-in-out ${
                    index === currentImageIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Teks & Skill Bars */}
          <div className="flex flex-col md:w-1/2 px-4 align-middle justify-center ">
            <h1 className="text-3xl font-bold text-blue-100 md:text-blue-100 text-center md:text-left mb-10 drop-shadow-[0_0_10px_#0083ff]">
              My Framework Skills
            </h1>

            {/*bar*/}
            <div className="">
              {skills.map((skill) => (
                <div
                  key={skill.Name}
                  className={`grid grid-cols-3 h-7 gap-3 my-2 mt-3 ${skill.color}`}
                >
                  <h2 className="col-span-1 font-bold">{skill.Name}</h2>
                  <div className={`col-span-2 rounded-xl p-1 ${skill.shadow}`}>
                    <div
                      style={{
                        width: scrollTriggered ? `${skill.value}%` : "0%",
                        transition: "width 1s ease-in-out",
                      }}
                      className={`h-full rounded-xl ${skill.bgColor}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
