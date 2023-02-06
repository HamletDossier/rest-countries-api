import Country from "./components/pages/Country";
import Index from "./components/pages/Index";
import HeaderCountry from "./components/structs/HeaderCountry";
import ListCountry from "./components/structs/ListCountries";
import MenuCountry from "./components/structs/MenuCountry";

const App = () => {
  return (
    <div className="bg-gray-200 ">
      {/* <Index /> */}
      <Country />
    </div>
  );
}
export default App;