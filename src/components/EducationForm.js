import { useState } from 'react';
import axios from 'axios';

export default function EducationForm() {
  const [form, setForm] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    description: '',
    grade: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/education`, form);
      alert("Education added!");
      // Reset form
      setForm({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
        grade: ''
      });
    } catch (error) {
      console.error("Error adding education:", error);
      alert("Failed to add education.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="institution"
        placeholder="Institution"
        value={form.institution}
        onChange={handleChange}
        required
      />
      <input
        name="degree"
        placeholder="Degree"
        value={form.degree}
        onChange={handleChange}
        required
      />
      <input
        name="fieldOfStudy"
        placeholder="Field of Study"
        value={form.fieldOfStudy}
        onChange={handleChange}
        required
      />
      <input
        name="startDate"
        placeholder="Start Date"
        type="date"
        value={form.startDate}
        onChange={handleChange}
        required
      />
      <input
        name="endDate"
        placeholder="End Date"
        type="date"
        value={form.endDate}
        onChange={handleChange}
      />
      <input
        name="grade"
        placeholder="Grade"
        value={form.grade}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
