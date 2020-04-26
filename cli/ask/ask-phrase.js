import inquirer from 'inquirer'
import parseName from '../parse-name'

async function askPhrase(options) {
  const { batchState, student } = options
  const { phrase } = await inquirer.prompt([{
    type: 'input',
    name: 'phrase',
    validate: async (input) => !!input || 'Phrase can\'t be blank',
    message: `Enter the new phrase for ${parseName(student)}`,
  }])
  batchState[student].push(phrase)
  const { shouldContinue } = await inquirer.prompt([{
    type: 'confirm',
    name: 'shouldContinue',
    message: 'Do you want to add another phrase?',
  }])
  if (shouldContinue) {
    await askPhrase({ ...options, batchState })
  } else {
    return { ...options, batchState }
  }
  return { ...options, batchState }
}

export default askPhrase
