import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-black fixed w-full bg-opacity-80">
      <div className="container navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-white mr-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-7 z-[1] p-2 shadow-lg bg-white rounded-md w-52 text-black font-medium"
            >
              <li className="mb-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-yellow-700 text-yellow-700"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-yellow-700 text-yellow-700"
                      : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/my_item"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-yellow-700 text-yellow-700"
                      : ""
                  }
                >
                  my favourite item
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-white font-bold md:text-3xl text-xl italic"
          >
            food lover
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-4 text-white font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-2 border-yellow-700 text-yellow-700"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-2 border-yellow-700 text-yellow-700"
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_item"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 pb-2 border-yellow-700 text-yellow-700"
                    : ""
                }
              >
                my favourite item
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <button className="btn-common">login</button>
        </div> */}
        <div className="dropdown dropdown-end btn btn-ghost ms-auto">
          <div tabIndex={0} role="button" className="btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* <img
                alt="Tailwind CSS Navbar component"
                title="name"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              /> */}
              <FaUserCircle
                className="text-white Navbar component text-4xl"
                title="name"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-4 z-[1] px-4 py-2 shadow-lg dropdown-content bg-white rounded-box w-32 flex flex-col gap-1"
          >
            <li>
              <button className="text-yellow-700 font-semibold text-base rounded-md cursor-pointer">
                Logout
              </button>
            </li>
            <li>
              <Link className="text-yellow-700 font-semibold text-base rounded-md cursor-pointer">
                user details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
