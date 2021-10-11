import React, { Component } from 'react'

//const app = stateless o funcional
//const App = () => {
class App extends Component {
  constructor(){
    super();
    this.state = {
      usuarios: [
        {
          nombre: 'Marcela',
          correo: 'contact@test.com',
          enlace: 'sitio.com'
        },
        {
          nombre: 'Lorena',
          correo: 'contact@test2.com',
          enlace: 'sitio2.com'
        }
      ]
    }
  }

  

  ponerFilas = () => (
    this.state.usuarios.map((usuario) => (
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.enlace}</td>
      </tr>
    ))
  );

  render(){
    return(
      <div className='margen'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    )
  }

}

export default App;