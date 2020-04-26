import fs from 'fs'
import { localePath } from './paths'

const yaml = require('js-yaml')

function loadBatch(batch) {
  let state
  try {
    const locale = yaml.safeLoad(fs.readFileSync(localePath(batch), 'utf8'))
    state = locale.en.lewagon[`batch${batch}`]
  } catch (e) {
    console.log(e)
  }
  return state
}

export default loadBatch
