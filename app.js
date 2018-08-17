//console.log('Starting app ...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');
const titleOptions = {
    describe : 'Title of note',
    demand : true,
    alias : 't'
};
const bodyOptions = {
    describe : 'Body of note',
    demand : true,
    alias : 'b'
};
let argv= yargs
    .command('add','Add new note',{
      title  : titleOptions,
      body  : bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read note',{
      title  : titleOptions   
    })
    .command('remove','Remove note',{
      title  : titleOptions
    })
    .help()
    .argv;
let command = argv._[0];
//console.log('command : ',command);
//console.log('process argv : ',process.argv);
//console.log('yargs argv :',argv);
//console.log('yargs argv body:',argv.body);

if(command==='add'){
    let note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note)
    }else{
        console.log('Note title taken');
    }
}else if(command==='list'){
    let allnotes = notes.getNotes();
    console.log('printing '+allnotes.length + ' note(s)');
    allnotes.forEach(note => notes.logNote(note));
}else if(command==='read'){
    let note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
    }else{
        console.log('Note with title not found');
    } 
}else if(command==='remove'){
    let isRemoved = notes.removeNote(argv.title);
    let message = isRemoved ? 'Not removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not found');
}