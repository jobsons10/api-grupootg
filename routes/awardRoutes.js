const router = require('express').Router();
const Award = require('../models/Award');

router.get('/', async (req, res) => {
    try {
        const awards = await Award.find()
        res.status(200).json({awards})
    } catch (error) {
        res.status(500).json({error: error});
    }
})


router.post('/', async (req, res) => {
    const { name, type, amount } = req.body
    if (!name || !type || !amount) {
        res.status(400).json({error: 'Name, type and amount are required'})
    }
    const award = {
        name,
        type,
        amount
    }

    try {
        await Award.create(award);
        res.status(201).json({award})
    } catch (error) {
        res.status(500).json({error: error});
    }
})

module.exports = router;