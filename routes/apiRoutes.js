const router = require('express').Router()
const fs = require('fs')
const {uuid} = require('uuidv4')

router.get('/notes', (req,res) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
  res.json(notes)
})

router.post('/notes', (req,res) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
  let newNote = req.body
  newNote.id = uuid()
  let updateNotes = [...notes, newNote]
  fs.writeFileSync('./db/db.json', JSON.stringify(updateNotes))
  res.json(updateNotes)
})
 router.delete('/notes/:id', (req,res) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
  let 
 })



module.exports = router