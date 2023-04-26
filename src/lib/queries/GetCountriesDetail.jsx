import { gql } from "@apollo/client";

export const GET_COUNTRIES_DETAIL = gql`

query getCountriesDetail($code:ID!){
  country(code:$code){
    code
    name
    emoji
    currency
    phone
    languages{
      name
    }
    native
  }
}
`
;