const express = require('express');
const router = express.Router();
const Wine = require('../models/Wine');


// REVIEW ALL WINE ENTRIES
// ---------------------------------------
router.get('/', (req, res, next) => {
    Wine.find()
        .then((wines)=>res.json(wines))
        .catch(next);
});

//REVIEW ALL WINE ENTRIES BY ID 
//-----------------------------------------
router.get('/:id', async (req,res,next) => {
    try{
        const wineID = await Wine.findById(req.params.id);
        res.json(wineID);
    } catch (err) {
        next(err);
    }
});

//CREATE OR POST NEW WINE ENTRY
//-------------------------------------------
router.post('/',async (req,res,next) => {
    try {
        const newWineEntry = await Wine.create(req.body);
        res.status(201).json(newWineEntry);
        res.redirect(303,'/');
    } catch (err) {
        next(err);
    }
});


//UPDATE EXISTING WINE ENTRY
//---------------------------------------------
router.put('/id', async (req,res,next) => {
    try {
        const WineEntrytoUpdate = await Wine.findByIdAndUpdate(
            req.paramsid,
            req.body,
            {
                new:true,
            }
        );
        if (WineEntrytoUpdate) {
            res.redirect(303, '/');
        } else {
            res.sendStatus(404);
        }
    }catch (err) {
        next(err);
    }
});

//DELETE WINE ENTRY
router.delete('/:id',async(req, res, next) => {
    try {
            const WineEntrytoDelete = await Wine.findByIdAndDelete(req.params.id);
            if (WineEntryToDelete) {
                res.redirect(303, '/');
            }else {
                res.sendStatus(404);
            }
        } catch (err) {
            next (err);

}        
})

module.exports = router;
