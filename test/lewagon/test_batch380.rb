# frozen_string_literal: true

require_relative 'test_helper'

class TestBatch380 < Test::Unit::TestCase

  def test_massi
    assert LeWagon::Batch380.massi.is_a? String
  end

end

