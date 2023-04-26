import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`

query getCountriesDetail{
  countries{
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