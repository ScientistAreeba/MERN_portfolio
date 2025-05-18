import { useState } from 'react';
import SkillsForm from '../components/SkillsForm';
import SkillsList from '../components/SkillsList';

export default function SkillsPage() {
  const [editItem, setEditItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setEditItem(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>Skills</h2>
      <SkillsForm editData={editItem} onSave={handleSave} />
      <SkillsList onEdit={setEditItem} refreshTrigger={refresh} />
    </div>
  );
}
