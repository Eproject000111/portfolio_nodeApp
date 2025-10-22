const express = require('express');
const router = express.Router();
const {sendMsg, getMessages}  = require('../Controllers/ContactController.js');

router.post('/sendMsg', sendMsg);

router.get('/getMsg', getMessages);

router.get("/test", (req, res) => {
  res.send("Welcome to the Multi-API Lambda Server 🚀");
});

export default router;