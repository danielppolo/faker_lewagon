# frozen_string_literal: true

require_relative 'test_helper'

class SampleTest < Test::Unit::TestCase
  def test_zh_tw_address_methods
    # assert LeWagon::Address.postcode.is_a? String
    # assert LeWagon::Address.state.is_a? String
    # assert LeWagon::Address.state_abbr.is_a? String
    # assert LeWagon::Address.city_prefix.is_a? String
    # assert LeWagon::Address.city_suffix.is_a? String
    # assert LeWagon::Address.city.is_a? String
    # assert LeWagon::Address.street_name.is_a? String
  end

  def test_zh_tw_name_methods
    # assert LeWagon::Name.last_name.is_a? String
    # assert LeWagon::Name.first_name.is_a? String
    # assert LeWagon::Name.name.is_a? String
    # assert LeWagon::Name.name_with_middle.is_a? String
    # assert_no_match(/\s/, LeWagon::Name.name_with_middle)
  end

  def test_zh_tw_university_methods
    # assert LeWagon::University.prefix.is_a? String
    # assert LeWagon::University.suffix.is_a? String
    # assert LeWagon::University.name.is_a? String
  end
end
