
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    picture: {
        type: String,
        trim: true,
    },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    currentRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    },
    preferences: {
        amenities: [String],
        budgetRange: { type: Number, default: 0 },
    },
    role: {
        type: String,
        enum: ['student', 'propertyOwner'],
        default: 'student',
    },

});

const User = mongoose.model('RMUser', userSchema);

module.exports = User;
