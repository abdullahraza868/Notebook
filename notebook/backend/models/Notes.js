const mongoose = require('mongoose');

const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    require: true,
    default: Date.now
  },
});

module.exports = mongoose.model('notes', NotesSchema)