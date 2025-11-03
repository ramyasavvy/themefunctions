var axios = require("axios");


exports.fakeapisetupmigration = async () => {
    const start = Date.now();
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const end = Date.now();
        return {
            data: response.data,
            responseTimeMs: end - start
        };
    } catch (error) {
        const end = Date.now();
        return {
            error: error.message,
            responseTimeMs: end - start
        };
    }
};
