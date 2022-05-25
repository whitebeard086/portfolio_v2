import styled from "styled-components";

const SectionTitle = ({ text1, text2, text3 }) => {
  return (
    <Title>
      <h2>
        {text1} <span>{text2}</span> {text3}
      </h2>
    </Title>
  );
};

const Title = styled.div`
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  h2 {
    /* margin-top: 4rem; */
    font-size: 3rem;
    text-align: center;

    @media ${props => props.theme.breakpoints.xmd} {
      font-size: 2.3rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
      font-size: 1.8rem;
    }

    span {
      color: rgb(45, 46, 73);
    }
  }
`;

export default SectionTitle;
