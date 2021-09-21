/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";



export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-google shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-black text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >

              GDSC BITD
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-yellow-google block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-yellow-google lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/about"
                >
                   About Us
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                    className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="/announcements"
                >
                 ANNOUNCEMENTS
                </a>
              </li>
              <li className="flex items-center">
                <a
                    className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="/events"
                >
                  Events
                </a>
              </li>

              <li className="flex items-center">
                <a
                    className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs  font-bold"
                    href="/blogs"
                >
                 BLOGS
                </a>
              </li>
              <li className="flex items-center">
                <a
                    className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs  font-bold"
                    href="/tools"
                >
                 TOOLS
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/dscbitdeoghar/"
                  target="_blank"
                >
                  <i className="hover:text-blueGray-500 text-black fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/club_bitd"
                  target="_blank"
                >
                  <i className="hover:text-blueGray-500 text-black fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Twitter</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/Developer-Student-Club-BIT-Deoghar"
                  target="_blank"
                >
                  <i className="hover:text-blueGray-500 text-black fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
