class Car
  def initialize (color, year, model)
    @color = color
    @year = year
    @model = model
    @high_beams = "off"
    @my_lambda = lambda { puts "thing"}
  end
  def high_beams=(state)
    @high_beams = state
  end
  def start 
    puts "VROOOMM i am a " + @model
  end
 end

my_car = Car.new("red", 2007, "Toyota Matrix");
puts Car===my_car
