require 'minitest/autorun'
require "minitest/reporters" # optional
Minitest::Reporters.use!(Minitest::Reporters::SpecReporter.new)
require_relative 'quiz_letter_blocks'

class QuizTest < MiniTest::Unit::TestCase

  def test_if_one_letter_true
    assert_equal true, can_make_word("A")
  end

  def test_letters_not_on_same_block
    assert_equal true, can_make_word("BARK")
  end








end