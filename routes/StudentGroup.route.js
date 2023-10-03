const express = require("express");
const router = express.Router();
const {
    addStudentGroup,
    getStudentGroups,
    getStudentGroup,
    updateStudentGroup,
    removeStudentGroup,
} = require("../controllers/StudentGroup.controller");

router.get("/", getStudentGroups);

router.get("/:id", getStudentGroup);

router.post("/", addStudentGroup);

router.put("/:id", updateStudentGroup);

router.delete("/:id", removeStudentGroup);

module.exports = router;
