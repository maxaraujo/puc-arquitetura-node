const chalk = require('chalk');
const yargs = require('yargs');
const task = require('./task');

//alterando a versão do CLI
yargs.version('1.0.1');

yargs.command({
    command: 'add',
    describe: 'Add a new task into the ToDo list',
    builder:{
        name: {
            describe: 'Task name',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Description of the new task',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        var info = chalk.green.inverse(`Creating a new task`);
        console.log(info);
        task.addTask(argv.name, argv.description);

    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a task from the ToDo list',
    handler: function(argv){
        task.removeTask(argv.name);
    }
})

yargs.command({
    command: 'list',
    describe: 'List a all tasks',
    handler: function(){
        const tasks = task.loadAllTasks();
        console.log(tasks);
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a task',
    handler: function(argv){
        task.readTask(argv.name);
    }
})

yargs.parse();