// Populate the breed dropdown menu
export function populateBreedDropdown(breeds) {
    const breedSelect = document.getElementById("breed-select");
    breeds.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1); // Capitalize breed names
        breedSelect.appendChild(option);
    });
}

// Display a dog image
export function displayDog(imageUrl) {
    const container = document.getElementById("dog-container");
    container.innerHTML = `
        <div class="dog-card">
            <img src="${imageUrl}" alt="Dog">
        </div>
    `;
}

// ui.js - Handles UI updates

/**
 * Display a dog image on the page
 * @param {string} imageUrl - URL of the dog image
 */
export function displayDog(imageUrl) {
    const container = document.getElementById("dog-container");
    container.innerHTML = `
        <div class="dog-card">
            <img src="${imageUrl}" alt="Dog">
        </div>
    `;
}

/**
 * Display an error message on the page
 * @param {string} message - Error message to display
 */
export function displayError(message) {
    const container = document.getElementById("dog-container");
    container.innerHTML = `
        <div class="error-message">
            <p>❌ ${message}</p>
        </div>
    `;
}
