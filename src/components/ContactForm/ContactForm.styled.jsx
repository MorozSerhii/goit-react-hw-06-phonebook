import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputName = styled.input`
  margin-top: 10px;

  border: none;
  border-radius: 15px;
  padding: 15px;
  background-color: #e8e8e8;
  box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5;
  font-size: medium;
  font-weight: bold;
  max-width: 200px;
  &:focus {
    outline-color: white;
    place-content: 'Enter your message!';
  }
`;

export const Btn = styled.button`
  margin-top: 30px;
  color: black;
  padding: 17px 40px;
  border-radius: 15px;
  border: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  font-size: 15px;
  font-weight: bold;
  transition: all 0.5s ease;
  &:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
  }
  &:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
`;
