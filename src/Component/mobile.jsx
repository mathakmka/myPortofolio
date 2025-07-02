export default function Mobile() {
  return (
    <div
      id="mobile"
      class=" max-h-0 overflow-hidden transition-[max-height] duration-2000 ease-in-out bg-red-200 py-0 flex flex-col items-center space-y-3 font-bold lg:hidden"
    >
      <button
        onclick="window.location.href='#about';"
        class="btn-nav block text-blue-950 w-full hover:bg-blue-300 hover:scale-110 duration-200 ease-in-out m-0 "
      >
        About
      </button>
      <button
        onclick="window.location.href='#skill';"
        class="btn-nav block text-blue-950 w-full   hover:bg-blue-300 hover:scale-110 duration-200 ease-in-out m-0 "
      >
        Skills
      </button>
      <button
        onclick="window.location.href='#work';"
        class="btn-nav block text-blue-950 w-full   hover:bg-blue-300 hover:scale-110 duration-200 ease-in-out m-0 "
      >
        Work
      </button>
      <button
        onclick="window.location.href='#contact';"
        class="btn-nav block text-blue-950 w-full hover:bg-blue-300 hover:scale-110 duration-200 ease-in-out m-0 "
      >
        Contact
      </button>
      <button class=" w-full  hover:bg-blue-300 hover:scale-110 duration-200 m-0 ease-in-out">
        Send E-mail
      </button>
    </div>
  );
}
