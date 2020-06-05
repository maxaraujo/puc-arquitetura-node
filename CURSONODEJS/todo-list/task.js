const fs = require('fs');
const chalk = require('chalk');

const addTask = function(name, description){
    const tasks = loadAllTasks();

    const duplicatedTask = tasks.find(function(task){
        return task.name === name;
    })

    if(!duplicatedTask){
        const newTask = {
            name,
            description
        }
        tasks.push(newTask);
        saveTask(tasks);
        const successMessage = chalk.green.bold('Task created!');
        console.log(successMessage);    
    }else{
        const erroMessage = chalk.red.bold(`Task with name [${name}] already taken!`);
        console.log(erroMessage);
    }
}

const saveTask = function(task){
    const taskJSON = JSON.stringify(task);
    fs.writeFileSync('task.json',taskJSON);
}

const removeTask = function(name){
    const tasks = loadAllTasks();
    const taskRemoved = tasks.filter(task => task.name != name);
    if(tasks.length !== taskRemoved.length){
        saveTask(taskRemoved);
        const successMessage = chalk.green.bold('Task removed!');
        console.log(successMessage);
    }else{
        const errorMessage = chalk.red.bold('Task not found!');
        console.log(errorMessage);
    }
}

const loadAllTasks = function(){
    try{
        const tasksBuffer = fs.readFileSync('task.json');
        return JSON.parse(tasksBuffer.toString());
    }catch(error){
        return [];
    }
}

const readTask = function(name){
    const tasks = loadAllTasks();
    const task = tasks.find(task => task.name.toUpperCase() == name.toUpperCase());
    if(task){
        console.log(task);
    }else{
        const errorMessage = chalk.red.bold('Task not found!');
        console.log(errorMessage);
    }
}

module.exports = {
    addTask,
    removeTask,
    loadAllTasks,
    readTask
};