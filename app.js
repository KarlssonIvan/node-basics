import validator from 'validator'
import { name } from "./utils.js";
import {getNotes} from './notes';
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
  handler: function(argv) {
    console.log(`Title: ${argv.title} \nBody:  ${argv.body}`);
  }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a new note',
    handler: function () {
        console.log('Reading a note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Displaying list of notes',
    handler: function () {
        console.log("Displaying list of notes");
    }
})

yargs.parse()
