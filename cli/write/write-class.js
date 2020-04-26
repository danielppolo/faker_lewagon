import fs from 'fs'
import { classPath } from '../paths'

const classDeclaration = (batch, content) => `# frozen_string_literal: true

module LeWagon
  class Batch${batch} < Base
    class << self
${content}
    end
  end
end
`

const defineClass = (batch, student, state = {}) => `
      def ${student}
        fetch('batch${batch}.${student}')
      end
`

const writeClass = (batch, students = []) => {
  fs.writeFileSync(
    classPath(batch),
    classDeclaration(
      batch,
      students.sort().map((student) => defineClass(batch, student)).join('\n'),
    ),
  )
}

export default writeClass
