import { Pet } from './pet';

//  Saves our pets in memory
const store: Pet[] = [
    new Pet(123, 'Garfield', 2, 'cat'),
];

// Get a pet by ID
export function getById(id: number): Pet | null {
    const pet = store
        .find((pet) => pet.getId() === id);

    return pet
}

// Stores the given pet
export function addPet(pet: Pet) {
    store.push(pet);
}

// Get all pets
export function getAllPet(): Pet[] {
    return store;
}