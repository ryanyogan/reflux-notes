/**
 * @jsx React.DOM
 */

var React = require('react');
var Note  = require('./Note.jsx');

var NoteList = React.createClass({

  getInitialState: function() {
    return {
      activeNodeId: null
    }
  },

  onActiveNote: function(id) {
    this.setState({
      activeNoteId: id
    });
  },

  render: function() {
    var notes = this.props.notes.concat().reverse();
    var noteNodes = notes.map(function(note) {
      return (
        <Note key={note._id} active={self.state.activeNodeId === note._id}
              note={note} onEdit={self.props.onEdit} onSelect={self.setActiveNote} />
      );
    }).bind(this);

    return (
      <div className="list-group">
        {noteNodes}
      </div>
    );
  }
});

module.exports = NoteList;
