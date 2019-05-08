require 'pry'

class Scrabble

  def self.score(string)

    scoreCounter = 0
    chars = string.downcase.split('')

    chars.each do |char|

      if char.match?(/[aeioulnrst]/)
        scoreCounter += 1
      elsif char.match?(/[dg]/)
        scoreCounter += 2
      elsif char.match?(/[bcmp]/)
        scoreCounter += 3
      elsif char.match?(/[fhvwy]/)
        scoreCounter += 4
      elsif char.match?(/[k]/)
        scoreCounter += 5
      elsif char.match?(/[jx]/)
        scoreCounter += 8
      elsif char.match?(/[qz]/)
        scoreCounter += 10
      end

    end

    p scoreCounter
    
  end
  
end

binding.pry