
class Dice 
  
  def self.roll(number)

    @@dice_rolls = []

    number.times do 
      
      @@dice_rolls.push(rand(1..6)) 

    end

    self
  
  end
  
  def self.total
    p "#{@@dice_rolls}, total is #{@@dice_rolls.sum}"
  end

end