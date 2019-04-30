
class Order

  attr_accessor :name, :order, :size, :sugar

  def initialize
    @name = ""
    @order = ""
    @size = ""
    @sugar = 0
  end

  def to_s
    "Order for #{@name} is #{@size} #{@order} with #{@sugar} sugars."
  end

end

c1 = Order.new
print "What's your name? "
c1.name = gets.chomp.capitalize
print "What would you like to order? "
c1.order = gets.chomp.capitalize
print "What size would you like? "
c1.size = gets.chomp
print "How many sugars would you like? "
c1.sugar = gets.to_i

puts c1