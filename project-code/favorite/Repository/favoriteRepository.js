const FavoriteModel = require('../Model/favoriteModel');

function AddFavorite(info) {

    return new Promise((resolve, reject) => {
        FavoriteModel.findOne({ id:info.id }, (err, user) => {
            if (!user) {
                const Favorite = new FavoriteModel({
                    id: info.id,
                    food: [
                        {
                           label: info.label,
                            foodId: info.foodId,
                            nutrients: info.nutrients,
                            // imageUrl: info.imageUrl
                        }
                    ]

                })

                Favorite.save((err) => {
                    if (!err) {
                        resolve("food Added to favorite successfully")
                    }
                    else{
                        console.log(err)
                    }
                })

            }

            else if (user) {

                FavoriteModel.findOneAndUpdate({ id: info.id }, {
                    $push: {
                       food: {

                           
                          label: info.label,
                            foodId: info.foodId,
                            nutrients: info.nutrients,
                            // imageUrl: info.imageUrl

                      // 
                     }
                    }
                }, (err, data) => {
                    if (!err) {

                        resolve('food Added to favorite Successfully');
                    }
                })

            }
            else {
                console.log(err)
               // reject(err);
            }
        })
    })
}


function GetFavorite(id) {
    return new Promise((resolve,reject)=>{
        FavoriteModel.findOne({id:info.id},(err,user)=>{
            if(!err&&user){
                resolve(user);
            }
            else{
                reject('User not found');
            }
        })
    })
}


//to remove form favorite
function RemoveFavorite(info){
    return new Promise((resolve,reject)=>{
        FavoriteModel.findOneAndUpdate(
            { id: info.id },
            { $pull: { favoritefoodArr: { label:info.label } } },
            (err,data)=>{
                if(!err&&data){
                    console.log(data);
                    resolve("food removed from favoritelist successfully");
                }
                else {
                    reject("this food is not in favorite list");
                }
            }
        )
    })
}

module.exports = { AddFavorite,GetFavorite,RemoveFavorite }
