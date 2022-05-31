import styled from "styled-components";

const Button = ({ link, buttonText, variant }) => {
  const target = () => {
    if (variant === "github" || variant === "repos") {
      return "_blank"
    }
  }

  return (
    <ButtonItem variant={variant}>
      <a href={link} target={target()} rel="noopener noreferrer">
        {buttonText}
      </a>
    </ButtonItem>
  );
};

const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 6px;
  color: rgba(222, 223, 238);
  transition: all 0.4s ease;
  text-transform: ${({ variant }) => (variant === "github" ? "uppercase" : "capitalize")};
  font-weight: 500;
  cursor: pointer;
  background: linear-gradient(var(--primary-btn), var(--primary-btn)) padding-box,
    linear-gradient(45deg, #e1ad69 0%, #a0a1bf 100%) border-box;
  border: 2px solid transparent;
  border: ${({ variant }) => (variant === "hero" && "none" )};
  border: ${({ variant }) => (variant === "transparent" && "2px solid var(--text-color-gold)" )};
  background: ${({ variant }) => (variant === "transparent" && "none" )};

  @media ${props => props.theme.breakpoints.xmd} {
    display: ${({ variant }) => (variant === "header" ? "none" : "default")};
  }

  a {
    color: var(--text-color-gold);
    transition: all 0.4s ease;
    padding: 0.7rem 1.5rem;

    &:hover {
      color: var(--text-color);
    }
  }

  &:hover {
    transform: scale(0.96);
    background: linear-gradient(var(--primary-btn), var(--primary-btn)) padding-box,
      linear-gradient(225deg, #e1ad69 0%, #a0a1bf 100%) border-box;
    border: ${({ variant }) => (variant === "transparent" && "2px solid var(--text-color)" )};
    background: ${({ variant }) => (variant === "transparent" && "none" )};
  }
  &:active {
    transform: scale(1.1);
  }
`;

export default Button;
