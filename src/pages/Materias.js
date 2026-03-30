import React, { useState, useEffect } from 'react';
import '../nav/nav.css';
import './Materias.css';

const Materias = () => {
  const [filtroActivo, setFiltroActivo] = useState('todas');
  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);
  const [animado, setAnimado] = useState(false);

  useEffect(() => {
    setAnimado(true);
  }, []);

  const materias = [
    {
      nombre: 'Matemáticas',
      descripcion: 'Álgebra, geometría, trigonometría y cálculo básico.',
      icono: '📐',
      categoria: 'exactas',
      color: '#ff6b6b',
      dificultad: 'Media',
      recursos: 45,
      estudiantes: 1200
    },
    {
      nombre: 'Lengua y Literatura',
      descripcion: 'Comprensión lectora, redacción y análisis de textos.',
      icono: '📚',
      categoria: 'humanidades',
      color: '#4ecdc4',
      dificultad: 'Baja',
      recursos: 38,
      estudiantes: 950
    },
    {
      nombre: 'Ciencias Naturales',
      descripcion: 'Biología, física y química para entender el mundo natural.',
      icono: '🧬',
      categoria: 'ciencias',
      color: '#45b7d1',
      dificultad: 'Alta',
      recursos: 52,
      estudiantes: 1100
    },
    {
      nombre: 'Historia',
      descripcion: 'Historia nacional e internacional con enfoque crítico.',
      icono: '🏛️',
      categoria: 'humanidades',
      color: '#f9ca24',
      dificultad: 'Media',
      recursos: 41,
      estudiantes: 780
    },
    {
      nombre: 'Educación Física',
      descripcion: 'Salud, deporte, y bienestar físico y mental.',
      icono: '⚽',
      categoria: 'deportes',
      color: '#6c5ce7',
      dificultad: 'Baja',
      recursos: 29,
      estudiantes: 650
    },
    {
      nombre: 'Inglés',
      descripcion: 'Aprendizaje del idioma inglés con enfoque práctico.',
      icono: '🇺🇸',
      categoria: 'idiomas',
      color: '#fd79a8',
      dificultad: 'Media',
      recursos: 35,
      estudiantes: 890
    }
  ];

  const categorias = [
    { id: 'todas', nombre: 'Todas', icono: '🌟' },
    { id: 'exactas', nombre: 'Exactas', icono: '🔢' },
    { id: 'humanidades', nombre: 'Humanidades', icono: '📖' },
    { id: 'ciencias', nombre: 'Ciencias', icono: '🧪' },
    { id: 'deportes', nombre: 'Deportes', icono: '🏃' },
    { id: 'idiomas', nombre: 'Idiomas', icono: '🗣️' }
  ];

  const materiasFiltradas = filtroActivo === 'todas'
    ? materias
    : materias.filter(m => m.categoria === filtroActivo);

  const abrirModal = (materia) => {
    setMateriaSeleccionada(materia);
  };

  const cerrarModal = () => {
    setMateriaSeleccionada(null);
  };

  return (
    <div className="materias-page">
      <div className="materias-container">
        <div className={`materias-header ${animado ? 'animado' : ''}`}>
          <h1>🌟 Materias del Colegio</h1>
          <p>Descubre recursos interactivos, ejercicios dinámicos y proyectos creativos para cada materia.</p>

          <div className="estadisticas">
            <div className="stat">
              <span className="numero">{materias.length}</span>
              <span className="label">Materias</span>
            </div>
            <div className="stat">
              <span className="numero">{materias.reduce((acc, m) => acc + m.recursos, 0)}</span>
              <span className="label">Recursos</span>
            </div>
            <div className="stat">
              <span className="numero">{materias.reduce((acc, m) => acc + m.estudiantes, 0)}</span>
              <span className="label">Estudiantes</span>
            </div>
          </div>
        </div>

        <div className="filtros">
          {categorias.map(cat => (
            <button
              key={cat.id}
              className={`filtro-btn ${filtroActivo === cat.id ? 'activo' : ''}`}
              onClick={() => setFiltroActivo(cat.id)}
            >
              <span className="filtro-icono">{cat.icono}</span>
              {cat.nombre}
            </button>
          ))}
        </div>

        <div className="materias-grid">
          {materiasFiltradas.map((m, index) => (
            <article
              key={index}
              className="materia-card"
              style={{ '--delay': `${index * 0.1}s` }}
              onClick={() => abrirModal(m)}
            >
              <div className="materia-header">
                <span className="materia-icono" style={{ backgroundColor: m.color }}>
                  {m.icono}
                </span>
                <span className="materia-dificultad">{m.dificultad}</span>
              </div>

              <h2>{m.nombre}</h2>
              <p>{m.descripcion}</p>

              <div className="materia-stats">
                <span>📚 {m.recursos} recursos</span>
                <span>👥 {m.estudiantes} estudiantes</span>
              </div>

              <div className="materia-buttons">
                <button className="btn-materia">Ver Recursos</button>
                <button className="btn-materia-outline">Ir a Materia</button>
              </div>
            </article>
          ))}
        </div>

        <section className="extras">
          <h3>🚀 Características Especiales</h3>
          <div className="extras-grid">
            <div className="extra-item">
              <span className="extra-icon">🎯</span>
              <h4>Tutorías Personalizadas</h4>
              <p>Programas adaptados a tu nivel y ritmo de aprendizaje.</p>
            </div>
            <div className="extra-item">
              <span className="extra-icon">📄</span>
              <h4>Guías PDF</h4>
              <p>Materiales imprimibles para estudio offline.</p>
            </div>
            <div className="extra-item">
              <span className="extra-icon">🏆</span>
              <h4>Retos Semanales</h4>
              <p>Compite con otros estudiantes y gana premios.</p>
            </div>
            <div className="extra-item">
              <span className="extra-icon">💬</span>
              <h4>Foro Interactivo</h4>
              <p>Preguntas y respuestas con docentes y compañeros.</p>
            </div>
          </div>
        </section>
      </div>

      {materiaSeleccionada && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>✕</button>
            <div className="modal-header">
              <span className="modal-icono" style={{ backgroundColor: materiaSeleccionada.color }}>
                {materiaSeleccionada.icono}
              </span>
              <h2>{materiaSeleccionada.nombre}</h2>
            </div>
            <p className="modal-descripcion">{materiaSeleccionada.descripcion}</p>

            <div className="modal-stats">
              <div className="modal-stat">
                <span className="stat-number">{materiaSeleccionada.recursos}</span>
                <span className="stat-label">Recursos Disponibles</span>
              </div>
              <div className="modal-stat">
                <span className="stat-number">{materiaSeleccionada.estudiantes}</span>
                <span className="stat-label">Estudiantes Activos</span>
              </div>
              <div className="modal-stat">
                <span className="stat-number">{materiaSeleccionada.dificultad}</span>
                <span className="stat-label">Nivel de Dificultad</span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-modal-primary">Comenzar Ahora</button>
              <button className="btn-modal-secondary">Ver Recursos</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Materias;
