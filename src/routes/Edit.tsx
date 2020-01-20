import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo";
import { GET_NOTE, EDIT_NOTE } from "../apolloClient/queries";
import Editor from "../components/Editor";

const Edit: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_NOTE, {
    variables: {
      id
    }
  });
  const [editNote] = useMutation(EDIT_NOTE);
  const onSave = (title: string, content: string, id: number) => {
    editNote({ variables: { id, title, content } });
  };
  return (
    <>
      {!loading && data && (
        <Editor
          id={data.getNote.id}
          title={data.getNote.title}
          content={data.getNote.content}
          onSave={onSave}
        />
      )}
    </>
  );
};

export default Edit;
