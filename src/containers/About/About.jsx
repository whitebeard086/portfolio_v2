import axios from "axios";

import { AppWrap, MotionWrap } from "../../wrapper";
import { AboutContainer, AboutContent } from "./AboutStyles";
import { useEffect, useState } from "react";
import { GitHub, LatestRepos } from "../../components";

const About = () => {
  const [repos, setRepos] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL;
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });

  const getUserAndRepos = async () => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 5,
    });

    const [user, repos] = await Promise.all([github.get(""), github.get(`/repos?${params}`)]);

    setRepos(repos.data);
    setUser(user.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserAndRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AboutContainer id="about">
      <AboutContent>
        <GitHub user={user} />
        <LatestRepos repos={repos} />
      </AboutContent>
    </AboutContainer>
  );
};

export default MotionWrap(AppWrap(About, "about"));
