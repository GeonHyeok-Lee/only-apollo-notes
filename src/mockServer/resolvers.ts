import { GetUserArgs } from "./types";
import { Users } from "./data";

export const serverResolvers = {
  Query: {
    GetUser: (_: any, { userId }: GetUserArgs) => {
      const { id, name, age } = Users[userId];
      return {
        id,
        name,
        age
      };
    }
  }
};