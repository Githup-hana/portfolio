
import axios from 'axios';
import { useEffect, useState } from 'react';

const Projects = () => {
  interface Project {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 
  const githubUsername = 'Githup-hana'; 
  const githubRepoUrl = `https://api.github.com/users/${githubUsername}/repos`;


  const fetchProjects = async () => {
    try {
      const response = await axios.get(githubRepoUrl);
      setProjects(response.data); 
      setLoading(false); 
    } catch (err) {
      setError('Etwas ist schiefgelaufen beim Laden der Projekte');
      setLoading(false);
      console.error('Error fetching GitHub projects:', err); 
    }
  };

  useEffect(() => {
    fetchProjects(); 
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="projects-container">
      <h2>My GitHub Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p>{project.description ? project.description : 'No description available'}</p>
            <p>
              <strong>Language:</strong> {project.language}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
