export default function SearchBox() {
    return (
      <div className="flex md:hidden m-auto justify-center max-w-[297px] items-center bg-gray-100">
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search location"
            className="w-full  px-4 py-4 shadow-md  text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-500 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61-10.61 7.5 7.5 0 0010.61 10.61z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  