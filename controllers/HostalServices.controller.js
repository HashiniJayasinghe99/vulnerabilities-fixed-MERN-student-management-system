const HostalServices = require("../models/HostalServices.model");

//add hostal
const addHostalService = (req, res) => {
    const {
        hostalID,
        hostalName,
        address,
        bedRooms,
        bathrooms,
        persons,
        charge,
        contactNo,
     
    } = req.body;
  
    const hostalService = new HostalServices({
        hostalID,
        hostalName,
        address,
        bedRooms,
        bathrooms,
        persons,
        charge,
        contactNo,
    });
  
    hostalService
      .save()
      .then((addHostalService) => {
        res.json(addHostalService);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };


  //Get the all hostal details
  const getHostalServices = async (req, res) => {
    try {
      const hostalServices  = await HostalServices .find();
      res.json(hostalServices);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  //get a hostal details
  const getHostal = async (req, res) => {
    const hostalId = req.params.id;
  
    try {
      const hostalService = await  HostalServices.findById(hostalId);
      res.json(hostalService);
    } catch (error) {
      res.status(400).json(error);
    }
  };



//update hostal details
  const updateHostal = async (req, res) => {
    const hostalId = req.params.id;
  
    try {
      const HostalId = await HostalServices.findById(hostalId);
  
      if (!HostalId) {
        return res.status(404).json("There is no student to update");
      }
  
      const {
        hostalID,
        hostalName,
        address,
        bedRooms,
        bathrooms,
        persons,
        charge,
        contactNo,
      } = req.body;
  
      const updateHostal = await HostalServices.findByIdAndUpdate(hostalId, {
        hostalID,
        hostalName,
        address,
        bedRooms,
        bathrooms,
        persons,
        charge,
        contactNo,
      });
  
      res.status(200).json(updateHostal);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

// remove hosatal details
  const removeHostal = async (req, res) => {
    const  hostalId= req.params.id;
  
    try {
      const Hostalservice = await  HostalServices.findById( hostalId);
  
      if (!Hostalservice) {
        return res.status(404).json("There is no user to remove");
      }
  
      const removeHostal = await HostalServices.findByIdAndDelete(hostalId);
      res.status(200).json( removeHostal);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
  



  module.exports = {
    addHostalService,
    getHostalServices,
    getHostal,
    updateHostal,
    removeHostal,
    
  };
  