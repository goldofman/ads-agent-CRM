const Cookies = () => {
  return (
    <div className="block mx-auto px-6 fixed bottom-6">
      <div>
        <div
          className="w-72 bg-white rounded-lg shadow-md p-6"
          style={{ cursor: "auto" }}
        >
          <div className="w-16 mx-auto relative -mt-10 mb-3">
            <img
              className="-mt-1"
              src="https://www.svgrepo.com/show/30963/cookie.svg"
              alt="Cookie Icon SVG"
            />
          </div>
          <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
            We use cookies to provide a better user experience.
          </span>
          <div className="flex items-center justify-between">
            <a
              className="text-xs text-gray-400 mr-1 hover:text-gray-800"
              href="/privacy"
            >
              Privacy Policy
            </a>
            <div className="w-1/2">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
