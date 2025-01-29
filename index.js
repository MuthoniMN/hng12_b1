const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  const date = new Date();
  return res.status(200).json({
    'email': "ndianguimichelle@gmail.com",
    'current_datetime': date.toISOString(),
    'github_url': 'https://github.com/MuthoniMN/hng12_b1'
  });
})

app.listen(5000, function() {
  console.log("Server running on port 5000")
});
