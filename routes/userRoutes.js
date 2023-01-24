const router = require('express').Router();
const User = require("../models/User.js")

// CREATE USER
router.post("/", async (req, res) => {
    // req.body
    const { email, company, chances } = req.body;
     if (!email){
        res.status(422).json({error: 'email, company an chances are required'})
    }
    const user = {
      email,
      company,
      chances,
    };
  
    try {
      await User.create(user);
      
      console.log("Created user")
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
  
// READ USER
router.get("/", async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})


module.exports = router;