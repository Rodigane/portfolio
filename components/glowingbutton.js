import Link from "next/link";

export default function Glowingbutton({ children }) {
  return (
    <div>
      <div className="relative group mt-5">
        <div
          className=" 
        absolute
        -inset-0.5
        bg-gradient-to-r
      from-green-600
      to-red-600
        rounded-lg
        blur
        opacity-75
        group-hover:opacity-100
        group-hover:blur-lg
        transition
        duration-1000
        group-hover:duration-200
        animate-tilt
         "
        ></div>
        <Link href="/#works">
          <button className=" relative text-white px-8 py-4 font-bold mt-12 flex item-center space-x-3 bg-[#17171f] leading-none  rounded-md group-hover:text-gray-100 transition duration-200 ">
            View my work
          </button>
        </Link>
      </div>
    </div>
  );
}
