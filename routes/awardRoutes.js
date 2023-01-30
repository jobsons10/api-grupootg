const router = require('express').Router();
const Award = require('../models/Award');

router.get('/', async (req, res) => {
    try {
        const award = await Award.find()
        res.status(200).json({award})
    } catch (error) {
        res.status(500).json({error: error});
    }
})

router.get('/:name', async (req, res) => {
    const name = req.params.name
    try {
        const award = await Award.findOne({name: name})
        res.status(200).json({award})
    } catch (error) {
        res.status(500).json({error: error});
    }
})


router.patch('/:name', async (req, res) => {
    const name = req.params.name;
    const amount = req.body.amount
    if (!amount) {
        res.status(400).json({error: 'Amount are required'})
        return
    }

    try {
        await Award.updateOne({name: name}, {amount: amount});
        res.status(201).json({"message": 'Amount successfully updated'})
    } catch (error) {
        res.status(500).json({error: error});
    }
})

router.delete('/:name', async (req, res) => {
    const name = req.params.name;
    try {
        await Award.deleteOne({name: name})
    } catch (error) {
        res.status(500).json({error: error});
    }
})

module.exports = router;