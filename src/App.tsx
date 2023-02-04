const App = () => {
  return (
    <div className="bg-gray-100 ">
    {/* Menu */}
    <div className="flex flex-row justify-between items-center  w-full bg-white p-8 drop-shadow-md">
      <div>
          <h1>Where in the word?</h1>
      </div>
      <div>
        Dark mode
      </div>
    </div>

    {/* filter */}
    <div className="flex flex-col gap-6 my-10 p-8 md:flex-row md:justify-between ">
      <div className="flex w-full drop-shadow-md md:w-1/4  ">
        <label htmlFor="search" className=" bg-white p-3 rounded-l-md">Icon</label>
        <input type="text" name="filter" id="search" className="w-full rounded-r-md focus:outline-none " placeholder="Search for a country..." />
      </div>
      <div className="w-52 relative">
        <button id="filter" className=" bg-white px-6 py-3 w-full drop-shadow-md rounded-md text-sm flex justify-between" data-dropdown-toggle="dropdown-states">
          <span className="block">Filter by Region</span>
          <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
            </path>
          </svg>
        </button>
        <div id="dropdown-states" className="w-full bg-white drop-shadow-md my-1 absolute top-13  left-0 z-10 rounded-md">
          <ul className="p-5 ">
            <li className="">Africa</li>
            <li className="">America</li>
            <li className="">Asia</li>
            <li className="">Europe</li>
            <li className="">Oceania</li>
          </ul>
        </div>
      </div>

    </div>


    {/* cards */}
    <div className="grid grid-cols-1 gap-28  md:grid-cols-2 lg:grid-cols-4 p-8 pt-0 ">
      <a href="" className="card bg-white rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md drop-shadow-md">
        <img className=" rounded-tl-md rounded-tr-md  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </a>
      <a href="" className="card bg-white rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md drop-shadow-md">
        <img className=" rounded-tl-md rounded-tr-md  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </a>
      <a href="" className="card bg-white rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md drop-shadow-md">
        <img className=" rounded-tl-md rounded-tr-md  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </a>
      <a href="" className="card bg-white rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md drop-shadow-md">
        <img className=" rounded-tl-md rounded-tr-md  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </a>
      <a href="" className="card bg-white rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md drop-shadow-md">
        <img className=" rounded-tl-md rounded-tr-md  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </a>
      <a href="" className="card bg-white rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md drop-shadow-md">
        <img className=" rounded-tl-md rounded-tr-md  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </a>
    </div>

    </div>
  );
}
export default App;