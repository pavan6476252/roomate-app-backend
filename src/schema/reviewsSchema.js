const reviewSchema = new mongoose.Schema({
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RMUser',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comments: String,
    timestamp: {
      type: Date,
      default: Date.now,
    },
    
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  