
const router = require('express').Router()
const Person = require('../models/person')

// GET all people
router.get('/', async (req, res) => {
    const people = await Person.find()
    res.json(people)
})

// Get person by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params 
    const people = await Person.findById(id)
    res.json(people)
})

// Delete person by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params 
    const people = await Person.findById(id)
    res.json(people)
})

// PUT update person by id
router.put('/:id', async (req, res) => {
    const { id } = req.params
    await Person.findByIdAndUpdate(id, req.body)
    res.json({ message: 'user updated' })
})

// Find person by name
router.get('/name/:name', async (req, res) => {
    const { name } = req.params
    const people = await Person.find({ name })
    res.json(people)
})


router.post('/', async (req, res) => {
    try {
        const person = await new Person(req.body).save()
        res.json(person)
    } catch (error) {
        console.log(error)
        res.json({message: 'error creating user'})
    }
})




module.exports = router