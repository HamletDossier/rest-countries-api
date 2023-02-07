import { useGetCountriesQuery } from "../../api/apiCountries";
import IteamCountry from "./IteamCountry";



const ListCountries = () => {
  const {data : countries, isError,isLoading}=useGetCountriesQuery();
  if(isLoading) return <div>Loading...</div>;


  return (
    
    <div className="grid grid-cols-1 gap-28  md:grid-cols-2 lg:grid-cols-4 p-8 pt-0 ">
      {countries.map((country:any,index:number) => (
          <IteamCountry country={country}/>    
      ))}
    </div>

  );

}
export default ListCountries;