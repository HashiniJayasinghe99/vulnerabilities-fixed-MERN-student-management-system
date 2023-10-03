const express = require("express");
const router = express.Router();

const {
    addMark,
    getQMarkings: getQMarkings,
    UpdateMarking,
    getMark,
    removeMarks,
} = require("../controllers/Marking.controller");

router.post("/", addMark);

router.get("/:id", getMark);

router.get("/", getQMarkings);

router.put("/:id", UpdateMarking);

router.delete("/:id", removeMarks);
module.exports = router