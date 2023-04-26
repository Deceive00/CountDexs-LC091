import './Search.css'
import { useQuery } from "@apollo/client";
import Loading from "../components/loading/Loading";
import Title from "../components/title/Title";
import { GET_ALL_COUNTRIES } from '../lib/queries/GetAllCountries';
import CountriesList from '../components/countriescard/CountriesList';
import { useState } from 'react';

export default function Searching(){

  const [searchInput,setInput] = useState("");

  const {loading,error,data} = useQuery(GET_ALL_COUNTRIES);
  if(loading) return <Loading />
  else if(error)  return <h1>Error : {error.message}</h1>
  return(
    <div>
      <Title />
      <div id='search-container'>
      <div className='search-bar'>
        <svg className='search-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input className='search-box' onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Search Countries'/>
      </div>
        <div className="all-countries-container">
          {
  
            data.countries.filter((countries)=>{
              if(searchInput.toLowerCase() === ''){
                return countries;
              }
              else{
                return countries.name.toLowerCase().includes(searchInput.toLowerCase());
              }
            }).map((countries,index)=>{
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