import { useParams } from "react-router-dom";
import { GET_COUNTRIES_DETAIL } from "../lib/queries/GetCountriesDetail";
import { useQuery } from "@apollo/client";
import Loading from "../components/loading/Loading";
import Title from "../components/title/Title";
import './CountryDetail.css'
import { useEffect, useState } from "react";
export default function CountryDetail(){
  let {countryCode} = useParams();
  const {loading,error,data} = useQuery(GET_COUNTRIES_DETAIL,{
    variables:{
      code:countryCode
    }
  });

  let [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
  let addFavourite = (newCode) =>{
    localStorage.setItem('favorites', JSON.stringify([...favorites,newCode]))
  }
  
  let [textBtn,setText] = useState("");
  let [logoSrc,setLogo] = useState();

  useEffect(() => {
    if (favorites && favorites?.includes(countryCode)) {
      let favBtn = document.getElementById("favourite-btn");
      console.log(favBtn)
      if(favBtn){
        favBtn.classList.add("is-favourite");
        setText("Remove from favorites :(");
        setLogo(<svg style={{paddingRight:"0.5rem"}} width="20px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>);
      }
    }
    else{
      setText("Add to favorites !");
      setLogo(<svg style={{paddingRight:"0.5rem"}} width="20px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>)
    }
  }, []);
  let setFavourite = (e) =>{
    if(e.target.classList.contains('is-favourite')){
      e.target.classList.remove('is-favourite');
      setText("Add to favorites !");
      setLogo(<svg style={{paddingRight:"0.5rem"}} width="20px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>)
      deleteFavorite(data.country.code)
    }
    else{
      e.target.classList.add('is-favourite');
      setText("Remove from favorites :(");
      setLogo(<svg style={{paddingRight:"0.5rem"}} width="20px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>);
      addFavourite(data.country.code)

    };
  }

  
  const deleteFavorite = (favoriteToDelete) => {
    let index = favorites.indexOf(favoriteToDelete);
    favorites.splice(index,1);
    localStorage.setItem('favorites',JSON.stringify(favorites));

  };
  

  if(loading) return <Loading />
  else if(error)  return <h1>Error : {error.message}</h1>
  return(
    <div>
      <Title />
      <div className="country-detail-container">
        <div className="country-title-container">
          {data.country.name} ({data.country.code})
        </div>
        <div className="country-detail-emoji-container">
          {data.country.emoji}
        </div>
        <div className="favourite-button-container">
          <button onClick={setFavourite} id="favourite-btn" className="favourites-btn">
            {logoSrc}
            {textBtn}

          </button>
        </div>
        <div className="country-detail-description">
          <ul>
            <li>Currency : {data.country.currency === null?"No Currency":data.country.currency}</li>
            <li>Phone    : {data.country.phone=== null?"No Phone":data.country.phone}</li>
            <li>Native   : {data.country.native === null?"No Native":data.country.native}</li>
            <li>
              Language : 
              
              <ul className="language-list">
                {
                  data.country.languages.map((language,index)=>{
                    if(language.name ===  null){
                      return <li>no language</li>
                    }
                    else{
                      return(
                        <li>
                          {language.name}
                        </li>
                      );
                    }
                  })
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}