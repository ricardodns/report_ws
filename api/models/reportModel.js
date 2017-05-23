 'use strict'; var mongoose = require('mongoose'); var Schema = mongoose.Schema;


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
            type: Schema.Types.ObjectId, ref: 'User'
        },
        province: {
            type: String
        },
        status: {
	        type: [{
	            type: String,
	            enum: ['pending', 'ongoing', 'completed']}
            ]
        },
	    tipo: {
	      type: String
        }
});

module.exports = mongoose.model('Reports', ReportSchema);




