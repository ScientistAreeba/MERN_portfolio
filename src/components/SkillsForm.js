import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SkillsForm({ editData, onSave }) {
  const [form, setForm] = useState({
    name: '',
    level: 'Beginner',
    category: 'Tool',
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editData) {
        //update
        await axios.put(`${process.env.REACT_APP_API_URL}/api/skills/${editData._id}`, form);
        alert('Skill updated!');
      } else {
        //create
        await axios.post(`${process.env.REACT_APP_API_URL}/api/skills`, form);
        alert('Skill created!');
      }

      onSave(); //refresh state
      setForm({ name: '', level: 'Beginner', category: 'Programming' }); //reset
    } catch (err) {
      console.error('Error saving skill:', err);
      alert('Failed to save skill.');
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
      <select
        name="level"
        value={form.level}
        onChange={handleChange}
        required
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Expert</option>
      </select>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option>Programming</option>
        <option>Language</option>
        <option>Framework</option>
        <option>Tool</option>
        <option>Soft Skill</option>
        <option>Other</option>
      </select>
      <button type="submit">{editData ? 'Update' : 'Add'} Skill</button>
    </form>
  );
}
