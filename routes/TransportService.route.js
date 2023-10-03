const express = require("express");
const router = express.Router();

const {
    getTransportServices,
    getTransport,
    addTransportService,
    updateTransport,
    removeTransport,





} = require("../controllers/Transport.controller");

router.get("/", getTransportServices);

router.get("/:id",getTransport);

router.post("/", addTransportService);

router.put("/:id",updateTransport);

router.delete("/:id",removeTransport);



module.exports = router;