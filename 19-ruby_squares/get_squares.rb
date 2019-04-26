
def get_square_number(input_numbers)

  square_numbers = []

  input_numbers.each do |number|
  
    if Math.sqrt(number) % 1 == 0.0
      square_numbers.push(number)
    end
  
  end

  p square_numbers.sort.uniq

end


get_square_number([1, 9, 10, 1, 16, 25, 76, 81, 100])
