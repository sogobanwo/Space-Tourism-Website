import React, { FC, useState } from "react";
import logo from "../imageAsset/shared/logo.svg";
import hamburger from "../imageAsset/shared/icon-hamburger.svg";
import closeIcon from "../imageAsset/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

type Props = {};

const Header: FC = (props: Props) => {
  const [sideNav, setSideNav] = useState(false);
  const handleSideNav = () => {
    setSideNav(!sideNav);
  };

  const active = "text-center text-xl text-slate-300 border-b-2 font-robotoCondensed";
  const notActive = "text-center text-xl text-slate-300 font-robotoCondensed";
  const activeMobile = "hidden";
  const notActiveMobile =
    "p-4 flex just items-center space-x-4 text-2xl border-b-2 border-lightGrey cursor-pointer font-robotoCondensed";
  return (
    <div className="flex justify-between items-center mx-6 pt-6 pb-2 md:ml-8 md:mr-0 lg:pt-4">
      <img src={logo} alt="logo" />
      <img
        src={hamburger}
        alt="hamburger"
        className={sideNav ? "hidden" : "md:hidden"}
        onClick={handleSideNav}
      />
      <img
        src={closeIcon}
        alt="closeIcon"
        className={sideNav ? "md:flex" : "hidden"}
        onClick={handleSideNav}
      />
      <div className="hidden md:flex w-[70%]  lg:w-[90%] items-center">
        <hr className="hidden lg:flex w-[35%] h-1/2 rounded-sm bg-TextColor1 -mr-[5%] z-10" />
        <div className="hidden md:flex h-16 w-[100%] bg-TextColor1 backdrop-blur-md lg:w-[70%] items-center justify-evenly">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <span className="sm:hidden lg:inline text-2xl text-slate-50 font-robotoCondensed">
              00
            </span>{" "}
            HOME
          </NavLink>

          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <span className="sm:hidden lg:inline text-2xl text-slate-50 font-robotoCondensed">
              01
            </span>{" "}
            DESTINATION
          </NavLink>

          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <span className="sm:hidden lg:inline text-2xl text-slate-50 font-robotoCondensed">
              02
            </span>{" "}
            CREW
          </NavLink>

          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            <span className="sm:hidden lg:inline text-2xl text-slate-50 font-robotoCondensed">
              03
            </span>{" "}
            TECHNOLOGY
          </NavLink>
        </div>
      </div>
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[70%] h-full border-r-2 bg-gray-800 text-white border-lightGrey z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={logo} alt="logo" className="mx-4 py-4" />

        <ul className="pt-12">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeMobile : notActiveMobile
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeMobile : notActiveMobile
            }
            to="/destination"
          >
            DESTINATION
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeMobile : notActiveMobile
            }
            to="/crew"
          >
            CREW
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeMobile : notActiveMobile
            }
            to="/technology"
          >
            TECHNOLOGY
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
