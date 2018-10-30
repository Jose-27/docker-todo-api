const db = require("../../config/db");// DB settings
const Schema = db.Schema;

/*
* Create task schema by getting an instance of db
*/
let taskSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    due_date: {
        type: String,
        require: true,
    },
    task_completed: {
        type: Boolean
    },
    task_notCompleted: {
        type: Boolean
    },


});

const Task = db.model('Task', taskSchema);// assign schema to the model

module.exports = Task;// make the schema available throughout the app