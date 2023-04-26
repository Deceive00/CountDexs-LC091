import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`

query getAllContinents{
  continents{
    code
    name
    countries{
      code
      name
      emoji
      phone
			languages{
        name
      }
      currency
    }
  }
}
`;
