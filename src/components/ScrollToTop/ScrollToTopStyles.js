import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

export const ScrollButtonContainer = styled.div`
  transition: 0.5s ease;
  position: fixed;
  bottom: 6rem;
  right: 4rem;

  @media ${props => props.theme.breakpoints.xmd} {
    bottom: 2rem;
    right: 1.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ScrollButton = styled.button`
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  cursor: pointer;
  transition: 0.4s ease;
  border-radius: 20%;
  color: rgb(225, 173, 105);
  background: rgba(45, 46, 73, 0.5);
  padding: 0.5rem 0.6rem;
  outline: none;
  border: none;
  &:hover {
    transition: 0.4s ease;
    background: rgba(45, 46, 73, 0.8);
    border-radius: 50%;
  }
  &:active {
    -webkit-tap-highlight-color: rgba(45, 46, 73, 0.1);
  }
`;

export const ScrollIcon = styled(FaArrowUp)`
  font-size: 1.3rem;
`;
