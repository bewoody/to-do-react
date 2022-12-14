import styled, { css } from "styled-components";

const Context = styled.p<{ size: "xl" | "md"; color: "black" | "white" }>`
  ${(props) =>
    props.size === "xl" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.size === "md" &&
    css`
      font-size: 1rem;
      font-weight: 500;
    `}
  color: ${(props) => props.color};
`;

interface TextProps {
  text: string;
  size?: "xl" | "md";
  color?: "black" | "white";
}

export default function Text({
  text,
  size = "md",
  color = "white",
}: TextProps) {
  return (
    <Context size={size} color={color}>
      {text}
    </Context>
  );
}
