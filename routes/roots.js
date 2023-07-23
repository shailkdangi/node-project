const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/index.html", (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, "..", "site", "index.html"));
});
router.get("/test", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "site", "404.html"));
});

module.exports = router;