//console.log('Starting notes.js ....');

const fs = require('fs');

let fetchNotes = () => {
    let notes = [];
    //load the existing notes
    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));  
    } catch (error) {
        //console.error(error);
    } 
    return notes;   
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes)); 
};

let addNote = (title ,body) => {
    //console.log("Adding note ",title,body);
    let notes = fetchNotes();
    let note = {
        title : title,
        body : body
    }     

    // look for duplicate title in existing notes
    let duplicateNote = notes.filter(note => note.title === title);

    //add the note only when the title is different
    if(duplicateNote.length === 0){
        notes.push(note);
        saveNotes(notes); 
        return note;
    }  
       
};

let getNotes = () => {
    console.log('Getting all notes');
    return fetchNotes();
};

let getNote = (title) => {
    //console.log(title);
    let notes = fetchNotes();
    //console.log(notes);
    let filteredNotes = notes.filter(note => note.title === title);
    //console.log(filteredNotes);
   // if(filteredNotes.length === 1){
        return filteredNotes[0];
    //}    
};

let removeNote = (title) => {
    //console.log('Removing note ',title);
    let notes = fetchNotes();
    let remainingNotes = notes.filter(note => note.title !== title);
    saveNotes(remainingNotes);
    return remainingNotes.length !== notes.length; 
}

let logNote = (note) => {
    debugger;
    console.log('---------');
    console.log('Title : ',note.title);
    console.log('Body : ',note.body);
};


module.exports = {
    addNote,
    getNotes,
    getNote,
    removeNote,
    logNote
};