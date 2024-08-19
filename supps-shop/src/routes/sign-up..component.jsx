import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="font-zain flex h-screen flex-col items-center justify-center bg-zinc-800 px-6 font-light lg:px-8">
      <Link
        to={"/"}
        className="m-0 flex justify-center p-0 text-7xl font-light text-yellow-500"
      >
        PURE APEX
      </Link>
      <h2 className="mt-5 text-center text-3xl leading-9 tracking-tight text-gray-200">
        Sign Up For A New Account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-3">
          <div>
            <label className="block text-xl leading-6 text-gray-200">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                type="firstname"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-xl leading-6 text-gray-200">
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                type="lastname"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label className="block text-xl leading-6 text-gray-200">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xl leading-6 text-gray-200"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-xl leading-6 text-gray-200">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="passconfirm-passwordword"
                type="passwconfirm-passwordord"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex">
              <input type="checkbox" />
              <p className="pl-3 text-xl text-white">
                I agree to the Terms and Conditions.
              </p>
            </div>
            <div className="flex">
              <input type="checkbox" />
              <p className="pl-3 text-xl text-white">
                Sign Up for Our Monthly Newsletter.
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-yellow-500 px-3 pb-1.5 pt-2 text-2xl font-medium leading-6 text-black shadow-sm hover:bg-yellow-500/85 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
