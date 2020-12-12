const express = require('express');
const actionsRouter = require("./actions/actions-router")
const projectsRouter = require("./projects/projects-router")

const server = express();

server.use(express.json())
server.use(actionsRouter)
server.use(projectsRouter)

module.exports = server;
