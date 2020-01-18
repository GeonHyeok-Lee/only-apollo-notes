import { Context } from "./types";

export const clientResolvers = {
  Query: {
    GetCache: (_: any, __: any, { cache: apolloCache }: Context) => {
      console.log(apolloCache);
      return null;
    }
  }
};