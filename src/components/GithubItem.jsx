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
    color: rgba(45, 46, 73);
    font-weight: 500;
  }

  h4 {
    color: #fff;
    font-weight: 400;
  }
`

export default GithubItem;
