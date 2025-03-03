import { fetchRandomDog, fetchBreeds, fetchDogByBreed } from "./api.js";
import { populateBreedDropdown, displayDog, displayError } from "./ui.js";

// Load breeds into the dropdown on page load
(async () => {
    try {
        const breeds = await fetchBreeds();
        populateBreedDropdown(breeds);
    } catch (error) {
        displayError("Failed to load breeds. Please try again later.");
    }
})();

// Handle fetching a random dog
document.getElementById("fetch-dog-btn").addEventListener("click", async () => {
    try {
        const dogImage = await fetchRandomDog();
        displayDog(dogImage);
    } catch (error) {
        displayError("Failed to load dog image. Try again!");
    }
});

// Handle searching for a specific breed
document.getElementById("search-breed-btn").addEventListener("click", async () => {
    const breed = document.getElementById("breed-select").value;
    if (!breed) {
        alert("Please select a breed.");
        return;
    }
    try {
        const breedImage = await fetchDogByBreed(breed);
        displayDog(breedImage);
    } catch (error) {
        displayError("Failed to load breed image. Please check your selection and try again.");
    }
});
