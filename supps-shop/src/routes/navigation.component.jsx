import { Link, Outlet } from "react-router-dom";
import { Fragment, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/MenuSvg";

const Navigation = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll(false);
    } else {
      setOpenNavigation(true);
      disablePageScroll;
    }
  };

  const handleClick = () => {
    if (!openNavigation) {
      enablePageScroll(true);
      setOpenNavigation(false);
    }
  };
  return (
    <Fragment>
      <div className="fixed left-0 top-0 z-50 flex h-20 min-w-full items-center justify-between bg-zinc-950/80 pt-2 font-zain">
        <div className="ml-6">
          <Link
            className="text-5xl font-light text-yellow-500 hover:text-yellow-500/85"
            to={"/"}
            onClick={handleClick}
          >
            PURE APEX
          </Link>
        </div>
        <div className="hidden justify-center lg:flex">
          <Link
            className="mx-6 text-2xl font-medium text-white hover:text-yellow-500"
            to={"shop"}
            onClick={handleClick}
          >
            Shop
          </Link>
          <Link
            className="mx-6 text-2xl font-medium text-white hover:text-yellow-500"
            to={"cart"}
            onClick={handleClick}
          >
            Cart
          </Link>
          <Link
            className="mx-6 text-2xl font-medium text-white hover:text-yellow-500"
            to={"sign-in"}
            onClick={handleClick}
          >
            Sign-In
          </Link>
        </div>
        <button onClick={toggleNavigation} className="ml-auto px-3 lg:hidden">
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
