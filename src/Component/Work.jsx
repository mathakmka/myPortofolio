const recentWork = [
  {
    name: "Weather Report",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
  },
  {
    name: "Analysis",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 2,
  },
  {
    name: "Visualisation",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://plus.unsplash.com/premium_photo-1669898621766-c5e469ebf3fe?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 3,
  },
  {
    name: "Computing",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 4,
  },
  {
    name: "Presentation",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 5,
  },
  {
    name: "Discussion",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://plus.unsplash.com/premium_photo-1679547203037-6792f7fce8fb?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 6,
  },
  {
    name: "Writing Article",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://plus.unsplash.com/premium_photo-1750859860300-a53f5ccbfcd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 7,
  },
  {
    name: "Tour Guide",
    description: "Aplikasi yang menampilkan cuaca saat ini",
    img: "https://plus.unsplash.com/premium_photo-1718146018997-a1059f9f9420?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 8,
  },
];
import { useState } from "react";


export default function Work() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section
      id="work"
      className="w-screen min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black justify-center p-0 text-white"
    >
      {/* Header */}
      <div className="items-center rounded-b-4xl justify-center w-screen h-[6rem] md:p-5 bg-black shadow-lg shadow-cyan-500/50 border-1 border-black mb-7">
        <div className="text-4xl font-bold text-white mx-auto text-center relative z-10 bg-black ">
          <h1 className="mt-5 mb-10">My Recent Work</h1>
        </div>
        <div className="flex justify-center items-center w-[18rem] h-[0.5rem] mt-3 bg-sky-500 mx-auto rounded-4xl relative z-10 drop-shadow-[0_0_10px_#3b82f6]" />
      </div>

      {/* Detail View */}
      {selectedWork ? (
        <div className="flex flex-col items-center px-4">
          <img
            src={selectedWork.img}
            alt={selectedWork.name}
            className="w-[90%] md:w-[40rem] h-[20rem] object-cover rounded-lg mb-5"
          />
          <h1 className="text-3xl font-bold mb-3">{selectedWork.name}</h1>
          <p className="text-gray-300 text-lg text-center max-w-xl">
            {selectedWork.description}
          </p>
          <button
            onClick={() => setSelectedWork(null)}
            className="mt-6 bg-blue-600 hover:bg-blue-900 px-5 py-2 rounded-lg text-white font-semibold"
          >
            ← Back
          </button>
        </div>
      ) : (
        // List View
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 justify-center p-4">
          {recentWork.map((work) => (
            <div
              key={work.id}
              className="h-[20rem] relative z-10 flex flex-col items-center p-3 rounded-lg drop-shadow-lg hover:scale-105 duration-150 ease-linear backdrop-blur-3xl bg-gray-400/30"
            >
              <img
                src={work.img}
                className="h-[6rem] w-full object-cover rounded-t-lg flex-none"
                alt={work.name}
              />
              <h1 className="font-bold text-white my-2 flex-none">
                {work.name}
              </h1>
              <div className="grow">
                <p className="text-gray-200 font-medium">
                  {work.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedWork(work)}
                className="bg-blue-600 text-white px-5 rounded-br-lg rounded-tl-lg mt-2 hover:scale-105 hover:rounded-lg hover:bg-blue-900 hover:font-bold"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

