import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase"; // Pastikan path sesuai dengan struktur folder kamu
import { Link } from "react-router-dom";

import { useContext } from "react";
import { SkillContext } from "./SkillContext";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export default function About() {
  const { skills: skillsd } = useContext(SkillContext);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Skills")); // <<< diperbaiki di sini
        const skillData = querySnapshot.docs.map((doc) => doc.data());
        console.log("Fetched skills:", skillData);
        // setSkillsd(skillData);
      } catch (error) {
        console.error("Error fetching skills:", error.code, error.message);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section
      id="about"
      className="w-screen bg-gradient-to-b from-blue-950 to-black text-white p-5 min-h-screen"
    >
      <h1 className="text-center text-white text-5xl font-bold pt-7">
        ABOUT ME
      </h1>
      <div className=" h-2 w-64 rounded-full mx-auto mt-2 shadow-[0_0_10px_#0083ff]"></div>
      <h2 className="text-center text-white text-3xl font-bold mt-2">
        I'm Anwar
      </h2>
      <h2 className="text-center text-white text-lg mt-2 p-1 md:px-20">
        Nice to meet you!! I'm a Frontend Developer, Backend Developer and Web
        Designer. I specialize in building responsive, user-friendly, and
        visually appealing websites tailored to your specific needs.
      </h2>

      <div className="relative flex flex-col justify-center w-full h-full bg-white/10 grayscale-20 mt-20 items-end rounded-2xl ">
        <img
          src="https://i.pinimg.com/736x/57/c3/31/57c331b799cc16e21a13c0870b5962e2.jpg"
          className="absolute top-[-40px] lg:top-[-80px] left-1/2 transform -translate-x-1/2 w-24 h-24 lg:w-40 lg:h-40 rounded-full object-cover mx-auto z-10 "
          alt="Profile"
        />

        <div className="w-full mt-[4rem] lg:mt-[5rem] grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {skillsd.map((item, index) => (
            <div
              key={index}
              className="h-full flex flex-col items-center bg-white/10 border-t border-gray-400 shadow-xl px-10 py-4 rounded-2xl hover:scale-105 hover:bg-black duration-300 ease-in-out"
            >
              <div className="flex align-middle items-center gap-3">
                {item.icon && (
                  <img
                    src={item.icon}
                    className="w-10 h-10 mb-2"
                    alt={item.Category}
                  />
                )}
                <h1 className="text-xl bold">{item.Category}</h1>
              </div>

              {Array.isArray(item.skills) &&
                item.skills.map((skill, idx) => (
                  <div key={idx}>
                    <p className="text-center text-sm">{skill}</p>
                    <hr className="my-1 w-full text-gray-300" />
                  </div>
                ))}
              <div className="mt-auto pt-4">
                <Link
                  to={`/portfolio/${item.Category?.toLowerCase?.() || ""}`}
                  onClick={() => console.log("clicked!")}
                  className="bg-blue-950 rounded-tl-2xl rounded-br-2xl p-2 border-b-2 font-bold hover:scale-110 duration-200 inline-block text-white text-center"
                >
                  Portofolio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
