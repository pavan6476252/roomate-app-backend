const multer = require('multer');
const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudnary_config');
const isAuthenticated = require('../middleware/firebase_mw');
const checkAuth = require('../middleware/checkAuth');
const imageUploadMiddleware = require('../config/cloudnary_config');
const Room = require('../schema/roomSchema');

router.post('/', checkAuth, async (req, res) => {
  try {
    const { user } = req.body;
    // if (user == null) {
    //   return res.status(400).json({ error: "Not authenticated" })
    // }
    console.log(req.uploadedUrls)
    const { title, price, location, amenities, roomType, facilities, description, ownerId, contactInfo,uid } = req.body;
    // const { uploadedUrls } = req.body;
    const { uploadedUrls } = [
      'https://res.cloudinary.com/deiiy8ytx/image/upload/v1701288305/rooms/x7huviutek0ilkha9o79.png'
    ];

    // console.log(title, price, location, amenities, roomType, facilities, description, ownerId, contactInfo);
    // if (!title || !price || !location || !roomType || !ownerId || !uploadedUrls) {
    //   return res.status(400).json({ error: 'Missing required fields' });
    // }

    const newRoom = new Room({
      uid,
      title,
      price,
      location,
      amenities,
      roomType,
      facilities,
      description,
      propertyOwner: {
        ownerId,
        contactInfo,
      },
      images: uploadedUrls
    });

    const savedRoom = await newRoom.save();

    res.status(201).json(savedRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});


module.exports = router;