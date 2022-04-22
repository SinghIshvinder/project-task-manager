const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Mandatory Field"],
            trim: true,
            maxlength: [30, "name can't be more than 30 characters!"]
        },
        completed : {
            type: Boolean,
            default: false 
        }

    }
)





module.exports = mongoose.model('Task', taskSchema); 