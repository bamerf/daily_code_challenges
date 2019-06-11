# Starbucks

Write a program that holds on to coffee orders.

```
c1 = Coffee.new('Darryl', 'latte', 'medium', 2)
```

Write the `.to_s` method for this class so when you `puts c1` you will have "Darryl's latte, medium, 2 sugars."

### Extension

1. Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.

```
puts c1
# => "Barrel's latte, medium, 2 sugars."
```

2. When you make an order, there should be a waiting time of anywhere between 2-5 minutes. You should be able to check if it's ready by calling `c1.ready?` and have the program yell out the order and the misspelled name if its ready.
