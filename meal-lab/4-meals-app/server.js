const express = require('express');
const request = require('request'); 
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 8213;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.post('/geminiproxy', (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).send("API key not configured in environment variables");
  }

  const targetUrl = `https://googleapis.com{apiKey}`;

 
  req.pipe(request.post({
    url: targetUrl,
    headers: { 'Content-Type': 'application/json' }
  })).pipe(res);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));