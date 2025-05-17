import { useState } from 'react';
import axios from 'axios';

export default function SkillsForm() {
  const [form, setForm] = useState({
    name: '',
    level: 'Beginner',
    category: 'Programming',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/skills`,
        form,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert('Skill added!');
      // Reset
      setForm({ name: '', level: 'Beginner', category: 'Programming' });
    } catch (err) {
      console.error('Error adding skill:', err);
      alert('Failed to add skill.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Skill Name"
        required
      />

      {/* Level dropdown */}
      <select
        name="level"
        value={form.level}
        onChange={handleChange}
        required
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>

      {/* Category dropdown */}
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option value="Programming">Programming</option>
        <option value="Language">Language</option>
        <option value="Framework">Framework</option>
        <option value="Tool">Tool</option>
        <option value="Soft Skill">Soft Skill</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add Skill</button>
    </form>
  );
}
