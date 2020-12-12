const express = require('express');
const actionsRouter = require("./actions/actions-router")
const projectsRouter = require("./projects/projects-router")

const server = express();

server.use(express.json())
server.use(actionsRouter)
server.use(projectsRouter)

// server.use((err, req, res, next) => {
//     console.log(err)
//     res.status(500).json({
//         message: "Something went wrong"
//     })
// })

module.exports = server;
