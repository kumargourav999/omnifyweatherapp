const express = require('express');
const axios = require('axios');
const app = express();
const cors=require('cors');
const port = process.env.PORT || 5000;

// Replace 'YOUR_API_KEY' with an actual API key from a weather API provider
const apiKey = "bd4e3756eedc5152a391e31f3c0ee77f";

app.use(express.json());
app.use(cors());

app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    
    res.json(weatherData);
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
