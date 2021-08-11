const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
	return res.render("exercise/exercise");
});

module.exports = router;
