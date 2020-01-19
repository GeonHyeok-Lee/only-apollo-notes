import { InMemoryCache } from "apollo-cache-inmemory";
import { initialData } from "./apolloClient/cacheData";
import { resolvers } from "./apolloClient/resolvers";
import { ApolloClient } from "apollo-boost";

const cache = new InMemoryCache();
cache.writeData({ data: initialData });

export const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs: [
    `
      type Query {
        getNotes: [Note]!
        getNote(id: Int!): Note
      }

      type Mutation {
        createNote(title: String!, content: String!): Note
        editNote(id: Int!, title: String, content: String): Note
      }

      type Note {
        id: Int!
        title: String!
        content: String!
      }
    `
  ]
});
