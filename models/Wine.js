const mongoose = require("../db/connection");

const wineSchema = new mongoose.Schema(
    {
        // owner: {
        //     _id: mongoose.Schema.Types.ObjectId,
        //     ref: 'users'
        // },

        name: {
            type: String,
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        varietal: {
            type: String,
            // enum: ['Red - Cabernet Sauvignon', 'Red - Pinot Noir', 'Red - Merlot', 'Red - Malbec', 'Red- Zinfandel', 'Red - Bordeaux', 'Red - Rioja', 'Red - Syrah', 'Red - Tempranillo', 'White - Chardonnay', 'White - Sauvignon Blanc', 'White - Pinot Gris', 'White - Pinot Grigio', 'White - Riesling', 'White - Gewurtztraimer', 'White - Chenin Blanc', 'Rosé', 'Dessert - Port', 'Dessert - Sauternes','Dessert - Icewine','Dessert - Sherry', 'Sparkling - Champagne', 'Sparkling - Traditional', 'Sparkling - Moscato', 'Sparkling - Prosecco', 'Sparkling - Cava', 'Sparkling - Cremant'],
        },
        vineyard: {
            type: String,
        },
        vintage: {
            type: String,
        },
        country: {
            type: String,            
        },
        region: {
            type: String,            
        },
        image: {
            type: Buffer,
        },
        notes: {
            type: String,
        },
        likes: {
            type: Number,
            default: 0
        },
        location: {
            type: String,
        },
        who_with: {
            type: String,
        },
        occasion: {
            type: String,
        },
        when:{
            type: Date,
        },
        reminder:{
            type: String,
        },
    },
    {
        timestamps: true
    }
);

const Wine = mongoose.model('wines', wineSchema);

module.exports = Wine;


