import fs from 'fs'
import {
  docPath,
} from '../paths'

const docDeclaration = (batch, content) => `# LeWagon::Batch${batch}
\`\`\`ruby
${content}
\`\`\`
`

const defineDoc = (batch, student, phrase) => `LeWagon::Batch${batch}.${student} #=> ${phrase || 'nil'} 
`

const writeDoc = (batch, students = [], state = {}) => {
  fs.writeFileSync(
    docPath(batch),
    docDeclaration(
      batch,
      students.sort().map((student) => {
        if (!state[student].length) return ''
        return defineDoc(batch, student, state[student][0])
      }).join('\n'),
    ),
  )
}

export default writeDoc
