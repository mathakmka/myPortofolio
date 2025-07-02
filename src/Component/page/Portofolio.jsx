import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SkillContext } from "../SkillContext";

export default function Portfolio() {
  const { category } = useParams();
  const { skills } = useContext(SkillContext);

  if (!skills || skills.length === 0) {
    return (
      <section className="text-white p-10 min-h-screen bg-black">
        <p className="text-center text-gray-400">Loading skills...</p>
      </section>
    );
  }

  let selectedCategory = null;
  if (skills.length > 0 && category) {
    selectedCategory = skills.find(
      (item) => item.Category?.toLowerCase() === category.toLowerCase()
    );
  }

  return (
    <section className="text-white p-10 min-h-screen bg-black">
      <h1 className="text-3xl font-bold text-center mb-6">
        Portfolio - {category}
      </h1>

      {selectedCategory ? (
        <div className="bg-white/10 p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-2">
            {selectedCategory.Category}
          </h2>
          <ul className="list-disc list-inside text-sm">
            {selectedCategory.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-red-400">
          Kategori <b>{category}</b> tidak ditemukan.
        </p>
      )}
    </section>
  );
}
