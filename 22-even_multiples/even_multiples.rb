def even_multiples(numbers)

  sorted_numbers = []

  numbers.each do |number|

    if number % 5 == 0 && number.even?

      sorted_numbers << number

    end

  end

  sorted_numbers

end

p even_multiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5])