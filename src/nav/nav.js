import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Asegúrate de crear este archivo en la misma carpeta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Biblio<span>Barrio</span></Link>
      </div>

      {/* Clase dinámica para mostrar/ocultar en móviles */}
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li><a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a></li>
        <li><a href="#biblioteca" onClick={() => setIsOpen(false)}>Biblioteca</a></li>
        <li>
          <Link to="/materias" onClick={() => setIsOpen(false)}>Materias</Link>
        </li>
        <li>
          <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>
            Iniciar Sesión
          </Link>
        </li>
        <li>
          <a href="/login-docente" className="btn-docente" onClick={() => setIsOpen(false)}>
            Acceso Docente
          </a>
        </li>
      </ul>

      {/* Icono de menú para dispositivos móviles */}
      <div className="burger" onClick={toggleMenu}>
        <div className={isOpen ? 'line1 toggle' : 'line1'}></div>
        <div className={isOpen ? 'line2 toggle' : 'line2'}></div>
        <div className={isOpen ? 'line3 toggle' : 'line3'}></div>
      </div>
    </nav>
  );
};

export default Navbar;