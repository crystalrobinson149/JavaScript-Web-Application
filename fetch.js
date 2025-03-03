// fetch.js - Handles all API requests

/**
 * Fetch data from a given API URL
 * @param {string} url - API endpoint URL
 * @returns {Promise<any>} - Returns a promise with fetched data
 */
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch data from ${url}`);
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
