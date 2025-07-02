import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const snapshot = await getDocs(collection(db, "Skills"));
        const data = snapshot.docs.map((doc) => doc.data());
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error.message);
      }
    };
    fetchSkills();
  }, []);

  return (
    <SkillContext.Provider value={{ skills }}>
      {children}
    </SkillContext.Provider>
  );
};
