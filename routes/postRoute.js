const { Router } = require('express');
const { createPost, getAllPost, getPostById, updatePost, deletePost } = require('../controllers/postController');

const router = Router();

router.post('/', createPost);
router.get('/', getAllPost)
router.get('/:id',getPostById)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)

module.exports = router