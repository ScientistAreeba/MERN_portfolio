import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExperienceList({ onEdit, refreshTrigger }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/experiences`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error('Error fetching work experience:', err));
  }, [refreshTrigger]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete the work experience?')) {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/experience/${id}`);
      alert('Experience deleted');
      onEdit(null); 
    }
  };

  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';

  return (
    <div>
      <h3>Work Experience</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id} style={{ marginBottom: '15px' }}>
            <strong>{item.company}</strong> — {item.position}
            {item.location && ` (${item.location})`}<br />
            {formatDate(item.startDate)} – {formatDate(item.endDate)}<br />
            <div>{item.description}</div>
            {item.responsibilities?.length > 0 && (
              <ul style={{ marginTop: '5px' }}>
                {item.responsibilities.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            )}
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
