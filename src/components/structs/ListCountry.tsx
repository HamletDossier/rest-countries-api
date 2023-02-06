const ListCountry = () => {
  return (
  <div className="flex flex-col gap-12 p-8">
  <div>
  <a href="" className=" block bg-gray-100 px-6 py-3 drop-shadow-md rounded-md text-sm w-32 "><span></span> Back</a>
  </div>
  <div className="flex flex-col lg:flex-row lg:gap-20 " >
    <div className="lg:w-1/2">
    <img src="https://res.cloudinary.com/responsivebreakpoints/image/upload/c_scale,w_1094/v1451071843/castle.jpg"/>
    </div>
    
    <div className="flex flex-col">

      <h2 className=" font-bold text-xl py-6">Name</h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
        <div>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
          <p><span className="font-semibold ">Dato: </span>valor</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row py-12 ">
        <div>
          <h2 className=" font-bold text-xl py-2">Border countries:</h2>
        </div>
        <div className="flex flex-row gap-3">
          <a href="" className=" block  bg-gray-100 px-6 py-3 drop-shadow-md rounded-md text-sm text-center " >France</a>
          <a href="" className=" block  bg-gray-100 px-6 py-3 drop-shadow-md rounded-md text-sm  text-center " >France</a>
          <a href="" className=" block  bg-gray-100 px-6 py-3 drop-shadow-md rounded-md text-sm  text-center " >France</a>
         
        </div>
      </div>
    </div>

  </div>
</div>);
}
export default ListCountry;