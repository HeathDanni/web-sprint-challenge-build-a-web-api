// Write your "actions" router here!
const express = require("express")
const actions = require("./actions-model")

const router = express.Router()

router.get("/api/actions", (req, res) => {
    actions.get()
        .then((action) => res.status(200).json(action))
        .catch((err) => res.status(505).json({
            message: "there was an error"
        }))
})

router.get("/api/actions/:id", validateActionsId(), (req, res) => {
    res.status(200).json(req.action)
})

router.post("/api/actions", (req, res) => {
    actions.insert(req.body)
        .then((project) => 
        res.status(201).json(project))
        .catch((err) => res.status(500).json({
            message: "There was an error creating the action."
        }))
})

router.put("/api/actions/:id", validateActionsId(), (req, res) => {
    actions.update(req.action, req.body)
        .then((action) => res.status(201).json(action))
        .catch((err) => next(err))
})

router.delete("/api/actions/:id", (req, res) => {
    actions.remove(req.params.id)
        .then((action) => res.status(200).json(action))
        .catch((err) => next(err))
})

function validateActionsId() {
    return (req, res, next) => {
        actions.get(req.params.id)
            .then((action) => {
                if (action) {
                    req.action = action
                    next()
                } else {
                    res.status(404).json({
                        message: "Action does not exist"
                    })
                    .catch((err) => {
                        console.log(err)
                        res.status(500).json({
                            message: "There was an error retrieving project"
                        })
                    })
                }
            })
        }
}

module.exports = router
