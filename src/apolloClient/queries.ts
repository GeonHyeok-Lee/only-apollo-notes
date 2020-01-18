import gql from "graphql-tag";

export const GET_CACHE = gql`
  query GetCache {
    isLoggedIn @client
  }
`;