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

router.get('/:id', async (req, res) => {
    try {
     const postbyid = await PostData.findById(req.params.id);
    
     if (postbyid) {
         res.status(200).json(postbyid)
     } else {
         res.status(404).json({
            message: "The post with the specified ID does not exist."
         })
     }
    } catch (error) {
        console.log(error);
        res.status(500).json({
          error: "The post information could not be retrieved."
        }); }
})



module.exports = router;