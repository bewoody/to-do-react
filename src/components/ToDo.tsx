import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoriesState, IToDo, toDoState } from "../atoms";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 0.7rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0.2rem 0.75rem rgba(10, 10, 10, 0.2);
  }
  &:last-child {
    margin-bottom: 8rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-self: flex-end;
`;

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: newCategory };
      const toDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      // localStorage.removeItem("ToDos");
      // localStorage.setItem("ToDos", JSON.stringify(toDos));
      return toDos;
    });
  };
  const onDelete = () => {
    setToDos((oldToDos) => {
      const toDos = oldToDos.filter((toDo) => toDo.id !== id);
      // localStorage.setItem("ToDos", JSON.stringify(toDos));
      return toDos;
    });
  };
  return (
    <Container>
      <span>{text}</span>
      <BtnContainer>
        {categories.map((c, i) =>
          c !== category ? (
            <button key={i} onClick={() => onClick(c)}>
              {c}
            </button>
          ) : null
        )}
        <button onClick={onDelete}>❌</button>
      </BtnContainer>
    </Container>
  );
}

export default ToDo;
