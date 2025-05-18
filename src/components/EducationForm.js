import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EducationForm({ editData, onSave }) {
  const [form, setForm] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    description: '',
    grade: ''
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
        
        await axios.put(`${process.env.REACT_APP_API_URL}/api/education/${editData._id}`, form);
        alert('Education updated!');
      } else {
        
        await axios.post(`${process.env.REACT_APP_API_URL}/api/education`, form);
        alert('Education created!');
      }
      onSave();
      setForm({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
        grade: ''
      });
    } catch (err) {
      console.error('Error saving education:', err);
      alert('Failed to save education.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution" required />
      <input name="degree" value={form.degree} onChange={handleChange} placeholder="Degree" required />
      <input name="fieldOfStudy" value={form.fieldOfStudy} onChange={handleChange} placeholder="Field of Study" required />
      <input name="startDate" type="date" value={form.startDate} onChange={handleChange} required />
      <input name="endDate" type="date" value={form.endDate} onChange={handleChange} />
      <input name="grade" value={form.grade} onChange={handleChange} placeholder="Grade" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">{editData ? 'Update' : 'Add'} Education</button>
    </form>
  );
}
