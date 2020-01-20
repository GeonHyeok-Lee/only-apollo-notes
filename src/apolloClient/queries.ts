import { gql } from "apollo-boost";
import { NOTE_FRAGMENT } from "./resolvers";

export const GET_NOTES = gql`
  query GetNotes {
    notes @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
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

export const EDIT_NOTE = gql`
  mutation EditNote($id: Int!, $title: String!, $content:String!) {
    editNote(id: $id, title: $title, content: $content) @client
  }
`;
