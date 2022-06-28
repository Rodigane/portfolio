export default function DownloadResume() {
  return (
    <a href="/resume.pdf" download>
      <button className="text-white px-8 py-4 font-bold mt-12 flex item-center space-x-3 bg-indigo-600 rounded-md  hover:bg-indigo-700  ">
        Download my resume
      </button>
    </a>
  );
}
