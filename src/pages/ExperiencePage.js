import { useState } from 'react';
import ExperienceForm from '../components/ExperienceForm';
import ExperienceList from '../components/ExperienceList';

export default function ExperiencePage() {
  const [editItem, setEditItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setEditItem(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <ExperienceForm editData={editItem} onSave={handleSave} />
      <ExperienceList onEdit={setEditItem} refreshTrigger={refresh} />
    </div>
  );
}

