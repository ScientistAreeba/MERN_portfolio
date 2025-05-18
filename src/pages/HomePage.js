import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Portfolio (Mern Full Stack Project) </h1>
      
      <div className="nav-grid">
        <Link to="/education" className="nav-card">📚 Education</Link>
        <Link to="/skills" className="nav-card">🛠️ Skills</Link>
        <Link to="/projects" className="nav-card">💻 Projects</Link>
        <Link to="/experience" className="nav-card">💼 Experiences</Link>
      </div>
    </div>
  );
}
