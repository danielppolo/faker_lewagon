import fs from 'fs'
import {
  localePath,
} from '../paths'

const localeDeclaration = (batch, content) => `en:
  lewagon:
    batch${batch}:
${content}
`

const defineLocale = (batch, student, phrases) => `      ${student}:
        ${phrases}
`
const writeLocale = (batch, students = [], state = {}) => {
  fs.writeFileSync(
    localePath(batch),
    localeDeclaration(
      batch,
      students.sort().map((student) => {
        const phrases = `${state[student].map((phrase) => `- ${phrase}`).join('\n        ')}`
        return defineLocale(batch, student, phrases)
      }).join(''),
    ),
  )
}

export default writeLocale
