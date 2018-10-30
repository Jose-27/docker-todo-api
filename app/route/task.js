
/*
* import route settings
*/
const express        = require('express');
const router         = express.Router();

/*
* import controller to later access its propety
*/

const TaskController = require('../controller/task');

/**
* compute acording to the route params 
* @param {task} '' | '/task/' | '/task/:id'
*/

router.route('/')
    .get(TaskController.getAllTasks)
    .post(TaskController.newTask);

router.route('/:id')
    .delete(TaskController.deleteTask);
    

module.exports = router;