import { useState } from 'react';
import axios from 'axios';

export default function ExperienceForm() {
  const [form, setForm] = useState({
    company: '',
    position: '',
    location: '',
    description: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        // split CSV string into trimmed array
        responsibilities: form.responsibilities
          .split(',')
          .map((r) => r.trim())
          .filter(Boolean)
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/experiences`,
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert('Experience added!');
      setForm({
        company: '',
        position: '',
        location: '',
        description: '',
        responsibilities: '',
        startDate: '',
        endDate: ''
      });
    } catch (err) {
      console.error('Error adding experience:', err);
      alert('Failed to add experience.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company"
        required
      />
      <input
        name="position"
        value={form.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location (optional)"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="responsibilities"
        value={form.responsibilities}
        onChange={handleChange}
        placeholder="Responsibilities (comma-separated)"
      />
      <input
        name="startDate"
        type="date"
        value={form.startDate}
        onChange={handleChange}
        required
      />
      <input
        name="endDate"
        type="date"
        value={form.endDate}
        onChange={handleChange}
      />
      <button type="submit">Add Experience</button>
    </form>
  );
}
