const Quiz = require("../models/Quiz.model");

const addQuiz = (req, res) => {
  const {
    quizNumber,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10,
    date,
    moduleN,
    Lecture,
    other,
  } = req.body;

  const quiz = new Quiz({
    quizNumber,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10,
    date,
    moduleN,
    Lecture,
    other,
  });
  
  quiz
    .save()
    .then((createdQuiz) => {
      res.json(createdQuiz);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getQuizzes = async (req, res) => {
  try {
    const quiz = await Quiz.find();
    res.json(quiz);
  } catch (error) {
    res.status(400).json(error);
  }
};
const UpdateQuiz = async (req, res) => {
  const QuizId = req.params.id;

  try {
    const quiz = await Quiz.findById(QuizId);

    if (!quiz) {
      return res.status(404).json("There is no quiz to update");
    }

    const { quizNumber,quiz1,quiz2,quiz3,quiz4,quiz5,quiz6,quiz7,quiz8,quiz9,quiz10,date,moduleN,Lecture, } = req.body;

    const updatedQuiz = await Quiz.findByIdAndUpdate(QuizId, {quizNumber,
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10,
    date,
    moduleN,
    Lecture,
    });

    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getQuiz = async (req, res) => {
  const QuizId = req.params.id;

  try {
    const quizDetail = await Quiz.findById(QuizId);
    res.json(quizDetail);
  } catch (error) {
    res.status(400).json(error);
  }
};

const removeQuiz= async (req, res) => {
  const QuizId = req.params.id;

  try {
    const quizDetails = await Quiz.findById(QuizId);

    if (!quizDetails) {
      return res.status(404).json("There is no quiz to remove");
    }

    const removeQuiz= await Quiz.findByIdAndDelete(QuizId);
    res.status(200).json(removeQuiz);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const validateQuiz = async (req,res) => {
  const quiId = req.body.quizId;

  try {
    const foundQuiz = await Quiz.findOne({ quizId : quiId });

    if (foundQuiz) {
      return res.status(404).json("This Quiz Id already existing");
    }  else {
      return res.status(200).json(true);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
    addQuiz,
    getQuizzes,
    validateQuiz,
    getQuiz,
    UpdateQuiz,
    removeQuiz,
  };