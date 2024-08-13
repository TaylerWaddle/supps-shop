import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="z-50 flex h-20 w-full items-center justify-between bg-zinc-800">
        <div className="ml-6">
          <Link
            className="text-4xl font-normal font-thin text-yellow-500 hover:text-yellow-500/85"
            to={"/"}
          >
            PURE APEX
          </Link>
        </div>
        <div className="flex justify-center">
          <Link className="mx-6 text-xl font-normal text-white hover:text-yellow-500">
            Shop
          </Link>
          <Link className="mx-6 text-xl font-normal text-white hover:text-yellow-500">
            Cart
          </Link>
          <Link className="mx-6 text-xl font-normal text-white hover:text-yellow-500">
            Account
          </Link>
          <Link
            className="mx-6 text-xl font-normal text-white hover:text-yellow-500"
            to={"auth"}
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
