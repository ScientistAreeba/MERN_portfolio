import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SkillsList({ onEdit, refreshTrigger }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/skills`)
      .then((res) => setSkills(res.data))
      .catch((err) => console.error('Error fetching skills:', err));
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/skills/${id}`);
      alert('Skill deleted');
      onEdit(null); // exit edit mode
    }
  };

  return (
    <div>
      <h3>Skills List</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill._id}>
            <strong>{skill.name}</strong> — {skill.level}
            {skill.category && ` (${skill.category})`}
            <br />
            <button onClick={() => onEdit(skill)}>Edit</button>
            <button onClick={() => handleDelete(skill._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
