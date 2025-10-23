const express = require('express');
const bodyParser = require('body-parser');
require('./Config/db.config.js').connectDB();
const contactRoute = require('./Routes/Contact.js');
const constant = require('./Config/constant.js');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use('/app', contactRoute);

app.get("/test", (req, res) => {
  res.send("Welcome to the Multi-API Lambda Server 🚀");
});

const PORT = constant['PORT'] || 3000;

app.listen(PORT, () => console.log(`✅ server running on http://localhost:${PORT}`));

