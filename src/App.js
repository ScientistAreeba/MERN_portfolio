import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: 20 }}>Education</Link>
        <Link to="/skills" style={{ marginRight: 20 }}>Skills</Link>
        <Link to="/projects" style={{ marginRight: 20 }}>Projects</Link>
        <Link to="/experience">Experience</Link>
      </nav>

      <Routes>
        <Route path="/" element={<EducationPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
