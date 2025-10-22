const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
require('./Config/db.config.js').connectDB();
const contactRoute = require('./Routes/Contact.js');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use('/app', contactRoute);

app.get("/test", (req, res) => {
  res.send("Welcome to the Multi-API Lambda Server 🚀");
});

// 👇 Only run locally when not in AWS
if (process.env.LOCAL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`✅ Local server running on http://localhost:${PORT}`));
}

