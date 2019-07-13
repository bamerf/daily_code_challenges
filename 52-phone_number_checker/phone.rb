require 'pry'
class Phone

  def initialize(number)
    @number = number
  end

  def number

    @number.gsub!(/[() -.]/, '')

    array_of_nums = @number.chars
    if array_of_nums.length == 11 && array_of_nums.first == "1"
      array_of_nums.shift()
      array_of_nums.join('')
    elsif @number.length != 10
      "0000000000"
    else
      @number
    end

  end

  def area_code 
    @number[0..2]
  end

  def to_s
    area_code = @number[0..2]
    start_number = @number[3..5]
    end_number = @number[6..9]
    "(#{area_code}) #{start_number}-#{end_number}"
  end

end