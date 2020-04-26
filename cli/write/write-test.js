import fs from 'fs'
import {
  testPath,
} from '../paths'

const testDeclaration = (batch, content) => `# frozen_string_literal: true

require_relative 'test_helper'

class TestBatch${batch} < Test::Unit::TestCase
${content}
end

`

const defineTest = (batch, student) => `
  def test_${student}
    assert LeWagon::Batch${batch}.${student}.is_a? String
  end
`

const writeTest = (batch, students = [], state = {}) => {
  fs.writeFileSync(
    testPath(batch),
    testDeclaration(
      batch,
      students.sort().map((student) => {
        if (!state[student].length) return ''
        return defineTest(batch, student)
      }).join('\n'),
    ),
  )
}

export default writeTest
