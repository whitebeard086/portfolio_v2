import { RepoItem, SectionTitle } from "../../components";
import { Repos } from "./LatestReposStyles";

const LatestRepos = ({ repos }) => {
  return (
    <Repos>
      <SectionTitle text1="My" text2="latest" text3="repositories" />
      {repos?.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </Repos>
  );
};
export default LatestRepos;
