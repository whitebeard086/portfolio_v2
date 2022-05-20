const GithubItem = ({ label, value }) => {
  return (
    <div className="github-item">
      <p>{label}</p>
      <h4>{value}</h4>
    </div>
  );
};

export default GithubItem;
