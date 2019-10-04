import validator from 'validator'
import { name } from "./utils.js";
import  * as notes from './notes';
import {Logger} from './logger';
import yargs from 'yargs'
yargs.version("Karlsson")

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv) {
      notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a new note',
    handler() {
        console.log('Reading a note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Displaying list of notes',
    handler() {
        console.log("Displaying list of notes");
    }
})

yargs.parse()
