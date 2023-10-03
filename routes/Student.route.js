const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  removeStudent,
  validateStudent,
} = require("../controllers/Student.controller");

router.get("/", getStudents);

router.get("/:id", getStudent);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", removeStudent);

router.post("/validate", validateStudent);

module.exports = router;
