import { Context } from "./types";
import { gql } from "apollo-boost";
import { saveNotes } from "../offline";

const GET_NOTES = gql`
  query GetNotes {
    notes @client {
      id
      title
      content
    }
  }
`;

export const NOTE_FRAGMENT = gql`
  fragment NoteParts on Note {
    id
    title
    content
  }
`;

export const resolvers = {
  Query: {
    getNote: (_: any, { id }: any, { cache }: any) => {
      const dataId = cache.config.dataIdFromObject({
        __typename: "Note",
        id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: dataId });
      return note;
    }
  },
  Mutation: {
    createNote: (_: any, { title, content }: any, { cache }: Context) => {
      const { notes }: any = cache.readQuery({ query: GET_NOTES });
      const newNote = {
        id: notes.length + 1,
        title,
        content,
        __typename: "Note",
      }
      cache.writeData({
        data: {
          notes: [newNote, ...notes]
        }
      })
      saveNotes(cache);
      return newNote;
    },
    editNote: (_: any, { id, title, content }: any, { cache }: any) => {
      const dataId = cache.config.dataIdFromObject({
        __typename: "Note",
        id
      });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: dataId });
      const updateNote = {
        ...note,
        title,
        content
      }
      cache.writeFragment({
        id: dataId,
        fragment: NOTE_FRAGMENT,
        data: updateNote
      })
      saveNotes(cache);
      return updateNote;
    }
  }
};