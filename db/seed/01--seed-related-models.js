
const Wine = require('../../models/Wine')
const User = require('../../models/User')
const wineRawData = require('../data/wineRaw.json')
// const userRawData = require('../data/userRaw.json')

Wine.find({})
    .then(wine => {
        console.log(wine)
        wine.forEach(wine => {
            let wineJSON = wineRawData.find(wineJSON => wineJSON.name === wine.name)
            User.findOne({name: wineJSON.user})
                .then(user => {
                    wine.user = user._id
                    wine.save()
                })

        })
    })





// CODE HOLD    

// const user= require('../../models/user');
// const Wine = require('../../models/Wine');
// const wineRawData = require('../data/wineRaw.json');

// Wine.find({})
//     .then(wines => {
//         console.log(wines) 
//         wines.forEach(wine => {
//             let wineJSON = wineRawData.find(wineJSON => wineJSON.name === wine.name)
//             Wine.findOne({ name: wineJSON.user })
//                 .then(user => {
//                     wine.user = user._id
//                     wine.save()
//                 })
//         })
//     })

// M = Wine K = User Title = name