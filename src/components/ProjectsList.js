import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProjectsList({ onEdit, refreshTrigger }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete the project?')) {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/projects/${id}`);
      alert('Project deleted');
      onEdit(null); 
      //state reset
    }
  };

  const formatDate = (d) =>
    d ? new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project._id} style={{ marginBottom: '20px' }}>
            <strong>{project.title}</strong><br />
            {project.description}<br />
            <strong>Tech:</strong> {project.technologies.join(', ')}<br />
            {project.startDate && (
              <span><strong>Duration:</strong> {formatDate(project.startDate)} – {formatDate(project.endDate)}</span>
            )}<br />
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live</a>} {' '}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>}<br />
            {project.imageUrl && <img src={project.imageUrl} alt="project" width="150" />}<br />
            <button onClick={() => onEdit(project)}>Edit</button>
            <button onClick={() => handleDelete(project._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
