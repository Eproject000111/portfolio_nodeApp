const express = require('express');
require('dotenv').config(process.env.NODE_ENV === 'DEVELOPMENT' ? { path: './Environment/Dev.env' } : {path: './Environment/Prod.env'});
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

const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV !== 'PRODUCTION'){
  app.listen(PORT, () => console.log(`✅ Local server running on http://localhost:${PORT}`));
}
else{
  app.listen(PORT, () => console.log(`✅ Production server running on port ${PORT}`));
}

