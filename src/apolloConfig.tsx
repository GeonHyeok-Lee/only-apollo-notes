import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { makeExecutableSchema } from "graphql-tools";
import { serverResolvers } from "./mockServer/resolvers";
import { typeDefs } from "./mockServer/typeDefs";
import { initialData } from "./apolloClient/cacheData";
import { clientResolvers } from "./apolloClient/resolvers";

const cache = new InMemoryCache();
cache.writeData({ data: initialData });

const schema = makeExecutableSchema({ typeDefs, resolvers: serverResolvers });

export const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache,
  resolvers: clientResolvers
});
