import React from 'react';
import Reflux from 'reflux';
import BuscadorActions from "../actions/BuscadorActions";

var InputBuscar = React.createClass({
  handleUserInput: function(){
    debugger;
    BuscadorActions.fetchList(this.refs.inputBuscador.getDOMNode().value);
  },
  render: function(){
    return (
      <input
      type="text"
      placeholder="Buscar"
      ref="inputBuscador"
      onChange= {this.handleUserInput}/>
    );
  }
});

module.exports = InputBuscar;