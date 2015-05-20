"use strict";

var App = {
  init: function init() {
    console.log('App initialized.');
  }
};

module.exports = App;


/*

require.config({
  shim: {
    'facebook' : {
      exports: 'FB'
    }
  },
  paths: {
    'facebook': '//connect.facebook.net/en_US/sdk'
  }
})

$(function() { 
	require(['fb', 'js/like_gate'], function(FB, likeGate){
		
	});
});

*/