require 'pry'

# Encrypt
def encrypt(string, n)

  return string if string == nil || n <= 0
  
  string = string.split('')

  
  n.times do

    every_second_char = []
    every_other_char = []

    string.each_with_index do |char, i|
    
      if i.odd?
        every_second_char << char
      elsif i.even?
        every_other_char << char
      end
      
    end

    string = every_second_char + every_other_char
  end

  return string.join()

end

p encrypt("This is a test!", 2)


# Decrypt
def decrypt(string, n)

  return string if string == nil || n <= 0
  
  string = string.split('')

  if n.even?

    n.times do
  
      every_second_char = []
      every_other_char = []
  
      string.each_with_index do |char, i|
      
        if i.even?
          every_second_char << char
        elsif i.odd?
          every_other_char << char
        end
        
      end
  
      string = every_other_char + every_second_char 
    end
  
    return string.join()

  elsif n.odd?

    n = n + 3

    n.times do
  
      every_second_char = []
      every_other_char = []
  
      string.each_with_index do |char, i|
      
        if i.odd?
          every_second_char << char
        elsif i.even?
          every_other_char << char
        end
        
      end
  
      string = every_second_char + every_other_char  
    end
  
    return string.join()

  end

end

p decrypt(encrypt("This is a test!", 3), 3)