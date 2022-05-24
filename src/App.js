import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Shared/Footer';
import Header from './pages/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<p>HOME PAGE</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
