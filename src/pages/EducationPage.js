import { useState } from 'react';
import EducationForm from '../components/EducationForm';
import EducationList from '../components/EducationList';

export default function EducationPage() {
  const [editItem, setEditItem] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setRefresh(!refresh); 
    setEditItem(null);    
  };

  return (
    <div>
      <h1>Education</h1>
      <EducationForm editData={editItem} onSave={handleSave} />
      <EducationList onEdit={setEditItem} refreshTrigger={refresh} />
    </div>
  );
}

