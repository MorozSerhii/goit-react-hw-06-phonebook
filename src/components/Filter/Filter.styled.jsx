import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const TextFilter = styled.span`
  text-align: center;
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
  }
`;
