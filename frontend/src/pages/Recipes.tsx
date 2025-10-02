import React from 'react';

const data = [
  { title: 'Pizza Casera', img: 'https://images.unsplash.com/photo-1601924582971-c14e6c6b48a5?w=800' },
  { title: 'Ensalada fresca', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800' },
  { title: 'Pasta al pesto', img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800' },
];

export default function Recipes() {
  return (
    <div>
      <h2 className="mb-4">Recetas Destacadas</h2>
      <div className="row">
        {data.map((r, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card h-100 shadow-sm">
              <img src={r.img} className="card-img-top" alt={r.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{r.title}</h5>
                <p className="mt-auto"><button className="btn btn-primary">Ver receta</button></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
