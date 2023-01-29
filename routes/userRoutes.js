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
router.get("/:email", async (req, res) => {
    const email = req.params.email
    try {
        const user = await User.findOne({email: email});

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

// UPDATE USER
router.patch("/:email", async (req, res) => {
  const email = req.params.email

  const chances = req.body.chances
  try {
    const updatedUser = await User.updateOne({email: email}, {chances: chances});

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
})



module.exports = router;