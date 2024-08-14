const ContactUs = () => {
  return (
    <div className="flex h-fit w-full items-center justify-center bg-zinc-800 py-32">
      <div className="flex h-fit w-fit flex-col items-center justify-evenly rounded-3xl bg-zinc-900">
        <span className="py-16 text-4xl text-yellow-500 sm:px-24 md:px-48">
          Contact Us
        </span>
        <form className="flex h-fit w-1/4 flex-col items-center justify-center rounded-r-3xl bg-zinc-900 pb-16">
          <input
            type="text"
            placeholder="First Name"
            className="mb-3 block w-80 rounded rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="mb-3 block w-80 rounded rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="mb-3 block w-80 rounded rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          ></input>
          <textarea
            type="textfield"
            placeholder="Questions or Concerns"
            className="mb-3 block min-h-32 w-80 rounded rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          ></textarea>
          <div className="flex w-80 justify-center">
            <button
              type="submit"
              className="text-md mt-1.5 w-full rounded-md bg-yellow-500 px-3 py-1.5 font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500/85 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
