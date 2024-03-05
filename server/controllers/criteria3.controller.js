import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'
import {
  ThreeOneOne,
  ThreeOneThree,
  ThreeOneTwo,
  ThreeThreeOne,
  ThreeTwoOne,
  ThreeTwoTwo,
} from '../models/three.model.js'

export const ThreeOneOneController = async (req, res) => {
  const {
    year,
    projectEndowments,
    principalInvestigator,
    department,
    funds,
    duration,
    file,
  } = req.body.singleData

  try {
    // Check if the document with the provided year exists
    const existingDocument = await ThreeOneOne.findOne({ year })

    if (existingDocument) {
      // If document exists, update its values
      existingDocument.projectEndowments = projectEndowments
      existingDocument.principalInvestigator = principalInvestigator
      existingDocument.department = department
      existingDocument.funds = funds
      existingDocument.duration = duration
      existingDocument.file = file

      await existingDocument.save()

      return res.status(200).json({ data: existingDocument })
    } else {
      // If document doesn't exist, create a new one
      const newDocument = new ThreeOneOne({
        year,
        projectEndowments,
        principalInvestigator,
        department,
        funds,
        duration,
        file,
      })

      await newDocument.save()

      return res.status(201).json({ data: newDocument })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const GetThreeOneOneController = async (req, res) => {
  try {
    // Fetch all documents from the ThreeOneOne model
    const allData = await ThreeOneOne.find()

    // Send the fetched data as a JSON response
    res.status(200).json(allData)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const ThreeOneTwoController = async (req, res) => {
  const {
    year,
    researchProject,
    principalInvestigator,
    fundingAgency,
    department,
    funds,
    duration,
    file,
  } = req.body.singleData

  try {
    // Check if the document with the provided year exists
    const existingDocument = await ThreeOneTwo.findOne({ year })

    if (existingDocument) {
      // If document exists, update its values
      existingDocument.year = year
      existingDocument.researchProject = researchProject
      existingDocument.principalInvestigator = principalInvestigator
      existingDocument.fundingAgency = fundingAgency
      existingDocument.department = department
      existingDocument.funds = funds
      existingDocument.duration = duration
      existingDocument.file = file

      await existingDocument.save()

      return res.status(200).json({ data: existingDocument })
    } else {
      // If document doesn't exist, create a new one
      const newDocument = new ThreeOneTwo({
        year,
        researchProject,
        principalInvestigator,
        fundingAgency,
        department,
        funds,
        duration,
        file,
      })

      await newDocument.save()

      return res.status(201).json({ data: newDocument })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const GetThreeOneTwoController = async (req, res) => {
  try {
    // Fetch all documents from the ThreeOneOne model
    const allData = await ThreeOneTwo.find()

    // Send the fetched data as a JSON response
    res.status(200).json(allData)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const ThreeOneThreeController = async (req, res) => {
  const {
    year,
    nameOfWorkshopsSeminars,
    numberOfParticipants,
    startDate,
    endDate,
    link,
    file,
  } = req.body.singleData

  try {
    // Check if the document with the provided year exists
    const existingDocument = await ThreeOneThree.findOne({ year })

    if (existingDocument) {
      // If document exists, update its values
      existingDocument.year = year
      existingDocument.nameOfWorkshopsSeminars = nameOfWorkshopsSeminars
      existingDocument.numberOfParticipants = numberOfParticipants
      existingDocument.startDate = startDate
      existingDocument.endDate = endDate
      existingDocument.link = link
      existingDocument.file = file

      await existingDocument.save()

      return res.status(200).json({ data: existingDocument })
    } else {
      // If document doesn't exist, create a new one
      const newDocument = new ThreeOneThree({
        year,
        nameOfWorkshopsSeminars,
        numberOfParticipants,
        startDate,
        endDate,
        link,
        file,
      })

      await newDocument.save()

      return res.status(201).json({ data: newDocument })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const GetThreeOneThreeController = async (req, res) => {
  try {
    // Fetch all documents from the ThreeOneOne model
    const allData = await ThreeOneThree.find()

    // Send the fetched data as a JSON response
    res.status(200).json(allData)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const ThreeTwoOneController = async (req, res) => {
  const {
    year,
    titleOfPaper,
    nameOfAuthors,
    nameOfJournal,
    department,
    isbnIssnNumber,
    file: [],
  } = req.body.singleData

  try {
    // Check if the document with the provided year exists
    const existingDocument = await ThreeTwoOne.findOne({ year })

    if (existingDocument) {
      // If document exists, update its values
      existingDocument.year = year
      existingDocument.titleOfPaper = titleOfPaper
      existingDocument.nameOfAuthors = nameOfAuthors
      existingDocument.nameOfJournal = nameOfJournal
      existingDocument.department = department
      existingDocument.isbnIssnNumber = isbnIssnNumber

      await existingDocument.save()

      return res.status(200).json({ data: existingDocument })
    } else {
      // If document doesn't exist, create a new one
      const newDocument = new ThreeTwoOne({
        year,
        titleOfPaper,
        nameOfAuthors,
        nameOfJournal,
        department,
        isbnIssnNumber,
        file,
      })

      await newDocument.save()

      return res.status(201).json({ data: newDocument })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const GetThreeTwoOneController = async (req, res) => {
  try {
    // Fetch all documents from the ThreeOneOne model
    const allData = await ThreeTwoOne.find()

    // Send the fetched data as a JSON response
    res.status(200).json(allData)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const ThreeTwoTwoController = async (req, res) => {
  const {
    year,
    teacherName,
    titleOfPaper,
    bookTitle,
    nameOfAuthor,
    titleOfConference,
    nameOfPublisher,
    isbnIssnNumber,
    file,
  } = req.body.singleData

  try {
    // Check if the document with the provided year exists
    const existingDocument = await ThreeTwoTwo.findOne({ year })

    if (existingDocument) {
      // If document exists, update its values
      existingDocument.year = year
      existingDocument.teacherName = teacherName
      existingDocument.bookTitle = bookTitle
      existingDocument.titleOfPaper = titleOfPaper
      existingDocument.nameOfAuthor = nameOfAuthor
      existingDocument.titleOfConference = titleOfConference
      existingDocument.nameOfPublisher = nameOfPublisher
      existingDocument.isbnIssnNumber = isbnIssnNumber

      await existingDocument.save()

      return res.status(200).json({ data: existingDocument })
    } else {
      // If document doesn't exist, create a new one
      const newDocument = new ThreeTwoTwo({
        year,
        teacherName,
        titleOfPaper,
        bookTitle,
        nameOfAuthor,
        titleOfConference,
        nameOfPublisher,
        isbnIssnNumber,
        file,
      })

      await newDocument.save()

      return res.status(201).json({ data: newDocument })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const GetThreeTwoTwoController = async (req, res) => {
  try {
    // Fetch all documents from the ThreeOneOne model
    const allData = await ThreeTwoTwo.find()

    // Send the fetched data as a JSON response
    res.status(200).json(allData)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const ThreeThreeOneController = async (req, res) => {
  const { year, description, file } = req.body.singleData

  try {
    // Check if the document with the provided year exists
    const existingDocument = await ThreeThreeOne.findOne({ year })

    if (existingDocument) {
      // If document exists, update its values
      existingDocument.year = year
      existingDocument.description = description
      existingDocument.file = file

      await existingDocument.save()

      return res.status(200).json({ data: existingDocument })
    } else {
      // If document doesn't exist, create a new one
      const newDocument = new ThreeThreeOne.findOne({ year })({
        year,
        description,
        file,
      })

      await newDocument.save()

      return res.status(201).json({ data: newDocument })
    }
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const GetThreeThreeOneController = async (req, res) => {
  try {
    // Fetch all documents from the ThreeOneOne model
    const allData = await ThreeThreeOne.find()

    // Send the fetched data as a JSON response
    res.status(200).json(allData)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
