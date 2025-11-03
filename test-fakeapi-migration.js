const { fakeapisetupmigration } = require("fakeapisetupmigration");

exports.handler = async (event) => {
  try {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    };
    const shopifyResponse = await fakeapisetupmigration();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
        return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

