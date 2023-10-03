const Admin = require("../models/Admin.model");

const addAdmin = (req, res) => {
  const { fName, lName, adminId, nic, gender, email, phoneNumber, password } =
    req.body;

  const admin = new Admin({
    fName,
    lName,
    adminId,
    nic,
    gender,
    email,
    phoneNumber,
    password,
  });

  admin
    .save()
    .then((createdAdmin) => {
      res.json(createdAdmin);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAdmin = async (req, res) => {
  const userId = req.params.id;

  try {
    const admin = await Admin.findById(userId);
    res.json(admin);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateAdmin = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Admin.findById(userId);

    if (!user) {
      return res.status(404).json("There is no admin to update");
    }

    const { fName, lName, adminId, nic, gender, email, phoneNumber, password } =
      req.body;

    const updatedUser = await Admin.findByIdAndUpdate(userId, {
      fName,
      lName,
      adminId,
      nic,
      gender,
      email,
      phoneNumber,
      password,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeAdmin = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Admin.findById(userId);

    if (!user) {
      return res.status(404).json("There is no admin to remove");
    }

    const removedUser = await Admin.findByIdAndDelete(userId);
    res.status(200).json(removedUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const validateAdmin = async (req, res) => {
  const admId = req.body.adminId;
  const pass = req.body.password;

  try {
    const foundUser = await Admin.findOne({ adminId: admId });

    if (!foundUser) {
      return res.status(404).json("invalid user");
    } else if (foundUser.password === pass) {
      return res.status(200).json(true);
    } else {
      return res.status(404).json("incorrect password");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const ManageAdminProfile = async (req, res) => {
  const admId = req.body.adminId;
  const pass = req.body.password;

  try {
    const foundUser = await Admin.findOne({ adminId: admId });

    if (!foundUser) {
      return res.status(404).json("invalid user");
    } else if (foundUser.password === pass) {
      res.json(foundUser);
    } else {
      return res.status(404).json("incorrect password");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  removeAdmin,
  validateAdmin,
  ManageAdminProfile,
};
