# 1. Create a program that collects lunch orders. Prompt:
#  	* **Name for order:** (enter name)
#  	* **{name} wants to order:** (enter item)
# 2. Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
#  	* Example: **Greg** can order a *Burger*, and then add *Fries* to his order later.
# 3. After storing data, prompt the user with:
#  	* **Add another item to the order? (y/n)**
#  	* Repeat steps 1 & 2 if the answer is "y"
# 3. After the user completes adding orders, print out:
#  	* **"All orders: {order data}"**


orders = {}
current_order = []
user_option = nil

loop do

  print "Name for order? "
  order_name = gets.chomp.capitalize #Greg
  print "#{order_name} wants to order? "
  current_order.push(gets.chomp) #Burger, Fries
  orders[order_name] = current_order

  print "Would you like to add another item? (y/n) "
  user_option = gets.chomp.downcase

  while user_option != "n"
    
    
    while user_option != "n"
      
      print "What would you like to add? "
      current_order.push(gets.chomp)
      
      print "Would you like to add another item? (y/n) "
      user_option = gets.chomp.downcase

    end

  end


  puts "#{order_name} has order #{current_order.join(', ')}"

end

# No exit function yet.