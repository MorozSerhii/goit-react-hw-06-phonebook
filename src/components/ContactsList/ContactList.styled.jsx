import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Span = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
`;

export const Wrap = styled.div`
  width: 280px;
`;
export const List = styled(motion.li)`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`;
export const NameContact = styled.span`
  display: inline-flex;
  width: 60%;
  font-weight: bold;
`;

export const Icon = styled.svg`
  transform: scale(1.2);
  transition: 0.2s linear;
  transform: all 500ms ease;
  &:hover {
    fill: red;
  }
`;

export const Btn = styled.button`
  background-color: transparent;
  position: relative;
  border: none;
`;

export const ListContact = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e8e8e8;
  border-radius: 15px;
  padding: 15px 30px;
`;
