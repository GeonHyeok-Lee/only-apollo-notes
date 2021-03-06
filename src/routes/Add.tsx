import React, { useCallback } from "react";
import { useMutation } from "react-apollo";
import { CREATE_NOTE } from "../apolloClient/queries";
import Editor from "../components/Editor";
import { useHistory } from "react-router-dom";

const Add: React.FC = () => {
  const history = useHistory();
  const [createNote] = useMutation(CREATE_NOTE);
  const onSave = useCallback(
    (title: string, content: string) => {
      if (title !== "" && content !== "") {
        createNote({ variables: { title, content } });
        history.push("/");
      }
    },
    [createNote, history]
  );
  return <Editor onSave={onSave} />;
};

export default Add;
