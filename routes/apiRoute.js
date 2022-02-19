const app = require('express').Router();
const path = require('path');
const fs = require('fs');
let newNote = []

fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8' , (err, data) => {
  newNote = JSON.parse(data)
 })


app.get('/notes', (req, res) => {
    res.json(newNote)
});
  
app.delete('/notes/:id', (req, res) => {
  console.log("Deleted!", req.params.id)
    noteArray=[];
    for (let i = 0; i < newNote.length; i++) {
      if(req.params.note_id != newNote[i].id) {
          noteArray.push(newNote[i])
      }
    }
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(noteArray));
    newNote = noteArray
    res.json(newNote);
});

app.post('/notes', (req, res) => {
    console.log("Note saved!", req.body)
    req.body.id = Math.floor((1+ Math.random())* 0x100000)
    newNote.push(req.body);
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(newNote));
    res.json(newNote);
    
});

module.exports = app;