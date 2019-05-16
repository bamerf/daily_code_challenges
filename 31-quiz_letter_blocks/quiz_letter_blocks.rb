require 'pry'

@blocks = [
  ['B','O'],
  ['X','K'],
  ['D','Q'],
  ['C','P'],
  ['N','A'],
  ['G','T'],
  ['R','E'],
  ['T','G'],
  ['Q','D'],
  ['F','S'],
  ['J','W'],
  ['H','U'],
  ['V','I'],
  ['A','N'],
  ['E','R'],
  ['F','S'],
  ['L','Y'],
  ['P','C'],
  ['Z','M']
]

def can_make_word(input)

  # return true if input.length == 1

  used_blocks = []

  input.chars.each do |letter|
    
    @blocks.each_with_index do |block|
      
      if block.include?(letter)
        used_blocks << block
        break
      end
 
    end
    
  end
  
  if used_blocks.count != input.length
    false
  else
    true
  end
end

p can_make_word("BOUGTH")