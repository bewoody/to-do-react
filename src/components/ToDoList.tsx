import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import SelectCategory from "./SelectCategory";
import ToDo from "./ToDo";
import styled from "styled-components";
import Layout from "./Layout";
import Text from "./Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Layout>
      <Container>
        <div>
          <Text size="xl" text="Hello! 😄" />
          <Text size="md" text="What's your plan today?" />
        </div>
        <CreateToDo />
        <div>
          <Text size="md" text="Categories" />
          <SelectCategory />
        </div>
        <ul>
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export default ToDoList;
