import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../lib/queries/GetAllContinents";
import './HomeStyle.css'
import Title from "../components/title/Title";
import Loading from "../components/loading/Loading";
import ContinentsContainer from "../components/contintentscard/ContinentsCardContainer";
export default function Home(){

  const {loading,error,data} = useQuery(GET_ALL_CONTINENTS)
  if(loading) return <Loading />;
  else if(error)  return <h1>Error : {error.message}</h1>;
  return(
    <div>
      <Title/>
      <div className="content-container">
        <div className="content">
          {
            data.continents.map((continent,index) =>{
                let code = continent.code
                
                return(
                  <ContinentsContainer key={code} continent={continent} code={code}/>
                );
              })
          }
        </div>
      </div>
    </div>

  )
}