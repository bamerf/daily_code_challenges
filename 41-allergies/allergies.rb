# A function to tell you what allergies you have given an allergy score

def user_allergies(score)
  
  allergies = {
    cats: 128,
    pollen: 64,
    chocolate: 32,
    tomatoes: 16,
    strawberries: 8,
    shellfish: 4,
    peanats: 2,
    eggs: 1
  }

  user_allergies = []
  
  allergies.each do |allergy, value|
    if value <= score
      user_allergies << allergy
      score -= value
    end
  end

  return user_allergies
end

p user_allergies(66)