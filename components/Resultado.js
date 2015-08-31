import React from 'react';
import Reflux from 'reflux';
import PostStore from '../stores/PostStore';

var Resultado = React.createClass({
  mixins: [Reflux.connect(PostStore, 'poststore')],
  render: function(){
    console.log(this.state.poststore);
    console.log("PostStore>> " + this.state.poststore);
    if (this.state.poststore && this.state.poststore.length > 0) {
      return <ul>
        {
          this.state.poststore.map(function(post){
            return <li>{post.title}</li>
          })
        }
      </ul>
    }else{
      return(<p>No hay posts :(</p>);
    };
  }
});

module.exports = Resultado;