/**
 * @jsx React.DOM
 */

var React   = require('react');
var NoteApp = require('./components/NoeApp.jsx');

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head lang="en">
          <base href="/" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>React Note App</title>
          <link href="css/bootstrap.css" rel="stylesheet" />
          <link href="css/app.css" rel="stylesheet" />
        </head>
        <body>
          <NoteApp />
          <script type="text/javascript" src="/hs/browserify/bundle.js"></script>
          <script src="js/bootstrap.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = App;
