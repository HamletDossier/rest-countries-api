const IteamCountry = ({country}:any) => {
    return (
    <a href="" className="card bg-white rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-md drop-shadow-md">
      <img className=" rounded-tl-md rounded-tr-md  " src={`${country.flags.svg}`} alt="" />
      <div className="datos p-5">
        <h2 className=" font-bold text-xl py-2">{country.name.common}</h2>
        <p><span className="font-semibold ">Population: </span>{country.population}</p>
        <p><span className="font-semibold ">Region: </span>{country.region}</p>
        <p><span className="font-semibold ">Capital: </span>{country.capital}</p>
      </div>
    </a>
);
}
export default IteamCountry;

  // <>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div></div>
    //   <div>{country.population}</div>
    //   <div><img src= alt="" /></div>


      
      
    //   </>
