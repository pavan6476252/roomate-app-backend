const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  amenities: {
    type: [String],
    default: [],
  },
  roomType: {
    type: String,
    enum: ['single', 'shared'],
    required: true,
  },
  facilities: {
    type: [String],
    default: [],
  },
  description: String,
  available: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    enum: ['Available', 'Pending', 'Occupied'],
    default: 'Available',
  },
  currentOccupants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RMUser',
    },
  ],
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  propertyOwner: {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RMUser',
      required: true,
    },
    contactInfo: {
      email: String,
      phoneNumber: String,
    },
  },

  images: [{
    type: String,
    required: true, 
  }]


});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
