module.exports = config:
  sourceMaps: false
  optimize: true 
  files:
    javascripts: joinTo:
      'js/libraries.js': /^(?!app\/)/
      'js/index.js': /^app[\\\/]scripts[\\\/]index/
      'js/press.js': /^app[\\\/]scripts[\\\/]press/
    stylesheets: joinTo: 
      'styles/reset.css': /^bower_components/
      'styles/app.css': 'app/styles/app.css'
      'styles/logo.css': 'app/styles/logo.css'
      'styles/logo_wide.css': 'app/styles/logo_wide.css'

