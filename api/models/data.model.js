const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const dataSchema = new Schema({
    data: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },

    dataHash: {
        type: String,
        required: true,
        trim: true
    },

    dataOwner: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: false
    },
}, {
    timestamps: true

});

const dataModel = mongoose.model('dataModel', dataSchema);
module.exports = dataModel;