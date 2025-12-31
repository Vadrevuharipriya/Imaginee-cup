import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import StudentsPage from './pages/StudentsPage';
import TopicsPage from './pages/TopicsPage';
import SessionPage from './pages/SessionPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/session" element={<SessionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
