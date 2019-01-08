const express = require('express')
const router = express.Router()
const userController = require("../controllers/User")
const commentController = require('../controllers/Comment')
const locationController = require('../controllers/Location')


// router.get('/', userController.index)

//these routes include full crud for locations

//read
router.get('/', locationController.index)
//create
router.get('/add-location', locationController.create)
//update
// router.get('/:id/edit-location', locationController.edit)
//update
// router.patch('/:id', locationController.update)
//delete
// router.delete('/:id/edit-location', locationController.delete)

//add delete and read for comments 
// router.get('/add-comment', locationController.create)
// router.delete('/:id', locationController.delete)

//add and delete for users

// router.get('/add', locationController.create)
// router.delete('/:id/', locationController.delete)


// router.get('/', linkController.index)
// router.post('/', linkController.create)
// router.get('/new', linkController.new)
// router.get('/:id', linkController.show)
// router.get('/:id/edit', linkController.edit)
// router.patch('/:id', linkController.update)
// router.delete('/:id', linkController.delete)

// router.get('/:id/comments', commentController.index)
// router.get('/:id/comments/new', commentController.new)
// router.post('/:id/comments', commentController.create)
// router.get('/:id/comments/:commentId', commentController.show)
// router.get('/:id/comments/:commentId/edit', commentController.edit)
// router.patch('/:id/comments/:commentId', commentController.update)
// router.delete('/:id/comments/:commentId', commentController.delete)





module.exports = router