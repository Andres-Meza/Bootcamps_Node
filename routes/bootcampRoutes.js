const express = require('express')

const router = express.Router();

router.get("/bootcamps", (_req,res)=>{
    return res.status(200).json({ "message": "Get all bootcamps" })
})

router.get("/bootcamps/:id", (req,res)=>{
    return res.status(200).json({ "message": `Get one bootcamp ${req.params.id}` })
})

router.post("/bootcamps", (req, res)=>{
    body = req.body
    return res.status(201).send(body)
})

router.put("/bootcamps/:id", (req, res)=>{
    return res.status(200).json({ "message": `Update one bootcamp ${req.params.id}` })
})

router.delete("/bootcamps/:id", (req, res)=>{
    return res.status(202).json({ "message": `Delete one bootcamp ${req.params.id}` })
})

// Export router 
module.exports = router
