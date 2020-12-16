const mongoose = require('mongoose');

const awakeSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    awake: {type: Boolean}
});


module.exports = mongoose.model('awake', awakeSchema);