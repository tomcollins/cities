exports.config =
  # See http://brunch.io/#documentation for docs.
  modules:
  	definition: false
  	wrapper: false

  sourceMaps: false

  optimize: true 

  files:
    javascripts:
      joinTo: 
      	'js/app.js' : /^app/
      	'js/vendor.js' : /^(vendor|bower_components)/
    
    stylesheets:
      joinTo: 
      	'css/app.css' : /^(app|vendor|bower_components)/
    
