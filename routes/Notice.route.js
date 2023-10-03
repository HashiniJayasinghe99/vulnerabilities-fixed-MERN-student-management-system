const express = require("express");
const router = express.Router();

const {
  addNotice,
  getNotices,
  getNotice,
  updateNotice,
  removeNotice,
} = require("../controllers/Notice.controller");

router.get("/", getNotices);

router.get("/:id", getNotice);

router.post("/", addNotice);

router.put("/:id", updateNotice);

router.delete("/:id", removeNotice);

module.exports = router;
