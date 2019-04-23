const express = require('express')

const PostData = require('./db.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await PostData.find();
        res.status(200).json(posts)
    } catch(error) {
        console.log(error);
        res.status(500).json({
            error: "The posts information could not be retrieved."
          });
    }
})



module.exports = router;