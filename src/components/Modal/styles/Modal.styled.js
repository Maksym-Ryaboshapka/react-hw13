import styled from "styled-components";

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 400px;
  height: 550px;
  padding: 40px 30px 20px 30px;
  border-radius: 8px;

  background-color: #fff;
`;

export const Title = styled.h2`
  margin: 0 0 20px 0;
  
  font-size: 28px;
  text-align: center;
  font-weight: 700;
`;

export const SvgDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  
  width: 25px;
  height: 25px;

  cursor: pointer;
`;

export const Form = styled.form`
  height: 430px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Item = styled.li``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Span = styled.span``;

export const Input = styled.input`
  width: 300px;
  height: 25px;
  padding: 3px 5px;
`;

export const Textarea = styled.textarea`
  width: 300px;
  height: 150px;
  padding: 3px 5px;
  resize: none;
`;

export const Button = styled.button`
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
