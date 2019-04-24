const express = require('express')

const PostData = require('./db.js')

const router = express.Router();

    // GET - render all posts
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

    // GET - render post by id
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

    // DELETE - remove post
    router.delete('/:id', async (req, res) => {
        try {
            const deletepost = await PostData.remove(req.params.id);
            if (deletepost > 0) {
                res.status(200).json({message: `POST DELETED`})
            }
            else {
                res.status(404).json({ message: "The post with the specified ID does not exist." });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "The post could not be removed" });
        }
    })

    // POST 
    router.post('/', async (req, res) => {
        const {
          title,
          contents
        } = req.body;
        if (title && contents) {
          try {
            const post = await Posts.insert({
              title,
              contents
            });
            res.status(201).json(post);
          } catch (error) {
            console.log(error);
            res.status(500).json({
              error: "There was an error while saving the post to the database"
            })
          }
        } else {
          res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
          });
        }
      });

  

 
module.exports = router;