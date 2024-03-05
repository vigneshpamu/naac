import mongoose from 'mongoose'

const ThreeOneOneSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  projectEndowments: {
    type: String,
    default: '',
  },
  principalInvestigator: {
    type: String,
    default: '',
  },
  department: {
    type: String,
    default: '',
  },
  funds: {
    type: Number,
    default: 0,
  },
  duration: {
    type: String, // You may want to specify a specific data type for duration, such as Date or Number, based on your requirements
    default: '',
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeOneTwoSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  researchProject: {
    type: String,
    required: true,
  },
  principalInvestigator: {
    type: String,
    required: true,
  },
  fundingAgency: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  funds: {
    type: Number,
    required: true,
  },
  duration: {
    type: String, // You may want to specify a specific data type for duration, such as Date or Number, based on your requirements
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeOneThreeSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  nameOfWorkshopsSeminars: {
    type: String,
    required: true,
  },
  numberOfParticipants: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeTwoOneSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  titleOfPaper: {
    type: String,
    required: true,
  },
  nameOfAuthors: {
    type: String,
    required: true,
  },
  nameOfJournal: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  isbnIssnNumber: {
    type: String,
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeTwoTwoSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  teacherName: {
    type: String,
    required: true,
  },
  titleOfPaper: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  nameOfAuthor: {
    type: String,
    required: true,
  },
  titleOfConference: {
    type: String,
    required: true,
  },
  nameOfPublisher: {
    type: String,
    required: true,
  },
  isbnIssnNumber: {
    type: String,
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeThreeOneSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeThreeTwoSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  nameOfActivity: {
    type: String,
    required: true,
  },
  nameOfAwardRecognition: {
    type: String,
    required: true,
  },
  nameOfAwardingGovernmentBodies: {
    type: String,
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeThreeFourSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  nameOfActivity: {
    type: String,
    required: true,
  },
  nameOfScheme: {
    type: String,
    required: true,
  },
  numberOfTeachersParticipating: {
    type: Number,
    required: true,
  },
  numberOfStudentsParticipating: {
    type: Number,
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeFourTwoSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  organizationWithMoU: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  activitiesUnderMoU: {
    type: String,
    required: true,
  },
  numberOfStudentsTeachers: {
    type: Number,
    required: true,
  },
  file: {
    type: [String], // Array of strings
    default: [],
  },
})

const ThreeOneOne = mongoose.model('ThreeOneOne', ThreeOneOneSchema)
const ThreeOneTwo = mongoose.model('ThreeOneTwo', ThreeOneTwoSchema)
const ThreeOneThree = mongoose.model('ThreeOneThree', ThreeOneThreeSchema)
const ThreeTwoOne = mongoose.model('ThreeTwoOne', ThreeTwoOneSchema)
const ThreeTwoTwo = mongoose.model('ThreeTwoTwo', ThreeTwoTwoSchema)
const ThreeThreeOne = mongoose.model('ThreeThreeOne', ThreeThreeOneSchema)
const ThreeThreeTwo = mongoose.model('ThreeThreeTwo', ThreeThreeTwoSchema)
const ThreeThreeFour = mongoose.model('ThreeThreeFour', ThreeThreeFourSchema)
const ThreeFourTwo = mongoose.model('ThreeFourTwo', ThreeFourTwoSchema)

export {
  ThreeOneOne,
  ThreeOneTwo,
  ThreeOneThree,
  ThreeTwoOne,
  ThreeTwoTwo,
  ThreeThreeOne,
  ThreeThreeTwo,
  ThreeThreeFour,
  ThreeFourTwo,
}
