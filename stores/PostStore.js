import React from 'react';
import Reflux from 'reflux';
import $ from 'jquery';
import BuscadorActions from '../actions/BuscadorActions';

var PostStore = Reflux.createStore({
  listenables: [BuscadorActions],
  postlist: [],
  init: function(){
    this.fetchList()
  },
  fetchList: function(q){
    var $this = this;
    if ($this.postlist.size > 0) {
      console.log("Ya hay datos");
      console.log($this.postlist);
    }else{
      console.log("Aun no hay datos :( ");
    }
    $.get('http://localhost:3000/api/posts', {q: q})
      .done(function(data){
        console.log("Post Cargados");
        $this.postlist = data.posts;
        $this.trigger($this.postlist);
      });
  }
});

export default PostStore;