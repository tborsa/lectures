

class Hero
  @@active_heroes = 0
  attr_writer :name
  def initialize(hp, attack, name, abilities, range)
    @hp = hp
    @attack = attack
    @name = name
    @abilities = abilities
    @range = range
    @@active_heroes+=1
  end
  def active_heroes
    @@active_heroes
  end
  def attack
    puts @name + ' does ' + @abilities
  end
end

class Jana < Hero
  
end

jana = Hero.new(100, 20, 'jana ', 'gust', 10)

puts jana.active_heroes
nami = Hero.new(100, 20, 'nami', 'tidal wave', 10)

nami.name='ziggs'
puts nami.name