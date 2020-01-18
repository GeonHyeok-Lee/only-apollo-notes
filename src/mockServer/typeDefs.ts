export const typeDefs = `
  type Query {
    GetUser(userId: Int!): User
  }
  
  type User {
    id: Int!
    name: String!
    age: String!
  }
`;