import React, { useState } from "react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown";
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

type IProps = {
  title?: string;
  content?: string;
  id?: number;
  onSave: (title: string, content: string, id: number) => void;
};

const Editor: React.FC<IProps> = ({ title, content, id, onSave }) => {
  const [state, setState] = useState({
    title: title || "",
    content: content || "",
    id: id || -1
  });
  const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value, name }
    } = event;
    setState(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  const onClick = () => {
    onSave(state.title, state.content, state.id);
  };

  return (
    <>
      <TitleContainer>
        <TitleInput
          value={state.title}
          onChange={onInputChange}
          placeholder={"Untitled..."}
          name={"title"}
        />
        <Button onClick={onClick}>Save</Button>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          value={state.content}
          onChange={onInputChange}
          placeholder={"# This supports markdown!"}
          name={"content"}
        />
        <MarkdownRenderer source={state.content} className={"markdown"} />
      </ContentPreview>
    </>
  );
};

export default Editor;
