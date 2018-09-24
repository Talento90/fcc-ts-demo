import * as express from 'express';
import * as bodyParser from 'body-parser';
import { getById, addPet, getAllPet } from './store';
import { Pet } from './pet';

const app = express();

// Register middleware to parse json from the http body
app.use(bodyParser.json());

// Returns a list of pets
app.get('/pets', (_request, response) => {
    const pets = getAllPet();

    response.send(pets);
})

// Return pet by id (GET /pets/:id)
app.get('/pets/:id', (request, response) => {
    const id = Number(request.params.id);
    const pet = getById(id);

    response.send(pet);
})

// Create pet (POST /pets)
app.post('/pets', (request, response) => {
    const body = request.body;
    const id = Number(request.body.id);

    const pet = new Pet(
        Number(id),
        body.name,
        body.age,
        body.type
    );

    addPet(pet)

    response.sendStatus(201);
});

// Run our server on port 3000
app.listen(3000, () => {
    console.log('I am running on port: 3000');
});