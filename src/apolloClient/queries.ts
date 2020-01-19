import { gql } from "apollo-boost";

export const GET_NOTES = gql`
  query GetNotes {
    notes @client {
      id
      title
      content
    }
  }
`;

export const GET_NOTE = gql`
  query GetNote($id: number) {
    getNote(id: $id) @client
  }
`;

export const CREATE_NOTE = gql`
  mutation CreateNote($title: String!, $content:String!) {
    createNote(title: $title, content: $content) @client
  }
`;
