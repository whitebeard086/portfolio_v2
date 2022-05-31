import { RepoItem, SectionTitle, Button } from "../../components";
import { Repos } from "./LatestReposStyles";

const LatestRepos = ({ repos, user }) => {
  console.log(user);
  return (
    <Repos>
      <SectionTitle text1="My" text2="latest" text3="repositories" />
      {repos?.map(repo => (
        <RepoItem key={repo.id} repo={repo} user={user} />
      ))}
      <Button
        variant="repos"
        buttonText="see more"
        link="https://github.com/whitebeard086?tab=repositories"
      />
    </Repos>
  );
};
export default LatestRepos;
