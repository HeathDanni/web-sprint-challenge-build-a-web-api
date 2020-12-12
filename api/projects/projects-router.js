// Write your "projects" router here!
const express = require("express")
const projects = require("./projects-model")

const router = express.Router()

router.get("/api/projects", (req, res) => {
    projects.get()
        .then((project) => res.status(200).json(project))
        .catch((err) => res.status(500).json("there was an error"))
})

router.get("/api/projects/:id", validateProject(), (req, res) => {
    res.status(200).json(req.project)
})

router.post("/api/projects", (req, res) => {
    projects.insert(req.body)
        .then((project) => res.status(201).json(project))
        .catch((err) => res.status(500).json("there was an error"))
})

router.put("/api/projects/:id", validateProject(), (req, res) => {
    projects.update(req.project.id, req.body)
        .then((project) => res.status(201).json(project))
        .catch((err) => res.status(500).json("there was an error"))
})

router.delete("/api/projects/:id", validateProject(), (req, res) => {
    projects.remove(req.project.id)
        .then((project) => res.status(200).json({
            message: `project ${req.project.id} was successfully deleted`
        }))
        .catch((err) => res.status(500).json("there was an error"))
})

router.get("/api/projects/:id/actions", validateProject(), (req, res) => {
    projects.getProjectActions(req.project.id)
        .then((project) => res.status(200).json(project))
        .catch((err) => res.status(500).json("there was an error"))
})

function validateProject() {
    return (req, res, next) => {
        projects.get(req.params.id)
            .then((project) => {
                if (project) {
                    req.project = project
                    next()
                } else {
                    res.status(404).json({
                        message: "Project does not exist"
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
