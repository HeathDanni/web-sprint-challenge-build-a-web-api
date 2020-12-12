// Write your "actions" router here!
const express = require("express")
const actionsModel = require("./actions-model")

const router = express.Router()

router.get("/api/actions", (req, res) => {
    actionsModel.get()
        .then((actions) => res.status(200).json(actions))
        .catch((err) => next(err))
})

router.get("/api/actions/:id", (req, res) => {
    actionsModel.get(req.params.id)
        .then((action) => res.status(200).json(action))
        .catch((err) => next(err))
})

router.post("/api/actions", (req, res) => {
    actionsModel.insert(req.body)
        .then((action) => res.status(201).json(action))
        .catch((err) => next(err))
})

router.put("/api/actions/:id", (req, res) => {
    
})

router.delete("/api/actions/:id", (req, res) => {
    
})

// function validateActionId() {
//     return (req, res, next) => {
//         actionsModel.find
//     }
// }

module.exports = router
