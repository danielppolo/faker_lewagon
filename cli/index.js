import parseArguments from './parse-arguments'
import writeFiles from './write-files'
import {
  askBatch, askPhrase, askStudent,
} from './ask'

async function cli(args) {
  let options = parseArguments(args)
  options = await askBatch(options)
  options = await askStudent(options)
  if (options.student) {
    options = await askPhrase(options)
  }
  writeFiles(options)
  console.log('Bye 👋')
}
export default cli
