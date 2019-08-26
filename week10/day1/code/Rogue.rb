class Burger
  attr_reader :options

  def initialize(options={})
    @options = options
  end

  def apply_ketchup
    @ketchup = @options[:ketchup]
  end

  def has_ketchup_on_it?
    @ketchup
  end
end