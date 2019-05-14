require 'pry'

print "How many players? "
player_count = gets.to_i 

@deck = []

card_numbers = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]

card_symbols = ["Hearts", "Diamonds", "Spades", "Clubs"]

card_numbers.each do |number|
  card_symbols.each do |symbol|
    @deck << "#{number} of #{symbol}"
  end
end

def burn_card
  burnt_card = @deck.sample
  @deck.delete(burnt_card)
end

def deal_card
  deal = @deck.sample
  @deck.delete(deal)
  return deal
end

player = []
cpu_1 = []
cpu_2 = []
cpu_3 = []
cpu_4 = []
cpu_5 = []
cpu_6 = []
cpu_7 = []
cpu_7 = []

2.times do
  player << deal_card
  cpu_1 << deal_card
  case player_count
  when 3
    cpu_2 << deal_card
  when 4
    cpu_2 << deal_card
    cpu_3 << deal_card
  when 5
    cpu_2 << deal_card
    cpu_3 << deal_card
    cpu_4 << deal_card
  when 6
    cpu_2 << deal_card
    cpu_3 << deal_card
    cpu_4 << deal_card
    cpu_5 << deal_card
  when 7
    cpu_2 << deal_card
    cpu_3 << deal_card
    cpu_4 << deal_card
    cpu_5 << deal_card
    cpu_6 << deal_card
  when 8
    cpu_2 << deal_card
    cpu_3 << deal_card
    cpu_4 << deal_card
    cpu_5 << deal_card
    cpu_6 << deal_card
    cpu_7 << deal_card
  end
end

flop = []
turn = []
river = []

burn_card()
3.times do
  flop << deal_card
  burn_card()
end

turn << deal_card
burn_card()
river << deal_card

puts ""
puts "Your hand is #{player[0]} and #{player[1]}"
puts ""
puts "CPU hand is #{cpu_1[0]} and #{cpu_1[1]}"

case player_count
when 3
  puts "CPU_2 hand is #{cpu_2[0]} and #{cpu_2[1]}"
when 4
  puts "CPU_2 hand is #{cpu_2[0]} and #{cpu_2[1]}"
  puts "CPU_3 hand is #{cpu_3[0]} and #{cpu_3[1]}"
when 5
  puts "CPU_2 hand is #{cpu_2[0]} and #{cpu_2[1]}"
  puts "CPU_3 hand is #{cpu_3[0]} and #{cpu_3[1]}"
  puts "CPU_4 hand is #{cpu_4[0]} and #{cpu_4[1]}"
when 6
  puts "CPU_2 hand is #{cpu_2[0]} and #{cpu_2[1]}"
  puts "CPU_3 hand is #{cpu_3[0]} and #{cpu_3[1]}"
  puts "CPU_4 hand is #{cpu_4[0]} and #{cpu_4[1]}"
  puts "CPU_5 hand is #{cpu_5[0]} and #{cpu_5[1]}"
when 7
  puts "CPU_2 hand is #{cpu_2[0]} and #{cpu_2[1]}"
  puts "CPU_3 hand is #{cpu_3[0]} and #{cpu_3[1]}"
  puts "CPU_4 hand is #{cpu_4[0]} and #{cpu_4[1]}"
  puts "CPU_5 hand is #{cpu_5[0]} and #{cpu_5[1]}"
  puts "CPU_6 hand is #{cpu_6[0]} and #{cpu_6[1]}"
when 8
  puts "CPU_2 hand is #{cpu_2[0]} and #{cpu_2[1]}"
  puts "CPU_3 hand is #{cpu_3[0]} and #{cpu_3[1]}"
  puts "CPU_4 hand is #{cpu_4[0]} and #{cpu_4[1]}"
  puts "CPU_5 hand is #{cpu_5[0]} and #{cpu_5[1]}"
  puts "CPU_6 hand is #{cpu_6[0]} and #{cpu_6[1]}"
  puts "CPU_7 hand is #{cpu_7[0]} and #{cpu_7[1]}"
end

puts ""
puts "Flop is #{flop[0]}, #{flop[1]} and #{flop[2]}"
puts ""
puts "Turn is #{turn[0]}"
puts ""
puts "River is #{river[0]}"