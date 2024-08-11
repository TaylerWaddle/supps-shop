import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="z-50 flex h-20 w-full items-center justify-between bg-zinc-200">
        <div className="ml-6">
          <h1 className="text-4xl font-normal text-black">PURE APEX</h1>
        </div>

        {/* <div className="justify-self-end">
          <Link className="ml-6 mr-6 text-2xl font-normal">Shop</Link>
        </div> */}
        <div className="flex justify-center">
          <Link className="mx-6 text-2xl font-normal">Shop</Link>
          <Link className="mx-6 text-2xl font-normal">Cart</Link>
          <Link className="mx-6 text-2xl font-normal">Account</Link>
        </div>

        {/* <div className="-mr-8 flex w-60 justify-center">
          <Link className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </Link>
          <Link className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
            </svg>
          </Link>
        </div> */}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
