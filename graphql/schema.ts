import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Post {
    id: String
    title: String
    body: String
    thumbnailUrl: String
    tags: [String]
  }

  type Tag {
    id: String
    name: String
    color: String
    posts: [String]
  }

  type Query {
    posts: [Post]!
    tags: [Tag]!
  }
`;
