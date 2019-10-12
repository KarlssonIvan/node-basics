import fs from 'fs'
import {Logger} from './logger'

export function addNote (title, body) {
    const notes = loadNotes()
    const duplicates = notes.filter((book) => book.title === title)
    console.log('kuku')
    debugger
    if (!duplicates.length) {
        notes.push({ title, body })
        saveNotes(notes)
        Logger.success('New note was added')
    } else {
        Logger.warrning('Note title was taken')
    }
}

export function removeNote(title) {
    const notes = loadNotes()
    const noteIndex = notes.findIndex((book) => book.title === title)
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1)
        saveNotes(notes)
        Logger.success('Note was removed')
    } else {
        Logger.warrning('Note with given title doesn`t exists')
    }
}

export function listNotes() {
    const notes = loadNotes()
    notes.forEach(note => {
        Logger.success(note.title)
    })
}

export function readNote(title) {
    const notes = loadNotes()
    const note = notes.find((book) => book.title === title)
    if (!note) {
        Logger.warrning('Note title was taken')
    } else {
        Logger.success(`Title ${note.title} \nBody  ${note.body}`)
    }
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}