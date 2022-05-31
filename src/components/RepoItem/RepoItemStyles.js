import styled from "styled-components";

export const Repo = styled.div`
  padding: 1.2rem;
  margin: 0.8rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 15px;
  background: var(--primary-bg);
  -webkit-box-shadow: var(--primary-shadow);
  box-shadow: var(--primary-shadow);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.01);
    background: var(--primary-bg-hover);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;


    a {
      color: rgb(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all .4s ease;

      &:hover {
        transform: scale(1.008);
        color: rgb(255, 255, 255);
      }
    }
  }

  .description {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.3;
    color: var(--text-color);
    margin: .5rem 0 0 1rem;

    
    @media ${props => props.theme.breakpoints.sm} {
      font-size: 1.18rem;
    }
  }

  .time {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    line-height: 1.3;
    font-weight: 400;
    color: var(--text-color-darker);
    margin: .5rem 0 0 1rem;
  }
`;
