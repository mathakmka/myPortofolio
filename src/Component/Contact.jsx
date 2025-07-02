import emailjs from "emailjs-com";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" w-screen h-full flex flex-col flex-wrap justify-center items-center p-5 bg-black"
    >
      <h1 className="mb-5 text-4xl font-bold text-blue-100 drop-shadow-[0_0_10px_#3b82f6]">
        CONTACT ME
      </h1>

      <main className="flex flex-col w-[95%] md:flex-row md:w-[50rem] order items-stretch justify-center min-h-[30rem] bg-blue-500/30 border-r-2 border-blue-500 rounded-lg shadow-lg shadow-blue-400">
        {/* FORM */}
        <div
          id="contactForm"
          className="w-[100%] md:w-[50rem] bg-white p-5 rounded-lg drop-shadow-2xl overflow-hidden transition-all duration-1000 z-10 flex flex-col justify-between "
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              emailjs
                .sendForm(
                  "service_ipbmxu8", // Service ID EmailJS
                  "template_b6rh3uu", // Template ID EmailJS
                  e.target,
                  "EzewyEFKW8st0J9xt" // Public Key EmailJS
                )
                .then(
                  (result) => {
                    alert("Succees");
                    console.log(result.text);
                  },
                  (error) => {
                    alert("Failed !!");
                    console.log(error.text);
                  }
                );
              e.target.reset();
            }}
            className="flex flex-col h-full justify-between"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-blue-900 font-bold mt-3"
              >
                Full Name
              </label>
              <input
                name="from_name"
                type="text"
                placeholder="name"
                className="w-full p-2 rounded-lg"
                required
              />

              <label
                htmlFor="email"
                className="block text-blue-900 font-bold mt-3"
              >
                E-mail
              </label>
              <input
                name="reply_to"
                type="email"
                placeholder="e-mail"
                className="w-full p-2 rounded-lg"
                required
              />

              <label
                htmlFor="message"
                className="block text-blue-900 font-bold mt-3"
              >
                Message
              </label>
              <textarea name="message" placeholder="Type your message here ..." className="w-full p-2 rounded-lg resize-none" required></textarea>
            </div>

            <button
              id="send"
              type="submit"
              className="w-[10rem] h-[3rem] bg-blue-600 text-white px-5 rounded-br-lg rounded-tl-lg mt-2 hover:scale-110 hover:rounded-lg hover:bg-blue-900 hover:font-bold self-center transition-all ease-in-out duration-400"
            >
              Send
            </button>
          </form>
        </div>

        {/* PROFIL */}
        <div className="flex md:flex-col items-center justify-center p-5 gap-4 rounded-lg drop-shadow-2xl ">
          <div className="">
            <img
              src="https://i.imgur.com/Wp7j4PO.png"
              className="md:w-40 md:h-40 w-20 h-20 drop-shadow-[0_0_10px_#0083ff] object-cover object-top"
              alt="Profile"
            />
          </div>
          <div className="text-center ">
            <h1 className="text-blue-800 font-bold">Email me at:</h1>
            <p className="text-white ">mathakmka@gmail.com</p>
          </div>
        </div>
      </main>
    </section>
  );
}
