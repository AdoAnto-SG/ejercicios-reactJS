import React, { useState } from 'react';

const FormularioDeRegistro = () => {
  const [datosFormulario, setdatosFormulario] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [datosEnviados, setdatosEnviados] = useState(null);

  const manejarCambio = (event) => {
    const { name, value } = event.target;
    setdatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    setdatosEnviados(datosFormulario);
  };

  return (
    <div className='contenedor-registro'>
      <div className='contenedor-formulario'>
        <h2>Formulario de Registro</h2>
        <form onSubmit={manejarEnvio}>
          <div className='form-group'>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={datosFormulario.name}
              onChange={manejarCambio}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Correo Electrónico:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={datosFormulario.email}
              onChange={manejarCambio}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Contraseña:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={datosFormulario.password}
              onChange={manejarCambio}
              required
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
      <div className='contenedor-datos-enviados'>
        {datosEnviados && (
          <div>
            <h2>Datos Enviados:</h2>
            <p><strong>Nombre:</strong> {datosEnviados.name}</p>
            <p><strong>Correo Electrónico:</strong> {datosEnviados.email}</p>
            <p><strong>Contraseña:</strong> {datosEnviados.password}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioDeRegistro;
