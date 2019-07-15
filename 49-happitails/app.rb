require_relative 'animal'

shelter = []
option = nil

while option != 3 

  puts "Welcome to Cutties"
  puts "Please select an option:"
  puts "1 - Display all animals"
  puts "2 - Add an animal to shelter"
  puts "3 - Quit"

  option = gets.to_i

  #Display Animals
  if option == 1
    shelter.each do |animal|
      p "My name is #{animal.get_name}, I'm a #{animal.get_gender} #{animal.get_species}, I'm #{animal.get_age} years old"
    end

  elsif option == 2
    print "What is the name of the animal? "
    name = gets.chomp
    print "What species is #{name}? "
    species = gets.chomp
    print "How old is #{name}? "
    age = gets.to_i
    print "And what's the gender of #{name}? "
    gender = gets.chomp
    
    shelter.push(Animal.new(name, species, age, gender))
  end
  # Add animal
end

