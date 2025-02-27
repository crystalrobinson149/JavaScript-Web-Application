import { fetchRandomUser } from './api.js';
import { displayUser } from './ui.js';

document.getElementById('fetch-btn').addEventListener('click', async () => {
    try {
        console.log("Button clicked! Starting API request..."); // Event loop log
        const user = await fetchRandomUser(); // Async operation
        displayUser(user);
    } catch (error) {
        document.getElementById('user-container').innerHTML = "<p>Failed to load user. Try again!</p>";
    }
});
