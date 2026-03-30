import React from 'react';
import Navbar from '../nav/nav';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="home-main">
        <div className="hero-section">
          <h1>Bienvenido a BiblioBarrio</h1>
          <p>Democratizando el acceso a la educación digital</p>
          <button className="cta-button">Explorar Biblioteca</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
