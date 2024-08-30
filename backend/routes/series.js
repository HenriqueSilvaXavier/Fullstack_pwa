const express = require('express');
const router = express.Router();
const Serie = require('../models/Serie');

// Criar uma nova reclamação
router.post('/', async (req, res) => {
    console.log('aqui')
    console.log(req.body)
    const { title, description, releaseDate, author, genre } = req.body;
    const newSerie= new Serie({ title, description, releaseDate, author, genre });
    await newSerie.save();
    res.json(newSerie);
});

// Listar todas as reclamações
router.get('/', async (req, res) => {
    const series = await Serie.find();
    res.json(series);
});

// Atualizar uma reclamação
router.put('/:id', async (req, res) => {
    const { title, description, releaseDate, author, genre } = req.body;
    const updatedSerie = await Serie.findByIdAndUpdate(req.params.id, { title, description, releaseDate, author, genre }, { new: true });
    res.json(updatedSerie);
});

// Deletar uma reclamação
router.delete('/:id', async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id);
    res.json({ message: 'Successfully deleted series' });
});

module.exports = router;
