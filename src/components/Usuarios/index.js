import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';
import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {

  componentDidMount(){
    this.props.traerTodos();
  }

  ponerContenido = () => {
    if (this.props.cargando){
      return <Spinner />;
    }

    if (this.props.error){
      return <Fatal mensaje={this.props.error} />;
    }
    return <Tabla usuarios={this.props.usuarios}/>
  }



  render(){
    console.log(this.props.cargando);
    console.log(this.props.error);
    return(
      <div >
        { this.ponerContenido() }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

//El primer parametro son los reducer que necesito
//El segundo son las acciones
export default connect(mapStateToProps, usuariosActions)(Usuarios);