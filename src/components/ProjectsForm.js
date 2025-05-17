import { useState } from 'react';
import axios from 'axios';

export default function ProjectsForm() {
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

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        technologies: form.technologies.split(',').map(t => t.trim())  // Convert CSV to array
      };

      await axios.post(`${process.env.REACT_APP_API_URL}/api/projects`, payload);
      alert('Project added!');
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
      console.error("Error adding project:", err);
      alert("Failed to add project.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Project Title" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Project Description" required />
      <input name="technologies" value={form.technologies} onChange={handleChange} placeholder="Technologies (comma-separated)" required />
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL (optional)" />
      <input name="liveUrl" value={form.liveUrl} onChange={handleChange} placeholder="Live URL (optional)" />
      <input name="githubUrl" value={form.githubUrl} onChange={handleChange} placeholder="GitHub URL (optional)" />
      <input name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
      <input name="endDate" type="date" value={form.endDate} onChange={handleChange} />
      <button type="submit">Add Project</button>
    </form>
  );
}
