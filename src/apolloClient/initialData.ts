import { restoreNotes } from "../offline";

export const initialData = {
  notes: restoreNotes(),
};