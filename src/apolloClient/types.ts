import { InMemoryCache } from "apollo-cache-inmemory";

export type Context = {
  cache: InMemoryCache
};

export type NoteType = {
  id: number,
  title: string,
  content: string
}

export type NotesType = {
  notes: [NoteType]
}

export type StateType = {
  editor: {
    title: string,
    content: string,
    __typename: string
  },
  __typename: string
}

export type CacheDataType = {
  notes: NotesType,
  state: StateType
}