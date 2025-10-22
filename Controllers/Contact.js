const ContactModule  = require('../Models/Contact.js');

exports.sendMsg = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields required." });
    }
    try {
        const contact = await ContactModule.create({ name, email, message });
        res.json({ success: true, data: contact });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
}

exports.getMessages = async (req, res) => {
    try {
        const contact = await ContactModule.find();
        res.json({ success: true, data: contact });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
}