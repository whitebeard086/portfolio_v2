import styled from "styled-components";

export const Repos = styled.div`
  /* background: red; */
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
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

  
`;
