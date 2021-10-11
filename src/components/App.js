import React, { Component } from 'react'
import axios from 'axios'


class App extends Component {
  constructor(){
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount(){
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log('respuesta ', respuesta.data);
    this.setState({
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
    })
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuario) => (
      <tr key={usuario.nombre}>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.enlace}</td>
      </tr>
    ))
  );

  render(){
    console.log(this.state.usuarios)
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