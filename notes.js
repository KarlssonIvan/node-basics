import fs from 'fs'
import {Logger} from './logger'
export function getNotes() {
    return "Your notes..."
}

export function addNote (title, body) {
    const notes = loadNotes()
    const duplicates = notes.filter((book) => book.title === title)
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