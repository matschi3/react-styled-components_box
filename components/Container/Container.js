import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
`;
