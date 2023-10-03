import express from 'express';
const router = express.Router();

import {
  addAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  removeAdmin,
  validateAdmin,
  ManageAdminProfile,
} from "../controllers/Admin.controller.js";

router.get("/", getAdmins);

router.get("/:id", getAdmin);

router.post("/", addAdmin);

router.put("/:id", updateAdmin);

router.delete("/:id", removeAdmin);

router.post("/validate", validateAdmin);

router.post("/manageProfile", ManageAdminProfile);

export { router };
