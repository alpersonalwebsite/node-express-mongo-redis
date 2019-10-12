const mongoose = require('mongoose')

// Original function
const exec = mongoose.Query.prototyoe.exec;

// We want to preserve this > Query, that's why we don't use a fat arrow fn
// Check README.md

mongoose.Query.prototype.exec = function() {
    
}