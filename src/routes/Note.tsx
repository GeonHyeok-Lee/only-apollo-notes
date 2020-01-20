import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_NOTE } from "../apolloClient/queries";
import MarkdownRenderer from "react-markdown";

const TitleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button``;

const Note: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_NOTE, {
    variables: {
      id
    }
  });
  return (
    <>
      {!loading && data && (
        <>
          <TitleComponent>
            <Title>{data.getNote && data.getNote.title}</Title>
            <Link to={`/edit/${data.getNote.id}`}>
              <Button>Edit</Button>
            </Link>
          </TitleComponent>
          <MarkdownRenderer source={data.getNote.content} />
        </>
      )}
    </>
  );
};

export default Note;
