const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/repos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/users/mohit5543/repos",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/vnd.github.v3+json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
});