 'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ReportSchema = new Schema({
        address: {
            type: String
        },
        city: {
            type: String
        },
        description: {
            type: String
        },
        id: {
            type: Number
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
        neighborhood: {
            type: String
        },
        number: {
            type: Number
        },
        ownerId: {
            type: Number
        },
        province: {
            type: String
        },
        status: {
	        type: [{
	            type: String,
	            enum: ['pending', 'ongoing', 'completed']}
            ],
            default: ['pending']
        },
	    tipo: {
	      type: String
        }
});

module.exports = mongoose.model('Reports', ReportSchema);




