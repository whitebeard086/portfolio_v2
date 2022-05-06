import { UserContainer } from "./GitHubStyles";

const GitHub = ({
  user: {
    login,
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
  },
}) => {
  return (
    <UserContainer>
      <h2>GitHub Profile</h2>
      <div className="github-profile">
        <div className="image-container">
          <div className="image">
            <img src={avatar_url} alt="profile_picture" />
            <div className="image-info">
              <h3>{name}</h3>
              <p>{login}</p>
            </div>
          </div>
        </div>
        <div className="info-container">
          <div className="top-info">
            <div className="name">
              <h2>{name}</h2>
              {hireable && <h4 className="hireable">Available for hire</h4>}
            </div>
            <p>{bio}</p>
            <div className="profile-link">
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </a>
            </div>
          </div>
          <div className="bottom-info">
            <div className="email">
              <p>Email</p>
              <h4>{email}</h4>
            </div>
            <div className="location">
              <p>Location</p>
              <h4>{location}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="repos">
          <p>Public Repos</p>
          <h4>{public_repos}</h4>
        </div>
        <div className="followers">
          <p>Followers</p>
          <h4>{followers}</h4>
        </div>
        <div className="following">
          <p>Following</p>
          <h4>{following}</h4>
        </div>
      </div>
    </UserContainer>
  );
};
export default GitHub;
