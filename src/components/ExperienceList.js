import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExperienceList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/experience`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error('Error fetching experience:', err));
  }, []);

  const formatDate = (d) =>
    d ? new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';

  return (
    <div>
      <h3>Work Experience</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id} style={{ marginBottom: '15px' }}>
            <strong>{item.company}</strong> — {item.position}
            {item.location && ` (${item.location})`} <br />
            {formatDate(item.startDate)} – {formatDate(item.endDate)} <br />
            {item.description} <br />
            {item.responsibilities?.length > 0 && (
              <ul style={{ marginTop: '5px' }}>
                {item.responsibilities.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
