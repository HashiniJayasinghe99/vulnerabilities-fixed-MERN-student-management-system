const express = require("express");
const router = express.Router();

const {
  addStaffMember,
  getStaffMembers,
  getStaffMember,
  updateStaffMember,
  removeStaffMember,
  validateStaffMember,
} = require("../controllers/Staff.controller");

router.get("/", getStaffMembers);

router.get("/:id", getStaffMember);

router.post("/", addStaffMember);

router.put("/:id", updateStaffMember);

router.delete("/:id", removeStaffMember);

router.post("/validate", validateStaffMember);

module.exports = router;
