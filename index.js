const axios = require("axios");

const URL = process.env.TARGET_URL; // we'll set this in Render

async function ping() {
  try {
    const res = await axios.get(URL);
    console.log(`Pinged ${URL}:`, res.status);
  } catch (err) {
    console.error("Error pinging URL:", err.message);
  }
  process.exit(); // Exit after one ping
}

ping();
