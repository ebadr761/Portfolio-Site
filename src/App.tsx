import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TranscriptPage from './components/TranscriptPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transcript" element={<TranscriptPage />} />
      </Routes>
    </Router>
  );
}

export default App;