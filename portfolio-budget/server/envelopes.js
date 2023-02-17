const express = require('express');
const envelopesRouter = express.Router();
const dbEnvelopes = require("./db");
const {createId, findById, deleteById} = require('./functions.js');
module.exports = envelopesRouter;

//Get all envelopes
envelopesRouter.get('/', async (req, res, next) => {
    const envelopes = await dbEnvelopes;

    if (!envelopes) {
        res.status(400).send('Envelope Not Found');
    } else {
        res.status(200).send(envelopes);
    };
});

//Get envelope by id
envelopesRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const envelopes = await dbEnvelopes;
    const envelope = findById(envelopes, id);

    if (!envelope){
        res.status(404).send('Envelope Not Found');
    } else {
        res.status(200).send(envelope);
    }; 
});

//Add new envelope
envelopesRouter.post('/', async (req, res, next) => {
    const { title, budget } = req.query;
    const envelopes = await dbEnvelopes;
    const newId = createId(envelopes);
    const newEnvelope = {
      id: newId,
      title,
      budget,
    };

    if (!newEnvelope) {
        res.status(500).send('Envelope Not Added');
    } else {
        envelopes.push(newEnvelope);
        res.status(201).send(newEnvelope);
    };
});

//Update envelope by id
envelopesRouter.put('/:id', async (req, res, next) => {
    const { title, budget } = req.query;
    const { id } = req.params;
    const envelopes = await dbEnvelopes;
    const envelope = findById(envelopes, id);

    if (!envelope){
        res.status(404).send('Envelope Not Found');
    } else {
        envelope.title = title;
        envelope.budget = Number(budget);
        res.status(201).send(envelope);
    }; 
});

//Delete evelope by id
envelopesRouter.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    const envelopes = await dbEnvelopes;
    const envelope = findById(envelopes, id);

    if (!envelope){
        res.status(404).send('Envelope Not Found');
    } else {
        const updatedEnvelopes = deleteById(envelopes, id);
        res.status(204).send(updatedEnvelopes);
    }; 
});

//Transfer from id to id
envelopesRouter.post('/:fromId/transfer/:toId', async (req, res, next) => {
    const envelopes = await dbEnvelopes;
    const { fromId, toId } = req.params;
    const { amount } = req.query;
    amountAsNumber = Number(amount);

    const originEnv = findById(envelopes, fromId);
    const destinationEnv = findById(envelopes, toId);

    if (originEnv.budget < amountAsNumber) {
        res.status(400).send("Amount to transfer exceeds envelope budget funds");
    } else if (!originEnv || !destinationEnv) {
        res.status(404).send('Envelope Not Found');
    } else {
        originEnv.budget -= amountAsNumber;
        destinationEnv.budget += amountAsNumber;
        res.status(201).send(originEnv);
    };
});