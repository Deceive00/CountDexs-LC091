import { Link } from 'react-router-dom';
import './CountriesList.css'

export default function CountriesList({countries}){
  return(
    <div>
      <Link to={`/country/${countries.code}`} className="countries-card">
        <div className="countries-emoji-container">
          <div className="countries-emoji">
            {countries.emoji}
          </div>
        </div>
        <div className="countries-name-container">
          {countries.name}
        </div>
      </Link>
    </div>
  );
}