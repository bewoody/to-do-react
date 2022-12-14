import styled from "styled-components";
import Text from "./Text";

const Container = styled.div<{ active: boolean }>`
  padding: 1.2rem;
  background-color: ${(props) => (props.active ? "#4299E1" : "#f1f1f1")};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0.2rem 0.75rem rgba(10, 10, 10, 0.2);
  }
`;

interface CategoryItemProps {
  category: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  active?: boolean;
}

export default function CategoryItem({
  category,
  onClick,
  active = false,
}: CategoryItemProps) {
  return (
    <Container onClick={onClick} active={active}>
      <Text text={category} color={active ? "white" : "black"} />
    </Container>
  );
}
