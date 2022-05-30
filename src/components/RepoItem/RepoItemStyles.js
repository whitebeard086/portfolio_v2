import styled from "styled-components";

export const Repo = styled.div`
  max-width: 1250px;
  padding: 1.2rem;
  margin: 0.8rem auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 15px;
  background: rgba(45, 46, 73);
  -webkit-box-shadow: 1px 1px 6px 1px #2A2A43;
  box-shadow: 1px 1px 6px 1px #2A2A43;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.01);
    background: rgba(45, 46, 73, 0.97);
  }

  @media ${props => props.theme.breakpoints.xxl} {
    width: 80%;
  }

  @media ${props => props.theme.breakpoints.xl} {
    width: 75%;
  }

  @media ${props => props.theme.breakpoints.lg} {
    width: 80%;
  }

  @media ${props => props.theme.breakpoints.xmd} {
    /* width: 90%; */
  }

  @media ${props => props.theme.breakpoints.xsm} {
    padding: 1rem;
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
    color: rgb(255, 255, 255, 0.7);
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
    color: rgb(255, 255, 255, 0.6);
    margin: .5rem 0 0 1rem;
  }
`;
