const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button 
            className="nav-link" 
            onClick={() => setCurrentPage('inicio')}
          >
            Inicio
          </button>
        </li>
        <li className="nav-item">
          <button 
            className="nav-link" 
            onClick={() => setCurrentPage('cursos')}
          >
            Oferta de Cursos
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;