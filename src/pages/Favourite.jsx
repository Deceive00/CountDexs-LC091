import { useQuery } from "@apollo/client";
import Loading from "../components/loading/Loading";
import Title from "../components/title/Title";
import { GET_ALL_COUNTRIES } from "../lib/queries/GetAllCountries";
import { useState } from "react";
import CountriesList from "../components/countriescard/CountriesList";
import './Favourite.css'
export default function Favourite(){
  const [favoriteState, setFavourite] = useState(JSON.parse(localStorage.getItem("favorites")));
  const {loading,error,data} = useQuery(GET_ALL_COUNTRIES);
  if(loading) return <Loading />
  else if(error)  return <h1>Error : {error.message}</h1>
  const filteredData = data?.countries?.filter(country => favoriteState?.includes(country.code.toUpperCase()));
  console.log(filteredData);
  if(filteredData?.length === 0){
    return(
      <div className="empty-container">
        <Title />
        <div className="is-empty">
          <label htmlFor="">
            There are no favorites countries!
          </label>
        </div>
      </div>
    );
  }
  else{
    return(
      <div>
        <Title />
        <div className="favourite-list-container">
          {filteredData?.map((country, index) => {
            return(
              <CountriesList key={index} countries={country} />
            );
          })}
        </div>
      </div>
    );
  }
}
