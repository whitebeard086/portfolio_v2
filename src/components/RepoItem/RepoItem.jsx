import { format, formatDistanceToNow, parseISO } from "date-fns";
import { FaLink } from "react-icons/fa";
import { Repo } from "./RepoItemStyles";

const RepoItem = ({ repo }) => {
  const { name, description, html_url, created_at, updated_at } = repo;

  const time = parseISO(updated_at);
  const timePeriod = formatDistanceToNow(time);
  const date = parseISO(created_at);

  return (
    <Repo>
      <h3>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <FaLink style={{ fontSize: "1.3rem" }} /> {name}
        </a>
      </h3>
      {description && <p className="description">{description}</p>}
      <div className="time">
        <p>
          Created on {format(date, "do MMM, yyyy ")} at {format(date, "HH:mm")}
        </p>
        <p>Updated {timePeriod} ago</p>
      </div>
    </Repo>
  );
};

export default RepoItem;
