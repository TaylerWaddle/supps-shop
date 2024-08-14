const ContactUs = () => {
  return (
    <div className="flex h-fit w-full items-center justify-center bg-zinc-200 pb-32 pt-32">
      {/* Contact Us Header */}
      <div className="flex h-96 w-1/4 items-center justify-center rounded-l-3xl bg-zinc-900">
        <span className="text-4xl text-yellow-500">Contact Us</span>
      </div>
      {/* Form */}
      <form className="flex h-3/4 h-96 w-1/4 flex-col items-center justify-center rounded-r-3xl bg-zinc-400 bg-opacity-50">
        <input
          type="text"
          placeholder="First Name"
          className="mb-3 w-80 rounded"
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          className="mb-3 w-80 rounded"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-80 rounded"
        ></input>
        <textarea
          type="textfield"
          placeholder="Questions or Concerns"
          className="mb-3 min-h-40 w-80 rounded"
        ></textarea>
      </form>
    </div>
  );
};

export default ContactUs;
