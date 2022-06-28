import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className="text-white"> GELLENONCOURT Thibaut</span>
      <div className="text-gray-300 mr-3">
        <Link href="/">
          <a className="mr-6 hover:text-gray-500">Home</a>
        </Link>
        <Link href="/#">
          <a className="mr-6 hover:text-gray-500">My work</a>
        </Link>
        <Link href="/about">
          <a className="mr-6 hover:text-gray-500">About</a>
        </Link>

        <Link href="/#">
          <button className="bg-indigo-600 hover:bg-indigo-700 rounded-md mr-6 ">
            <a className=" hover:text-white px-2 py-1  ">Hire me</a>
          </button>
        </Link>
      </div>
    </nav>
  );
}
