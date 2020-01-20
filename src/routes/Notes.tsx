import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_NOTES } from "../apolloClient/queries";
// import { ReactComponent as Plus } from "../components/plus.svg";

const Header = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  margin-left: 10px;
  transform: scale(0.8);
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  color: #a2a19e;
  font-weight: 400;
`;

const NotesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Note = styled.div`
  padding: 10px;
  padding-left: 5px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const NoteTitle = styled.span`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;

const Notes: React.FC = () => {
  const { data, loading } = useQuery(GET_NOTES);
  return (
    <>
      <Header>
        <Title>
          Nomad Notes
          <Link to={"/add"}>
            <Button>추가</Button>
          </Link>
        </Title>
        <Subtitle>Taking notes while we learn.</Subtitle>
      </Header>
      {!loading && data && (
        <NotesWrap>
          {data.notes.map((note: any) => (
            <Link to={`/note/${note.id}`} key={note.id}>
              <Note>
                <NoteTitle>{note.title}</NoteTitle>
              </Note>
            </Link>
          ))}
        </NotesWrap>
      )}
    </>
  );
};

export default Notes;
