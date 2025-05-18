import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExperienceForm({ editData, onSave }) {
  const [form, setForm] = useState({
    company: '',
    position: '',
    location: '',
    description: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        responsibilities: (editData.responsibilities || []).join(', ')
      });
    }
  }, [editData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      responsibilities: form.responsibilities
        .split(',')
        .map(r => r.trim())
        .filter(Boolean)
    };

    try {
      if (editData) {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/experiences/${editData._id}`, payload);
        alert('Experience updated!');
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/experiences`, payload);
        alert('Experience created!');
      }
      onSave();
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
      console.error('Error saving experience:', err);
      alert('Failed to save experience.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company's name" required />
      <input name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location (optional)" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="responsibilities" value={form.responsibilities} onChange={handleChange} placeholder="Responsibilities" />
      <input name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
      <input name="endDate" type="date" value={form.endDate} onChange={handleChange} />
      <button type="submit">{editData ? 'Update' : 'Add'} Experience</button>
    </form>
  );
}
