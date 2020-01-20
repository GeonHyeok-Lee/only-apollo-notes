import { restoreNotes } from "../offline";
import { CacheDataType } from "./types";

export const initialData: CacheDataType = {
  notes: restoreNotes(),
  state: {
    editor: {
      title: "",
      content: "",
      __typename: "EditorState"
    },
    __typename: "State"
  }
};