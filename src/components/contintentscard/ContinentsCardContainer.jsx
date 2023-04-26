import { Link } from "react-router-dom";
import './ContinentsCardContainer.css'
export default function ContinentsContainer({continent,code}){
  return(
    <Link to={`/${code}`} className="continent-card" >
      <h1>{continent.code}</h1>
      <h2>{continent.name}</h2>
    </Link>
  );
}