import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown";
import TextareaAutosize from "react-textarea-autosize";
import { useQuery, useMutation } from "react-apollo";
import { ON_CHANGE, GET_STATE } from "../apolloClient/queries";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
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
  font-family: "Noto Sans KR", sans-serif;
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

const Editor: React.FC<IProps> = ({ title, content, id = -1, onSave }) => {
  const {
    data: {
      state: { editor }
    }
  }: any = useQuery(GET_STATE);
  const [onChange] = useMutation(ON_CHANGE);
  const onChangeApollo = useCallback(
    (event: any) => {
      const {
        target: { value, name }
      } = event;
      onChange({
        variables: {
          value,
          name
        }
      });
    },
    [onChange]
  );

  const onClick = useCallback(() => {
    onSave(editor.title, editor.content, id);
  }, [onSave, id, editor.title, editor.content]);

  useEffect(() => {
    if (title !== "" && content !== "") {
      onChange({
        variables: {
          value: title,
          name: "title"
        }
      });
      onChange({
        variables: {
          value: content,
          name: "content"
        }
      });
    }
  }, [onChange, title, content]);

  const [text, setText] = useState("");
  const onChangeReact = (event: any) => {
    const {
      target: { value }
    } = event;
    setText(value);
  };

  return (
    <>
      <TitleContainer>
        <TitleInput
          value={editor.title}
          onChange={onChangeApollo}
          placeholder={"Untitled..."}
          name={"title"}
        />
        <Button onClick={onClick}>Save</Button>
      </TitleContainer>
      <ContentPreview>
        <ContentInput
          value={text}
          onChange={onChangeReact}
          placeholder={"# This supports markdown!"}
          name={"content"}
        />
        <MarkdownRenderer source={editor.content} className={"markdown"} />
      </ContentPreview>
    </>
  );
};

export default React.memo(Editor);
