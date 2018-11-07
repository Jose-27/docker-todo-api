const db = require("../../config/db");// DB settings
const Schema = db.Schema;

/*
* Create task schema by getting an instance of db
*/
let taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    due_date: {
        type: String,
        required: true,
    },
    task_completed: {
        type: Boolean,
        default: false
    },
    task_notCompleted: {
        type: Boolean,
        default: false
    },


});

const Task = db.model('Task', taskSchema);// assign schema to the model

module.exports = Task;// make the schema available throughout the app