var mongoose = require('mongoose'), Schema = mongoose.Schema;

var userSchema = new Schema (
     {
          fullName: {
               type: String,
               required: []
          }
     }
);