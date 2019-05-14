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

binding.pry