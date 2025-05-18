import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EducationList({ onEdit, refreshTrigger }) {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/education`)
      .then(res => setEducation(res.data))
      .catch(err => console.error("Error fetching education:", err));
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete the record?')) {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/education/${id}`);
      alert('Deleted');
      onEdit(null); 
    }
  };

  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present';

  return (
    <div>
      <h2>Educational Details</h2>
      <ul>
        {education.map((item) => (
          <li key={item._id} style={{ marginBottom: '10px' }}>
            <strong>{item.institution}</strong> - {item.degree} in {item.fieldOfStudy}<br />
            {formatDate(item.startDate)} to {formatDate(item.endDate)}<br />
            {item.grade && <div><strong>Grade:</strong> {item.grade}</div>}
            {item.description && <div><strong>Description:</strong> {item.description}</div>}

            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
