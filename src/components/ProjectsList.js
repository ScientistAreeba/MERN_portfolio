import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  const formatDate = dateStr => {
    if (!dateStr) return 'Present';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map(project => (
          <li key={project._id} style={{ marginBottom: '15px' }}>
            <strong>{project.title}</strong><br />
            {project.description}<br />
            <strong>Technologies:</strong> {project.technologies.join(', ')}<br />
            {project.startDate && <span><strong>Duration:</strong> {formatDate(project.startDate)} – {formatDate(project.endDate)}</span>}<br />
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live</a>} {' '}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>}<br />
            {project.imageUrl && <img src={project.imageUrl} alt="project" width="150" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
