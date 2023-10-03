const express = require("express");
const router = express.Router();

const {
    getHostalServices,
    getHostal,
    addHostalService,
    updateHostal,
    removeHostal,


} = require("../controllers/HostalServices.controller");

router.get("/", getHostalServices);

router.get("/:id", getHostal);

router.post("/", addHostalService);

router.put("/:id",updateHostal);

router.delete("/:id", removeHostal);



module.exports = router;
