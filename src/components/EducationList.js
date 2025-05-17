import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EducationList() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/education`)
      .then(res => setEducation(res.data))
      .catch(err => console.error("Error fetching education:", err));
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div>
      <h2>Educational Details</h2>
      <ul>
        {education.map((item) => (
          <li key={item._id} style={{ marginBottom: '15px' }}>
            <strong>{item.institution}</strong> - {item.degree} in {item.fieldOfStudy}<br />
            {formatDate(item.startDate)} to {formatDate(item.endDate)}<br />
            {item.grade && <div><strong>Grade:</strong> {item.grade}</div>}
            {item.description && <div><strong>Description:</strong> {item.description}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
