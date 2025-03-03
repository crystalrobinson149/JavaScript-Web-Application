import { fetchData } from "./fetch.js";

// Fetch a random dog image
export async function fetchRandomDog() {
    const data = await fetchData("https://dog.ceo/api/breeds/image/random");
    return data.message; // Image URL
}

// Fetch all available dog breeds
export async function fetchBreeds() {
    const data = await fetchData("https://dog.ceo/api/breeds/list/all");
    return Object.keys(data.message); // Array of breed names
}

// Fetch a dog image by breed
export async function fetchDogByBreed(breed) {
    const data = await fetchData(`https://dog.ceo/api/breed/${breed}/images/random`);
    return data.message; // Image URL
}
