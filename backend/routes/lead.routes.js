const express = require("express");
const lead = require("../controller/lead.controller");

const router = express.Router();

router.get("/lead", lead.get);

router.post("/lead", lead.create);

router.put("/lead/:id", lead.edit);

router.delete("/lead/:id", lead.del);

module.exports = router;
