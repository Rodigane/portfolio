import Link from "next/link";

export default function Footer() {
  return (
    <nav className="text-white  flex flex-col ml-3 items-center justify-around mt-24">
      <div className="flex gradient"> GELLENONCOURT Thibaut</div>
      <div className="flex p-4 justify-between">
        <Link href="/">
          <a className="mr-4 hover:underline-offset-2 hover:underline">Home</a>
        </Link>
        <Link href="/#works">
          <a className="mr-4 hover:underline-offset-2 hover:underline">
            My work
          </a>
        </Link>
        <Link href="/#contact">
          <a className="mr-4 hover:underline-offset-2 hover:underline">
            Hire me
          </a>
        </Link>
      </div>
    </nav>
  );
}
