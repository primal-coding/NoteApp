const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if (!duplicateNotes.Length){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note added.')
    } else {
        console.log('Note title taken.')
    }
}
const removeNote = function (title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){      // FILTER: iterate trough notes, and keep any when return is true
        return note.title !== title
    })
    if (notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('Note not found!'))
    } else {
        console.log(chalk.bgGreen('Note', title, 'removed'))
        saveNotes(notesToKeep)

    }





    // My _Working_ Solution:
    // const duplicateNotes = notes.filter(function(note){
    //     if (note.title === title){
    //         notes.pop({
    //             title: title,
    //         })
    //         saveNotes(notes)
    //         console.log('Note', title,'deleted.')
    //     }
    //     return note.title === title
    // })

}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }
    
 }

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}