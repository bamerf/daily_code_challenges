def even_multiples(numbers)

  sorted_numbers = []

  numbers.each do |number|

    if number % 5 == 0 || number.even?

      sorted_numbers << number

    end

  end

  p sorted_numbers

end

even_multiples([1, 2, 4, 5, 10, 25, 44, 45, 46, -4, -5])