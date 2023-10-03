const Marking = require("../models/Marking.model");

const addMark = (req, res) => {
  const {
    markingNumber,
    answer1,
    marking1,
    answer2,
    marking2,
    answer3,
    marking3,
    answer4,
    marking4,
    answer5,
    marking5,
    answer6,
    marking6,
    answer7,
    marking7,
    answer8,
    marking8,
    answer9,
    marking9,
    answer10,
    marking10,
    date,
    moduleN,
    Lecture,
    other,
  } = req.body;

  const marking = new Marking({
    markingNumber,
    answer1,
    marking1,
    answer2,
    marking2,
    answer3,
    marking3,
    answer4,
    marking4,
    answer5,
    marking5,
    answer6,
    marking6,
    answer7,
    marking7,
    answer8,
    marking8,
    answer9,
    marking9,
    answer10,
    marking10,
    date,
    moduleN,
    Lecture,
    other,
  });
  
  marking
    .save()
    .then((createdMark) => {
      res.json(createdMark);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getQMarkings = async (req, res) => {
  try {
    const markings = await Marking.find();
    res.json(markings);
  } catch (error) {
    res.status(400).json(error);
  }
};
const UpdateMarking = async (req, res) => {
  const MarkId = req.params.id;

  try {
    const marking = await Marking.findById(MarkId);

    if (!marking) {
      return res.status(404).json("There is no quiz to update");
    }

    const {markingNumber,answer1,marking1,answer2,marking2,answer3,marking3,answer4,marking4,answer5,marking5,answer6,marking6,answer7,marking7,answer8,marking8,answer9,marking9,answer10,marking10,date,moduleN,Lecture,other,} = req.body;

    const updatedMark = await Marking.findByIdAndUpdate(MarkId, {
        markingNumber,
        answer1,
        marking1,
        answer2,
        marking2,
        answer3,
        marking3,
        answer4,
        marking4,
        answer5,
        marking5,
        answer6,
        marking6,
        answer7,
        marking7,
        answer8,
        marking8,
        answer9,
        marking9,
        answer10,
        marking10,
        date,
        moduleN,
        Lecture,
        other,
    });

    res.status(200).json(updatedMark);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getMark = async (req, res) => {
  const MarkId = req.params.id;

  try {
    const markDetail = await Marking.findById(MarkId);
    res.json(markDetail);
  } catch (error) {
    res.status(400).json(error);
  }
};

const removeMarks= async (req, res) => {
  const MarkId = req.params.id;

  try {
    const markDetail = await Marking.findById(MarkId);

    if (!markDetail) {
      return res.status(404).json("There is no quiz to remove");
    }

    const removeMark= await Marking.findByIdAndDelete(MarkId);
    res.status(200).json(removeMark);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


module.exports = {
    addMark,
    getQMarkings,
    UpdateMarking,
    getMark,
    removeMarks,
  };