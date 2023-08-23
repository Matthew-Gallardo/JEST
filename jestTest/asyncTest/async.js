const axios = require("axios");


const fetchData = async (id) => {
    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return result.data; // Return the data from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error for handling higher up the call stack
    }
};

module.exports = fetchData;


