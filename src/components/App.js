import React, { Component } from 'react'

//const app = stateless o funcional
//const App = () => {
class App extends Component {

  ponerFilas = () => [
    <tr>
      <td>
        Marcela
      </td>
      <td>
        contact@test.com
      </td>
      <td>
        sitio.com
      </td>
    </tr>,
    <tr>
      <td>
        Karen
      </td>
      <td>
        contact@test2.com
      </td>
      <td>
        sitio2.com
      </td>
    </tr>
  ];

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