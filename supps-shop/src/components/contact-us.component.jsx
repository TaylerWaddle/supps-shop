const ContactUs = () => {
  return (
    <div className="relative flex h-fit w-full items-center justify-center bg-zinc-900/95 py-32 font-zain lg:px-20">
      <div className="flex h-fit w-fit flex-col items-center justify-evenly rounded-3xl bg-zinc-900">
        <span className="py-16 text-5xl font-medium text-yellow-500/95 sm:px-24 md:px-48">
          Contact Us
        </span>
        <form className="flex h-fit w-1/4 flex-col items-center justify-center rounded-r-3xl bg-zinc-900 pb-16">
          <input
            type="text"
            placeholder="First Name"
            className="mb-3 block w-80 rounded border-0 pb-1 pl-2 pt-1.5 text-xl text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="mb-3 block w-80 rounded border-0 pb-1 pl-2 pt-1.5 text-xl text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="mb-3 block w-80 rounded border-0 pb-1 pl-2 pt-1.5 text-xl text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2"
          ></input>
          <textarea
            type="textfield"
            placeholder="Questions or Concerns"
            className="mb-3 block min-h-32 w-80 rounded border-0 py-1.5 pl-2 text-xl text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2"
          ></textarea>
          <div className="flex w-80 justify-center">
            <button
              type="submit"
              className="mt-1.5 w-full rounded-md bg-yellow-500/95 px-3 pb-1.5 pt-2 text-xl font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500/85 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
