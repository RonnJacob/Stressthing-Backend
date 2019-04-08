const studentModel = require('../models/user.model.server');
const questionModel = require('../models/recipe.model.server');
const answerModel = require('../models/ingredient.model.server');

const students = [
    {
        _id: 123,
        username: 'alice',
        password: 'alice',
        firstName: 'Alice',
        lastName: 'Wonderland',
        gradYear: 2020,
        scholarship: 15000
    },
    {
        _id: 234,
        username: 'bob',
        password: 'bob',
        firstName: 'Bob',
        lastName: 'Hope',
        gradYear: 2021,
        scholarship: 12000
    }
];

const questions = [
    {
        _id: 321,
        question: 'Is the following schema valid?',
        points: 10,
        questionType: 'TRUE_FALSE',
        trueFalse: {isTrue: false}
    },
    {
        _id: 432,
        question: 'DAO stands for Dynamic Access Object.',
        points: 10,
        questionType: 'TRUE_FALSE',
        trueFalse:
            {
                isTrue: false
            }
    },
    {
        _id: 543,
        question: 'What does JPA stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice:
            {
                choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations',
                correct: 1
            }
    },
    {
        _id: 654,
        question: 'What does ORM stand for?',
        points: 10,
        questionType: 'MULTIPLE_CHOICE',
        multipleChoice:
            {
                choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping',
                correct: 4
            }
    }];

const answers = [
    {
        _id: 123,
        trueFalseAnswer: true,
        multipleChoiceAnswer: null,
        student: 123,
        question: 321
    },
    {
        _id: 234,
        trueFalseAnswer: false,
        multipleChoiceAnswer: null,
        student: 123,
        question: 432
    },
    {
        _id: 345,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 1,
        student: 123,
        question: 543
    },
    {
        _id: 456,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 2,
        student: 123,
        question: 654
    },
    {
        _id: 567,
        trueFalseAnswer: false,
        multipleChoiceAnswer: null,
        student: 234,
        question: 321
    },
    {
        _id: 678,
        trueFalseAnswer: true,
        multipleChoiceAnswer: null,
        student: 234,
        question: 432
    },
    {
        _id: 789,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 3,
        student: 234,
        question: 543
    },
    {
        _id: 890,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 4,
        student: 234,
        question: 654
    }];

truncateDatabase = () => Promise.all([
    studentModel.deleteMany({}),
    questionModel.deleteMany({}),
    answerModel.deleteMany({})
]);

populateDatabase = () => Promise.all([
    ...students.map(student =>
        studentModel.create(student)),
    ...questions.map(question =>
        questionModel.create(question)),
    ...answers.map(answer =>
        answerModel.create(answer))
]);

createStudent = (student) =>
    studentModel.create(student);

createQuestion = (question) =>
    questionModel.create(question);

answerQuestion = (studentId, questionId,answer) =>
    answerModel.create(answer);

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId});

updateQuestion = (questionId, question) =>
    questionModel.update({_id: questionId}, {$set: question});

updateStudent = (studentId, student) =>
    studentModel.update({_id: studentId}, {$set: student});

deleteStudent = studentId =>
    studentModel.remove({_id: studentId});



findAllStudents = () =>
    studentModel.find();

findStudentById = studentId =>
    studentModel.findById(studentId);

findAllQuestions = () =>
    questionModel.find();

findQuestionById = questionId =>
    questionModel.findById(questionId);

findAllAnswers = () =>
    answerModel.find();

findAnswerById = answerId =>
    answerModel.findById(answerId);

findAnswersByStudent = studentId =>
    answerModel.find({student: studentId});

findAnswersByQuestion = questionId =>
    answerModel.find({question: questionId});

findAnswersOfQuestionByStudent = (studentId,questionId) =>
    answerModel.find( { $and: [ { student: studentId }, { question: questionId } ] } );

deleteMultipleChoiceAnswersByStudent = (studentId, questionId) =>
    answerModel.deleteMany({student: studentId, question: questionId});

module.exports = {
    findAnswersByStudent,
    findAnswersByQuestion,
    deleteMultipleChoiceAnswersByStudent,
    populateDatabase,
    findAllStudents,
    createStudent,
    findStudentById,
    deleteStudent,
    createQuestion,
    answerQuestion,
    truncateDatabase,
    findAllQuestions,
    findAllAnswers,
    updateStudent,
    findQuestionById,
    deleteQuestion,
    updateQuestion,
    findAnswersOfQuestionByStudent,
    findAnswerById
};
