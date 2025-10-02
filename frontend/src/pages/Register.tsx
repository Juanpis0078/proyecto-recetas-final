import React, { useState } from 'react';

export default function Register() {
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      const res = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Usuario registrado correctamente');
      } else {
        setMsg(data.message || 'Error en registro');
      }
    } catch (err) {
      setMsg('No se pudo conectar al servidor');
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <input name="username" className="form-control mb-2" placeholder="Usuario" />
          <input name="password" type="password" className="form-control mb-2" placeholder="Contraseña" />
          <button className="btn btn-success w-100">Registrar</button>
        </form>
        {msg && <div className="mt-3 alert alert-info">{msg}</div>}
      </div>
    </div>
  );
}
