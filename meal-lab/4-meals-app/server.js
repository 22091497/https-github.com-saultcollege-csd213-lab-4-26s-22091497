const express = require('express');
const request = require('request'); 
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 8213;

app.use(express.json());
// Serve static client files automatically
app.use(express.static(path.join(__dirname, 'public')));

// 5.2.1 & 5.2.2: Gemini proxy streaming endpoint
app.post('/geminiproxy', (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).send("API key not configured in environment variables");
  }

  const targetUrl = `https://googleapis.com{apiKey}`;

  // Forward incoming body stream directly to Gemini using pipe module method
  req.pipe(request.post({
    url: targetUrl,
    headers: { 'Content-Type': 'application/json' }
  })).pipe(res);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));