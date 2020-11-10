
print "hello"
puts  "howdy"
p "hi"

def method_name (name)
  puts "hello " + name
end
  
a = nil
a.nil?

# show how ruby is more flexible in syntax and how you can reverse
# flow with loops and conditionals

puts "I push Miracle Whips" if benzColor == "mayonnaise"


x = 0
begin
  x += 1
end until x <10
p  x  # prints 1

# Bundle

#bundle init
#bundle add rainbow
#bundle install 
require 'rainbow'
puts Rainbow("this is red").red + " and " + Rainbow('this is blue').blue

# symbols

:one.equal? :one
'one'.equal? 'one'

puts :symbol.object_id  
puts :symbol.object_id  


# hashes

top_five = { "one" => "dylan", "two" => "dylan", "three" => "dylan", "four" => "dylan", "five" => "dylan" }
top_five = { :one => "dylan", :two => "dylan", :three => "dylan", :four => "dylan", :five => "dylan" }
top_five = { one: "dylan", two: "dylan", three: "dylan", four: "dylan", five: "dylan" }


# blocks lambdas

say_something = -> { puts "This is a lambda" }
dogs.each &say_something

# multi-line
l = lambda do |a, b|
  tmp = a * 3
  tmp * b / 2
end
l.call(1, 2)


# scope

varname = 2
def methodGuy (param)
  varName = 4
  puts varname
end

puts varname

# concurrency

# console.log("before");
# fs.readFile('test2.rb', function read(err, data) {
#     console.log(data);
# });
# console.log("after");


## compared to 

puts "before read"
puts File.read('test2.rb')
puts "after read"

# debugging
thing = { one: 1, two: 2, three: 3}
thing.inspect


# classes
class Car
  attr_accessor :color
  attr_reader :year
  attr_writer :model
  def initialize (color, year, model)
    @color = color
    @year = year
    @model = model
  end
  def color
    @color
  end
  def color=(value)
    @color = value
  end
  def year
    @year
  end
  def model=(value)
    @model = value
  end
 end