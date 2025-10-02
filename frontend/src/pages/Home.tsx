import React from 'react';

export default function Home() {
  return (
    <div className="hero p-0">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fw-bold">Bienvenido a Mi Recetario</h1>
              <p>Guarda y comparte tus recetas favoritas 🍲</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1543353071-087092ec393e?w=1600" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
