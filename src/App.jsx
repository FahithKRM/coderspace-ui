
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Canditates from './pages/Canditates';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Canditates />} />
      </Routes>
    </Router>
  );
};

export default App;