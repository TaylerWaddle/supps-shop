import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-zinc-800 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full">
          <Link
            to={"/"}
            className="m-0 flex justify-center p-0 text-6xl font-thin text-yellow-500"
          >
            PURE APEX
          </Link>
          <h2 className="mt-10 text-center text-xl leading-9 tracking-tight text-gray-200">
            Sign In To Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-md block leading-6 text-gray-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-md block leading-6 text-gray-200"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-yellow-500 hover:text-yellow-500/85"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500/85 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-200">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-yellow-500 hover:text-yellow-500/85"
            >
              Create an Account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
