import inquirer, { Separator } from 'inquirer'
import parseName from '../parse-name'

async function newStudent() {
  const { name } = await inquirer.prompt([{
    type: 'input',
    name: 'name',
    validate: async (input) => !!input || 'Name can\'t be blank',
    message: 'Name of the student',
  }])
  return name.toLowerCase().replace(' ', '_')
}

async function selectStudent(studentList) {
  const capitalizedNames = studentList.map((student) => parseName(student))
  const newEntry = 'New student'
  const { student } = await inquirer.prompt([{
    type: 'list',
    name: 'student',
    default: 0,
    choices: [
      new Separator(),
      newEntry,
      new Separator(),
      new Separator('Current students'),
      ...capitalizedNames,
    ],
    message: 'Select a student',
  }])
  if (student === newEntry) return false

  return student.toLowerCase().replace(' ', '_')
}

async function shouldNew(batch) {
  const answer = await inquirer.prompt([{
    type: 'confirm',
    name: 'shouldNew',
    message: `Batch ${batch} is empty 😢. Do you want to add a new student?`,
  }])
  return answer.shouldNew
}

async function askStudent(options) {
  const { batch, batchState, new: newFlag } = options
  const studentList = Object.keys(batchState)
  let student
  if (newFlag) {
    student = await newStudent(studentList)
    batchState[student] = []
  } else if (studentList && studentList.length) {
    student = await selectStudent(studentList)
    if (!student) {
      student = await newStudent(studentList)
      batchState[student] = []
    }
  } else if (await shouldNew(batch)) {
    student = await newStudent(studentList)
    batchState[student] = []
  }
  return {
    ...options,
    student,
    batchState,
  }
}

export default askStudent
