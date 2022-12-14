import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 0;
`;

export default function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
