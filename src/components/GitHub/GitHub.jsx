import { UserContainer } from "./GitHubStyles";
import { GithubItem, SectionTitle, Button } from "../../components";

const GitHub = ({ user }) => {
  const {
    name,
    avatar_url,
    bio,
    location,
    email,
    html_url,
    hireable,
    followers,
    following,
    public_repos,
  } = user;


  return (
    <UserContainer>
      <SectionTitle text1="My" text2="gitHub" text3="profile" />
      <div className="github-profile">
        <div className="image-container">
          <div className="image">
            <img src={avatar_url} alt="profile_picture" />
          </div>
        </div>
        <div className="info-container">
          <div className="top-info">
            <div className="name">
              <h2>{name}</h2>
              {hireable && <p className="hireable">Available for hire</p>}
            </div>
            <p>{bio}</p>
          <Button variant="github" buttonText="visit github profile" link={html_url} />
          </div>
          <div className="bottom-info">
            <GithubItem label="Email" value={email} />
            <GithubItem label="Location" value={location} />
          </div>
        </div>
      </div>
      <div className="stats">
        <GithubItem label="Public Repos" value={public_repos} />
        <GithubItem label="Followers" value={followers} />
        <GithubItem label="Following" value={following} />
      </div>
    </UserContainer>
  );
};
export default GitHub;
