const Student = require("../models/Student.model");

const addStudent = (req, res) => {
  const {
    fName,
    lName,
    studentId,
    nic,
    faculty,
    gender,
    email,
    phoneNumber,
    password,
  } = req.body;

  const student = new Student({
    fName,
    lName,
    studentId,
    nic,
    faculty,
    gender,
    email,
    phoneNumber,
    password,
  });

  student
    .save()
    .then((createdStudent) => {
      res.json(createdStudent);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getStudent = async (req, res) => {
  const userId = req.params.id;

  try {
    const student = await Student.findById(userId);
    res.json(student);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateStudent = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Student.findById(userId);

    if (!user) {
      return res.status(404).json("There is no student to update");
    }

    const {
      fName,
      lName,
      studentId,
      nic,
      faculty,
      gender,
      email,
      phoneNumber,
      password,
    } = req.body;

    const updatedUser = await Student.findByIdAndUpdate(userId, {
      fName,
      lName,
      studentId,
      nic,
      faculty,
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

const removeStudent = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await Student.findById(userId);

    if (!user) {
      return res.status(404).json("There is no user to remove");
    }

    const removedUser = await Student.findByIdAndDelete(userId);
    res.status(200).json(removedUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const validateStudent = async (req, res) => {
  const stdId = req.body.studentId;
  const pass = req.body.password;

  try {
    const foundUser = await Student.findOne({ studentId: stdId });

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

module.exports = {
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  removeStudent,
  validateStudent,
};
