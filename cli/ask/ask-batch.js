import inquirer from 'inquirer'
import validateFiles from '../validate-files'
import loadBatch from '../load-batch'

async function askBatch(options) {
  let { batch } = options
  if (!batch) {
    const answer = await inquirer.prompt([{
      type: 'input',
      name: 'batch',
      when: !batch,
      validate: async (input) => /\d{3}/.test(input) || 'Please enter a valid batch number',
      message: 'Please enter the batch number',
    }])
    batch = answer.batch
  }
  validateFiles(batch)
  const batchState = loadBatch(batch) || {}
  return {
    ...options,
    batchState,
    batch,
  }
}

export default askBatch
