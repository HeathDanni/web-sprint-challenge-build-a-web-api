// Write your "projects" router here!
const express = require("express")
const projectsModel = require("./projects-model")

const router = express.Router()

router.get("/api/projects", (req, res, next) => {
    projectsModel.get()
        .then((actions) => res.status(200).json(actions))
        .catch((err) => next(err))
})

router.get("/api/projects/:id", (req, res, next) => {
    projectsModel.get(req.params.id)
        .then((project) => res.status(200).json(project))
        .catch((err) => next(err))
})

router.post("/api/projects", (req, res) => {
    projectsModel.insert(req.body)
        .then((project) => res.status(201).json(project))
        .catch((err) => next(err))
})

router.put("/api/projects/:id", (req, res, next) => {
    projectsModel.update(req.params.id, req.body)
        .then((project) => res.status(201).json(project))
        .catch((err) => next(err))
})

router.delete("/api/projects/:id", (req, res, next) => {
    projectsModel.remove(req.params.id)
        .then((project) => res.status(200).json(project))
        .catch((err) => next(err))
})

router.get("/api/projects/:projectId/actions", (req, res, next) => {
    projectsModel.getProjectActions(req.params.projectId)
        .then((actions) => res.status(200).json(actions))
        .catch((err) => next(err))
})

// function validateActionId() {
//     return (req, res, next) => {
//         actionsModel.find
//     }
// }

module.exports = router
