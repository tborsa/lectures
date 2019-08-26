

# Automated Testing RSPEC & Rails

![Ruby](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week7/Day1/Lecture/assets/ruby.jpg)

Notes and code [here](https://github.com/tborsa/lectures/tree/master/week8/day4)

lecture going through ruby basics
with a brief intro into OOP

- How is Ruby different to JS & Node?
  - Conventions
  - Paradigms
  - Usage In The Wild
  - Concurrency Model
  - Inheritance Model
- Similarities between the two
- Blocks in Ruby
- Debugging Tips


# RSPEC?

Introduced to RSPEC over the weekend but lets start with a brief overview.

What is RSPEC?


What does it allow us to do?


What does it look like?

  describe?
    it?
      expect?

      to?

      matcher? (be be_a)
      (special method to check if argument passed to expect meets some criteria)
      https://www.rubydoc.info/gems/rspec-rails/RSpec/Rails/Matchers

      extra 

      subject
      before 
      context


  . instance
  # class

#TDD?
 2000 book Extreme Programming Explained. 

 REWRITE
 Write the smallest possible test case that matches what we need to program.
Run the test and watch it fail. This gets you into thinking how to write only the code that makes it pass.
Write some code with the goal of making the test pass.
Run your test suite. Repeat steps 3 and 4 until all tests pass.
Go back and refactor your new code, making it as simple and clear as possible while keeping the test suite green.

forces us to plan and think about what we are building. 

# BDD?
Behavior Driven Development

keep testing simple 
one test per system behavior
easier to understand and maintain 



bundle exec rspec
rspec file_rspec.rb


# Continuous Integrartion
CI

# Semaphore

after bundle project set up use
bundle install --path vendor/bundle
bundle exec rspec
for continuous integration

#RSPEC RAILS
Use model validation in conjunction with rspec tests
it "is not valid without a title" do
  auction = Auction.new(title: nil)
  expect(auction).to_not be_valid
end

class Auction < ActiveRecord::Base
  validates_presence_of :title
end

RED GREEN REFACTOR
https://www.codecademy.com/articles/tdd-red-green-refactor


check if association is defined 
  it "has one buyer" do
    assc = described_class.reflect_on_association(:buyer)
    expect(assc.macro).to eq :has_one
  end