import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  interface Project {
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    html_url: string;
    homepage: string ;
  }

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const githubUsername = "Githup-hana";
  const githubRepoUrl = `https://api.github.com/repos/${githubUsername}/${id}`;

  const fetchProjects = async () => {
    try {
      const response = await axios.get(githubRepoUrl);
      setProject(response.data);
      setLoading(false);
    } catch (err) {
      setError("Etwas ist schiefgelaufen beim Laden der Projekte");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="project-details">
      <h2>{project?.name}</h2>
      <p>{project?.description || "Keine Beschreibung verfügbar"}</p>
      <p>
        <strong>Language:</strong> {project?.language || "Nicht angegeben"}
      </p>
      <p>
        <strong>Stars:</strong> {project?.stargazers_count}
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href={project?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline flex items-center"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          GitHub
        </a>
        <a
          href={project?.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline flex items-center"
        >
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectDetails;
