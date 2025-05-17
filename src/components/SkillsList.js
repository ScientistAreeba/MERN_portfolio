import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SkillsList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/skills`)
      .then((res) => setSkills(res.data))
      .catch((err) => console.error('Error fetching skills:', err));
  }, []);

  return (
    <div>
      <h3>Skills List</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill._id}>
            {skill.name} — {skill.level}
            {skill.category && ` (${skill.category})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
