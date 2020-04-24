import inquirer from 'inquirer'
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import parseArguments from './parse-arguments'

async function askBatch(options) {
  if (!options.batch) {
    const localePath = (num) => `lib/locales/en/batch${num}.yml`
    const classPath = (num) => `lib/lewagon/batch${num}.rb`
    const testPath = (num) => `test/lewagon/batch${num}_test.rb`
    const docPath = (num) => `docs/Batch${num}.md`

    const { batch } = await inquirer.prompt([{
      type: 'input',
      name: 'batch',
      message: 'Please enter the batch number',
    }])

    if (batch) {
      try {
        if (!fs.existsSync(localePath(batch))) fs.writeFileSync(localePath(batch))
        if (!fs.existsSync(classPath(batch))) fs.writeFileSync(classPath(batch))
        if (!fs.existsSync(testPath(batch))) fs.writeFileSync(testPath(batch))
        if (!fs.existsSync(docPath(batch))) fs.writeFileSync(docPath(batch))
      } catch (err) {
        console.error(err)
      }
    }
  }
}

async function cli(args) {
  let options = parseArguments(args)
  options = await askBatch(options)
  console.log(options)
}
export default cli
