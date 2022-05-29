import { RepoItem, SectionTitle } from "../../components";
import { Repos } from "./LatestReposStyles";

const LatestRepos = ({ repos, user }) => {
  return (
    <Repos>
      <SectionTitle text1="My" text2="latest" text3="repositories" />
      {repos?.map(repo => (
        <RepoItem key={repo.id} repo={repo} user={user} />
      ))}
    </Repos>
  );
};
export default LatestRepos;
