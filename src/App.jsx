import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Home />;
      case 'cursos':
        return <Courses />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;