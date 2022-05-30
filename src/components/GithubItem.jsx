import styled from "styled-components";

const GithubItem = ({ label, value }) => {
  return (
    <Container className="github-item">
      <p>{label}</p>
      <h4>{value}</h4>
    </Container>
  );
};

const Container = styled.div`
  p {
    color: rgb(255, 255, 255, 0.6);
    font-weight: 500;
    line-height: 1.3;
  }

  h4 {
    color: rgb(255, 255, 255, 0.7);
    font-weight: 400;
    line-height: 1.3;
  }
`

export default GithubItem;
