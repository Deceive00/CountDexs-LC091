import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES_EVERY_CONTINENT = gql`

query countriesEveryContinent($code:ID!){
	continent(code:$code){
    name
    countries{
      code
      name
      emoji
    }
  }
}
`
;