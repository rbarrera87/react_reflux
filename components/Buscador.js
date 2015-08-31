import React from "react";
import Reflux from "reflux";
import InputBuscar from "./InputBuscar";
import Resultado from "./Resultado";

var Buscador = React.createClass({
  render: function(){
    return (
      <div>
        <InputBuscar />
        <Resultado />
      </div>
    );
  }
});

module.exports = Buscador;