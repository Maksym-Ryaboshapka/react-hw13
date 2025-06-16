import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 150px;
  height: 45px;
  margin: 0 auto;
  border-radius: 4px;

  color: #fff;
  background-color: #0b89e3ff;

  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #0772bfff;
  }
`;
