import arg from 'arg'
import flags from './flags'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    flags,
    {
      argv: rawArgs.slice(2),
    },
  )
  return {
    skipPrompts: args['--yes'] || false,
    new: args['--new'] || false,
    batch: args._[0],
    runInstall: args['--install'] || false,
  }
}

export default parseArgumentsIntoOptions
