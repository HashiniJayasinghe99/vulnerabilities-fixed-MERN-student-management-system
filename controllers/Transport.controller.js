const TarnsportService = require("../models/Transport.model");

//add hostal
const addTransportService = (req, res) => {
    const {
        transportID,
        vehicleType,
        ownerName,
        capacity,
        coverage,
        time,
        contactNo,
    } = req.body;
  
    const transportService = new TarnsportService({
        transportID,
        vehicleType,
        ownerName,
        capacity,
        coverage,
        time,
        contactNo,
    });
  
    transportService
      .save()
      .then((addTransportService) => {
        res.json(addTransportService);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };


  //Get the all tarnsport details
  const getTransportServices = async (req, res) => {
    try {
      const tarnsportService  = await TarnsportService .find();
      res.json(tarnsportService);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  //get a tarnsport service
  const getTransport = async (req, res) => {
    const tarnsportId = req.params.id;
  
    try {
      const transportService = await  TarnsportService.findById(tarnsportId);
      res.json(transportService);
    } catch (error) {
      res.status(400).json(error);
    }
  };



//update transport details
  const updateTransport = async (req, res) => {
    const transportlId = req.params.id;
  
    try {
      const tarnsportID = await TarnsportService.findById(transportlId);
  
      if (!tarnsportID) {
        return res.status(404).json("There is no student to update");
      }
  
      const {
        transportID,
        vehicleType,
        ownerName,
        capacity,
        coverage,
        time,
        contactNo,
      } = req.body;
  
      const updateTransport = await TarnsportService.findByIdAndUpdate(transportlId, {
        transportID,
        vehicleType,
        ownerName,
        capacity,
        coverage,
        time,
        contactNo,
      });
  
      res.status(200).json(updateTransport);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

// remove transport details
  const removeTransport = async (req, res) => {
    const  transportId= req.params.id;
  
    try {
      const Transportservice = await  TarnsportService.findById( transportId);
  
      if (!Transportservice) {
        return res.status(404).json("There is no user to remove");
      }
  
      const removeTransport = await TarnsportService.findByIdAndDelete(transportId);
      res.status(200).json( removeTransport);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
  



  module.exports = {
    addTransportService,
    getTransportServices,
    getTransport,
    updateTransport,
    removeTransport,
    
  };
  