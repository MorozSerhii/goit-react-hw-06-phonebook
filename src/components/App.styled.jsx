import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fontsize: 20px;
  color: #010101;
`;

export const TitileContact = styled.h2`
  margin-top: 30px;
`;
export const ContactText = styled.p`
  margin-top: 30px;
  color: hsl(261deg 80% 48%);
  font-weight: bold;
`;
