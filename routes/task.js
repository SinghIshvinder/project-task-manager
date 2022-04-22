const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/api/v1/tasks',taskController.getAllTasks );

router.post('/api/v1/tasks', taskController.createTask);

router.get('/api/v1/tasks/:id', taskController.getTask);

router.patch('/api/v1/tasks/:id', taskController.updateTask);

router.delete('/api/v1/tasks/:id', taskController.deleteTask);




module.exports = router;