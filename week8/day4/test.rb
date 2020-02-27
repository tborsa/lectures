dog = "roofus"
dog_two = 'lil fella'

# puts dog_two.inspect
# p dog_two
# print dog_two

def do_something
  return 5
end

# do_something

def something_else(func, thing_two = 5)
  puts func + thing_two
end

something_else 4, 10

weather = 'rainy'

puts 'bring an umbrella' unless weather == 'sunny'

puts 5 === 5

10.ctimes { puts 'curly bois are back'}