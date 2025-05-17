import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProjectsForm({ editData, onSave }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    liveUrl: '',
    githubUrl: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        technologies: (editData.technologies || []).join(', ')
      });
    }
  }, [editData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      technologies: form.technologies
        .split(',')
        .map(t => t.trim())
        .filter(Boolean)
    };

    try {
      if (editData) {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/projects/${editData._id}`, payload);
        alert('Project updated!');
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/projects`, payload);
        alert('Project created!');
      }

      onSave();
      setForm({
        title: '',
        description: '',
        technologies: '',
        imageUrl: '',
        liveUrl: '',
        githubUrl: '',
        startDate: '',
        endDate: ''
      });
    } catch (err) {
      console.error('Error saving project:', err);
      alert('Failed to save project.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Project Title" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input name="technologies" value={form.technologies} onChange={handleChange} placeholder="Technologies (e.g HTML, CSS)" required />
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image link" />
      <input name="liveUrl" value={form.liveUrl} onChange={handleChange} placeholder="Live link" />
      <input name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="GitHub link" />
      <input name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
      <input name="endDate" type="date" value={form.endDate} onChange={handleChange} />
      <button type="submit">{editData ? 'Update' : 'Add'} Project</button>
    </form>
  );
}
