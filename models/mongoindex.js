const mongoose = require('mongoose');
const { STRING } = require('sequelize');
const Schema = mongoose.Schema;

const paragraphSchema = Schema({
    sentence: {
        type: String,
        enum: ['overview', 'describe', 'compare', 'trend', null],
    },
    phrases: [{
        type: {
            type: String,
            enum: ['key', 'series', 'value', null], 
            required : true
        },
        source: String,
        target: String
    }],

    __v: {
        type: Number,
        select: false
    }
});



    // phrases: [{
    //     type: {
    //         type: String,
    //         enum: ['key', 'series', 'value', null], 
    //         required : true
    //     },
    //     source: String,
    //     target: String
    // }],


// const paragraphSchema = mongoose.Schema({
//     statista_index: {
//         type: String,
//         required: true,
//     },
//     title: {
//         type: String,
//         required: true,
//     },

//     // ignore versionkey
//     __v: {
//         type: Number,
//         select: false
//     }
// });

const db2 = {};
db2.mongoose = mongoose;
db2.paragraphs = mongoose.model("paragraphs", paragraphSchema);

module.exports = db2;