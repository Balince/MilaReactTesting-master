var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SuggestionBoxSchema = new Schema({
    subject: {
        type: String,
        required: true
        
    },
    body: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false
        
    }
},  {
    timestamps: {
        createdAt: 'created_at',
    }
})


var SuggestionBox = mongoose.model("SuggestionBox", SuggestionBoxSchema);

module.exports = SuggestionBox;