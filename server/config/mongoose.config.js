const mongoose = require('mongoose');

const dbName = "pet_shop"

mongoose.connect("mongodb://localhost/" + dbName, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to " + dbName))
    .catch(err => console.log("Something went wrong when connecting to the database", err));