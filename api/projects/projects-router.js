// Write your "projects" router here!
const express = require("express")
const projectsModel = require("./projects-model")

const router = express.Router()

router.get("/api/projects", (req, res) => {
    projectsModel.get()
        .then((actions) => res.status(200).json(actions))
        .catch((err) => next(err))
})

router.get("/api/projects/:id", (req, res) => {
    projectsModel.get(req.params.id)
        .then((project) => res.status(200).json(project))
        .catch((err) => next(err))
})

router.post("/api/projects", (req, res) => {
    projectsModel.insert(req.body)
        .then((action) => res.status(201).json(action))
        .catch((err) => next(err))
})

router.put("/api/projects/:id", (req, res) => {
    
})

router.delete("/api/projects/:id", (req, res) => {
    
})

// function validateActionId() {
//     return (req, res, next) => {
//         actionsModel.find
//     }
// }

module.exports = router
