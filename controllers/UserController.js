const sequelize = require('../config/seq')
const {DataTypes} = require('sequelize')
const UserModel = require('../models/user')


const User =  UserModel(sequelize, DataTypes);

exports.getAllUsers = async (_req,res)=>{
    const users = await User.findAll()
    return res.status(200).json({
         "success": true,
         "data": users
        })
}
exports.getSingleUser = async (req,res)=>{
    const userFounded = await User.findByPk(req.params.id)
    return res.status(200).json({
        "success": true,
        "data": userFounded
    })
}
exports.createNewUser = async (req, res)=>{
    body = req.body
    const newUser = await User.create(req.body)

    return res.status(201).json({
    })
}
exports.updateUser = async(req, res)=>{
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    const updatedUser = await User.findByPk(req.params.id)
    return res.status(200).json({
        "success": true,
        "data": updatedUser
    })
}
exports.deleteUser = async(req, res)=>{
    const deletedUser = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    return res.status(202).json({
         "success": true,
         "data": deletedUser
    })
}