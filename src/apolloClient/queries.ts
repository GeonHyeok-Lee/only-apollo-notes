import { gql } from "apollo-boost";

export const NOTE_FRAGMENT = gql`
  fragment NoteParts on Note {
    id
    title
    content
  }
`;

export const GET_STATE = gql`
  query GetState {
    state @client {
      editor {
        title
        content
      }
    }
  }
`;

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

export const ON_CHANGE = gql`
  mutation OnChange($value: String!, $name: String!){
    onChange(value: $value, name: $name) @client
  }
`;
