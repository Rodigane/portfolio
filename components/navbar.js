import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { MenuIcon } from "@heroicons/react/solid";

const navigation = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "My work",
    link: "/#works",
  },
  {
    page: "About",
    link: "/about",
  },
];
export default function Navbar() {
  const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className="text-white self-center min-w-fit   ">
        GELLENONCOURT Thibaut
      </div>
      <div className="text-gray-300 mr-3 hidden lg:block  ">
        {navigation.map((nav) => (
          <Link key={nav.page} href={nav.link}>
            <a className="mr-6 hover:text-gray-500">{nav.page}</a>
          </Link>
        ))}
        <Link href="/#contact">
          <button className="bg-indigo-600 hover:bg-indigo-700 rounded-md mr-6 ">
            <a className=" hover:text-white px-2 py-1  ">Hire me</a>
          </button>
        </Link>
      </div>
      <div className="relative lg:hidden">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white "
          type="button"
          onClick={() => setNavBarOpen(!navbarOpen)}
        >
          <MenuIcon className="h-10 w-10 text-indigo-500" />
        </button>

        <div className={navbarOpen ? "flex" : "hidden"}>
          <ul className=" right-0 absolute  mt-3   w-28 rounded-md shadow-lg py-1  ring-1 ring-black ring-opacity-5 focus:outline-none">
            {navigation.map((nav) => (
              <li className="nav-item" key={nav.page}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={nav.link}
                >
                  {nav.page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
