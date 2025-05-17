import { useState } from 'react';
import ProjectsForm from '../components/ProjectsForm';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
  const [editItem, setEditItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setEditItem(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>Projects</h2>
      <ProjectsForm editData={editItem} onSave={handleSave} />
      <ProjectsList onEdit={setEditItem} refreshTrigger={refresh} />
    </div>
  );
}
