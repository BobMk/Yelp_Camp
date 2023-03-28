const mongoose = requre('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    body: String,
    rating: Number
});

module.exports = mongoose.model("Review", reviewSchema);