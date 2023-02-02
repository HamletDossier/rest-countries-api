const App = () => {
  return (
    <div className="bg-gray-100">
    {/* Menu */}
    {/* Searching */}


    {/* filter */}
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
      <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  </div>
</div>


    {/* cards */}
    <div className="flex justify-center py-3 flex-wrap">
      <div className="card bg-white w-64 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg my-3 drop-shadow-md">
        <img className=" rounded-tl-lg rounded-tr-lg  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </div>
      <div className="card bg-white w-64 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg my-3 drop-shadow-md">
        <img className=" rounded-tl-lg rounded-tr-lg  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </div>
      <div className="card bg-white w-64 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg my-3 drop-shadow-md">
        <img className=" rounded-tl-lg rounded-tr-lg  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </div>
      <div className="card bg-white w-64 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg my-3 drop-shadow-md">
        <img className=" rounded-tl-lg rounded-tr-lg  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </div>
      <div className="card bg-white w-64 rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg my-3 drop-shadow-md">
        <img className=" rounded-tl-lg rounded-tr-lg  " src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg" alt="" />
        <div className="datos p-5">
          <h2 className=" font-bold text-xl py-2">Name</h2>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </div>
    </div>

    </div>
  );
}
export default App;