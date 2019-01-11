const express = require('express')
const router = express.Router()
const userController = require("../controllers/User")
const commentController = require('../controllers/Comment')
const locationController = require('../controllers/Location')


// router.get('/', userController.index)

//these routes include full crud for locations

//read
router.get('/', locationController.index)
//show 
router.get('/all-locations', locationController.show)
//create
router.post('/create-location', locationController.create)
//new
router.get('/new-location', locationController.new)
//edit
router.get('/:id/edit-location', locationController.edit)
//update button
router.patch('/:id', locationController.update)
//delete
router.delete('/:id', locationController.delete)
//show comments on location page
router.post('/:id/add-comment', commentController.create)
//add delete and read for comments 
router.get('/:id/add-comment', commentController.new)
//edit comment page
router.get('/:id/edit-comment', commentController.edit)
//delete comment
router.delete('/comment/:id', commentController.delete)

//add and delete for users
router.get('/users', userController.index)
router.get('/user-profile/:id', userController.show)
router.delete('/user-profile/:id/', userController.delete)
router.post('/create-user', userController.create)
router.get('/new-user', userController.new)




// router.get('/', linkController.index)
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