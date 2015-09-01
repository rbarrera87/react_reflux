import React from 'react';
import Reflux from 'reflux';
import $ from 'jquery';
import BuscadorActions from '../actions/BuscadorActions';

var PostStore = Reflux.createStore({
  listenables: [BuscadorActions],
  postlist: [],
  postlist_query: [],
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
  },
  fetchListWithParams: function (q) {
    if (q == "" || typeof q == "udefined") {
      this.trigger(this.postlist);
    }else{
      var posts_return = [];
      for (var i = this.postlist.length - 1; i >= 0; i--) {
        if(this.postlist[i].title.toLocaleLowerCase().match(q.toLocaleLowerCase())){
          posts_return.push(this.postlist[i]);
        }
      };
      this.postlist_query = posts_return;
      this.trigger(this.postlist_query);
    }
  }
});

export default PostStore;