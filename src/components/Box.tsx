import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";

interface IBoxProps {
  category: string;
}

const Container = styled.div`
  border: 1px solid white;
  padding: 1rem 1.2rem;
`;

const Text = styled.span`
  font-size: 20px;
`;

export default function Box({ category }: IBoxProps) {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Container>
      <div style={{ borderBottom: 1 }}>
        <Text>{category}</Text>
      </div>
      {toDos
        .filter((toDo) => toDo.category === category)
        .map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
    </Container>
  );
}
