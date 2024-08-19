import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="font-zain z-50 flex h-20 w-full items-center justify-between bg-zinc-800 pt-2">
        <div className="ml-6">
          <Link
            className="text-5xl font-light text-yellow-500 hover:text-yellow-500/85"
            to={"/"}
          >
            PURE APEX
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="mx-6 text-2xl font-medium text-white hover:text-yellow-500"
            to={"shop"}
          >
            Shop
          </Link>
          <Link
            className="mx-6 text-2xl font-medium text-white hover:text-yellow-500"
            to={"cart"}
          >
            Cart
          </Link>
          <Link
            className="mx-6 text-2xl font-medium text-white hover:text-yellow-500"
            to={"sign-in"}
          >
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
