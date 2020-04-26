import fs from 'fs'
import {
  writeClass, writeLocale, writeDoc, writeTest,
} from './write'
import {
  localePath, testPath, classPath, docPath,
} from './paths'

function validateFiles(batch) {
  try {
    if (!fs.existsSync(localePath(batch))) writeLocale(batch)
    if (!fs.existsSync(classPath(batch))) writeClass(batch)
    if (!fs.existsSync(testPath(batch))) writeTest(batch)
    if (!fs.existsSync(docPath(batch))) writeDoc(batch)
  } catch (err) {
    console.error(err)
  }
}

export default validateFiles
