const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: 
    { 
        type: String, 
        required: [true, "Must have a name."],
        minlength: [3, "Name must have at least 3 characters"]
    },
    type: 
    { 
        type: String,
        required: [true, "Must have a type."],
        minlength: [3, "Type must have at least 3 characters"]
    },
    description: 
    { 
        type: String,
        required: [true, "Must have a description."],
        minlength: [3, "Description must have at least 3 characters"]
    },
    skill1: 
    {
        type: String
    },
    skill2: 
    {
        type: String
    },
    skill3: 
    {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);