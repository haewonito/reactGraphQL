import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
query {
  countries {
    code
    name
    capital
    languages {
      name
    }
    continent {
      name
    }
  }
}`;

//1. identify data required
//2. write query in graphiql
//3. bond query + component
//4.Access data