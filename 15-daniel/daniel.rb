loop do
  print "Talk to Daniel: "
  user_input = gets.to_s

  if user_input.include?("?")
    puts "Sure"
  elsif user_input == user_input.upcase
    puts "Woah, chill out!"
  elsif user_input.include?("Daniel")
    puts "Fine"
  else puts "Whatever"
  end
end