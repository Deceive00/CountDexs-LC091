import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_COUNTRIES_EVERY_CONTINENT } from "../lib/queries/CountriesEveryContinents";
import Title from "../components/title/Title";
import Loading from "../components/loading/Loading";
import CountriesList from "../components/countriescard/CountriesList";
import './CountryListForContinent.css'
export default function CountryListForContinent(){
  let {continentCode} = useParams();
  const {loading,error,data} = useQuery(GET_ALL_COUNTRIES_EVERY_CONTINENT,{
    variables:{
      code:continentCode
    }
  });
  if(loading) return <Loading />
  else if(error)  return <h1>Error : {error.message}</h1>
  return(
    <div>
      <Title />
      <div id="country-list-for-continent">
        <div className="continent-name-container">
          {data.continent.name}
        </div>

        <div className="countries-container">
          {
            data.continent.countries.map((countries,index)=>{
              return(
                  <CountriesList key={countries.code} countries={countries} />
              );
            })
          }
        </div>

      </div>
    </div>
  );

}