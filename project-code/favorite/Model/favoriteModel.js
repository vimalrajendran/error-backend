const mongoose = require('mongoose');


const favoriteSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    food:[{
    
        label:String,
        foodId:String,
        nutrients:String,
      //  imageUrl:String

    }]

    
})


//creating collection by using userSchema
const Favorite = mongoose.model('Favorite',favoriteSchema);
module.exports = Favorite;