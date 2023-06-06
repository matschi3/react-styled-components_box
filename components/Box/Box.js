import styled, { css } from "styled-components";

export default function Box({ colorVariant }) {
  return <StyledBox colorVariant={colorVariant} />;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${({ colorVariant }) => colorVariant};

  &:hover {
    background-color: red;
  }
`;
