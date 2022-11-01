const express = require('express');
const { getAllUsers, createNewUser, getSingleUser, updateUser, deleteUser } = require('../controllers/UserController');
const router = express.Router();

router.route('/')
            .get(getAllUsers)
            .post(createNewUser)

router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)

module.exports = router
