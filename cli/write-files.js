import {
  writeClass, writeLocale, writeDoc, writeTest,
} from './write'

const writeFiles = ({
  batch, batchState,
}) => {
  const studentList = Object.keys(batchState)
  writeLocale(batch, studentList, batchState)
  writeClass(batch, studentList, batchState)
  writeTest(batch, studentList, batchState)
  writeDoc(batch, studentList, batchState)
}

export default writeFiles
