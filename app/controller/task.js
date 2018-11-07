// get task model
const Task = require('../model/task');

module.exports = {

    /*
    * /GET get all task
    */

    getAllTasks: async (req, res, next) => {
        try{
            const tasks = await Task.find({});
            res.status(200).json(tasks);
        } catch(err){
            res.status(500).send(err);
        }
    },

    /*
    * /POST create a new task
    */

    newTask: async (req, res, next) => {
        try{
            let newTask = new Task({
                title: req.body.title,
                description: req.body.description,
                due_date: req.body.date,
                task_completed: req.body.isCompleted,
                task_notCompleted: req.body.isNotCompleted
            });
            const task = await newTask.save();
            
            res.status(201).json(task);
        } catch(err){
            res.status(500).send(err);
        }
    },

    /*
    * /DELETE delete a task with a specific ID
    */

    deleteTask: async (req, res, next) => {
        try {
            const task = await Task.deleteOne({_id : req.params.id});
            res.status(201).json({ message: "Task successfully deleted!", task });
        } catch (error) {
            res.status(500).send(err);
        }
    }
};
