const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs:
yargs.version('1.0.0.2')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,      // means that this option is required
            type: 'string'           // type needed
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a Note!')
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Print a note',
    handler: function(){
        console.log('Printing a Note!')
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function(){
        console.log('Listing out all Notes!')
    }
})

// parses the command line parameters and executes the appropriate command:
yargs.parse()       // much REQUIRED for handling all commands

// console.log(yargs.argv)      // parses the command line paramters as well as printing argv value

















// ===============

//console.log(process.argv)
// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding Note!')
// } else if (command === 'remove') {
//     console.log('Removing Note!')
// }

// ===============

// console.log(chalk.red(chalk.bold('Massive Success!... '), chalk.bgBlue.inverse('again') + '!'))
// const text = notes()
// console.log(text)

// console.log(process.argv[2])

// ===============

// const add =require('./utils.js')
// const sum = add(4,-2)
// console.log(sum)


// const util = require('./util.js')
// // const name = "MyName"
// // const sum = util (4, -2)
// console.log(util)




//const fs = require('fs')

//fs.writeFileSync('notes.txt','Hey Sure!')
//fs.appendFileSync('notes.txt', '\nLet\'s add: some more something')