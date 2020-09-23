# Featrue testing w/ RSPEC 👊

For feature/E2E tests we are using a combination of RSPEC,
Capybara, PhantomJS, poltergeist, and database_cleaner.

Notes and code [here](https://github.com/tborsa/lectures/tree/master/week10/day2)

# Capybara 🐭

![capybara](https://raw.githubusercontent.com/tborsa/lectures/master/week10/day2/assets/capybara2.jpg)

>"Capybara helps you test web applications by simulating how a real user would interact with your app. It is agnostic about the driver running your tests and comes with Rack::Test and Selenium support built in."

New DSL!! You can view the docs here https://rubydoc.info/github/teamcapybara/capybara/master

__feature__: is equivalent to describe / context  
__Scenario__: equivalent to it / example.

### Navigating, Interacting, Querying ... [more](https://github.com/teamcapybara/capybara#the-dsl)

Common Parameters:

- kind (Symbol) 
  - Optional selector type (:css, :xpath, :field, etc.). Defaults to default_selector.
- locator (String) 
  - The locator for the specified selector
- options (Hash) 
  - a customizable set of options

```
bin/rails generate rspec:feature <feature_name>
```

Capybara will wait up to two seconds for a UI action to occur. you can change the default wait with

Capybara.default_max_wait_time = some_value


# PhantomJS 👻
![phantom](https://raw.githubusercontent.com/tborsa/lectures/master/week10/day2/assets/phantom.jpeg)

>A JS based headless web browser (driver) for testing. 

Use instead of the default rack test which has [limitations](https://github.com/teamcapybara/capybara#racktest)

# Poltergeist 👻
![poltergeist](https://raw.githubusercontent.com/tborsa/lectures/master/week10/day2/assets/poltergeist.jpeg)

>A gem to connect Capybara(ruby) to Phantom(JS)


# DatabaseCleaner 🧼
![cleaner](https://raw.githubusercontent.com/tborsa/lectures/master/week10/day2/assets/dbcleaner.png)
>"Database Cleaner is a set of gems containing strategies for cleaning your database in Ruby. " 

"The original use case was to ensure a clean state during tests."

[setup](https://github.com/DatabaseCleaner/database_cleaner#rspec-with-capybara-example)

# Debug 🐛🥊

Unlike cypress we have less feedback into what our E2E tests are doing. 

Use screenshots to get snapshots of your test prgress. 

page.save_screenshot()

saved to tmp/capybara


---


Here are some more detailed notes on general testing courtesy of Karl!

Slides and notes are available at [https://github.com/jensen/rspec-notes/](https://github.com/jensen/rspec-notes/). The old lecture from monday has slides and notes as well [https://github.com/jensen/testing-notes](https://github.com/jensen/testing-notes).

## Strategic Testing

The decisions you make while writing software are important. It is possible that the decisions you make while testing your software are more important. Good software has a good testing strategy.

Fast, cheap, good. Choose two.

When designing a testing strategy you need to conisder which types of testing you will apply to each piece of your software. A good strategy could have any combination of the following types of tests.

### Manual Testing
  - Developer
  - Dedicated QA

### Automated Testing
  - Unit Tests
  - Integration Tests

### Manual Testing

The developer writing the software is responsible for ensuring all of the code they write is tested. Code must satisfy business requirements, issues within that code must not hinder business requirements from being fulfilled.

In order to allow developers to focus more time on satisfying business requirements some large companies have entire departments of people dedicated to testing and reporting issues within software. Smaller companies will hire 3rd party companies that will manually test your software on a contract basis.

As a developer you allocate time to resolving issues and submitting them back to the QA deparment for regresssion testing. This process is generally quite good, but it is neither fast or cheap.

### Automated Testing

Automation can improve the speed of testing in areas where coverage is good. It is typical that the cost of developing and maintaining tests goes up with the coverage percentage. Code coverage is a percentage measurement that reflects the amount of code that is tested by the projects unit tests. We use tools like [RCov](https://github.com/relevance/rcov) to help us track coverage.

It is not necessary to have 100% coverage in order for a testing strategy to be considered good. There are some parts of the software that are not critical. It may be a better overall strategy to assign the largest portion of the testing budget to the checkout and ordering code. This means that some other piece of your project may be impacted.

Some advantages of Unit Tests are:

- Specific functions and classes are tested in isolation, making them easy to troubleshoot.
- Can be run quickly against a code base.
- Can be run after every change to ensure no previous functionality is broken.
- They provide a high level of confidence that your changes did not introduce new bugs.
- A good set of unit tests prove that software is stable and reliable.

Some disadvantages of Unit Tests are:

- Writing tests takes a long time and engineers are expensive.
- Tests need to be maintained as the project continues to grow.
- It is difficult to write good tests that provide good coverage.
- Unit tests cannot test how different modules integrate with each other.

Integration tests suffer from a lot of the same disadvantages that apply to unit tests. They do allow you to mimic the user interaction with your code and ensure the different pieces fit nicely together.

If you wanted to test that 'A user can create a new account', you would visualize the path they go through in order to accomplish the stated goal. They would click on the button that says sign in, they would fill out a couple of fields and then they would be presented with a page that displays their profile. An integration test would be programmed to go through the same interface to perform the same task and ensure that certain criteria is present.

In order to replicate the user flow we use a headless browser instance. [Selenium](http://http://docs.seleniumhq.org/) and [PhantomJS](http://phantomjs.org/) are two popular implementations.

## Continuous Integration / Continuous Delivery (Deployment)

If you have a good level of confidence with your automated tests then your project is a good candidate for a CI/CD process. Continuous integration describes an automated system that will take a commit and run a set of automated integration tests against it.

What the software does when the tests pass largely depends on the level of confidence the developers have in the test suite. If the confidence is high the automated process may include an automatic deployment to the production server. In the case where the developers are not comfortable automatically releasing code to production they may deploy to a staging server which can be tested manually.

If the tests do not pass then the 'build' is considered broken. All developers are informed through email and in some cases Slack. The person who commited the change is responsible for reverting or fixing their code. Other than the changes necessary to address the break there should be no more commits until the 'build' is fixed and is passing tests again. This allows for a process where bugs are easy to track down because developers are informed as soon as a specific commit no longer satisfies the testing criteria.

When a bug makes it through the automated test suite and in to production then it is important that devleopers can easily revert changes to put production back in to a good state as quickly as possible.

There are a number of different tools for your CI/CD process.

- [Jenkins CI](https://jenkins.io/)
- [Travis CI](https://travis-ci.org/)
- [Circle CI](https://circleci.com/)
- [Atlassian Bamboo](https://www.atlassian.com/software/bamboo)
- More...

## RSpec and Capybara

Two libraries that will help us write and run tests are available as open source projects. We will use RSpec as our test runner and Capybara as an integration test framework. Capybara makes it easier to simulate how a user interacts with an application.

Initial setup instructions can be found in Compass. [Capybara and Poltergeist Setup](https://web-compass.lighthouselabs.ca/days/w7d2/activities/451) describes how to install the javascript driver, include the necessary gems for testing and configure rails project for testing.

Once you are able to run tests, you can generate new feature specs with the rails command `bin/rails generate rspec:feature <feature_name>`. In this case we will generate a feature spec for 'orders'.

```ruby
require 'rails_helper'

RSpec.feature "Visitor orders a product", type: :feature, js: true do

  scenario "They complete an order while logged in" do
  end

  scenario "They complete an order while not logged in" do
  end

end
```

> We set the option `js: true` so that Capybara knows to use a javascript driver.

In order to login we will need a user account. If we want to be able to add a product to our cart we will have to create one. We can use the `before :each` hooks to setup our test environment.

```ruby
RSpec.feature "Visitor orders a product", type: :feature, js: true do
  before :each do
    @user = User.create!(
      name: 'First User',
      email: 'first@user.com',
      password: '123456',
      password_confirmation: '123456'
    )

    @category = Category.create! name: 'Apparel'
    @category.products.create!(
      name: 'Cool Shirt',
      description: 'A really cool shirt.',
      image: 'test.jpg',
      quantity: 3,
      price: 12.99
    )
  end
end
```

The first test requires us to login before completing the order. We can also setup our expectations for the order completion page. The requirements tell us that we need to display the users email address after they have complete an order.

```ruby
scenario "They complete an order while logged in" do
  visit '/login'

  within 'form' do
    fill_in id: 'email', with: 'first@user.com'
    fill_in id: 'password', with: '123456'

    click_button 'Submit'
  end

  expect(page).to have_content 'Thank you for your order first@user.com!'
end
```

Completing the order is the difficult part. We need to start disecting the existing html structure to determine which elements we need to interact with. Since we are going to be peforming the same task for both tests we will create a function that can be called from within either scenario.

```ruby
def add_product_and_checkout
  first('article.product').find_link('Add').click

  visit '/cart'

  first('button.stripe-button-el').click

  within_frame 'stripe_checkout_app' do
    fill_in placeholder: 'Card number', with: '4242424242424242'
    fill_in placeholder: 'MM / YY', with: "01/#{Date.today.year + 1}"
    fill_in placeholder: 'CVC', with: '123'

    click_button 'Pay'
  end
end
```

> Normally Capybara is pretty good at handling the async behaviour in the web browser. This becomes trickier with the Stripe integration. You may need to add `Capybara.default_max_wait_time = 10` to your `rails_helpers.rb` file.

The test is slightly different for when the user is not logged in. Instead of navigating to the login page we default the user to the index of the site.

```ruby
scenario "They complete an order while not logged in" do
  visit root_path

  add_product_and_checkout

  expect(page).to have_content 'Thank you for your order!'
end
```

We need to add a call to `add_product_and_checkout` in the original test. We can now run these two tests against our code. If there are any issues with our implementation we can make changes to ensure our code satisfies the test cases we have just created.

> The full version of the spec for orders is available as `orders_spec.rb` in this repo.

### References

Capybara [cheat sheet](http://cheatrags.com/capybara)

## Bonus

The tools we discussed today are Ruby based. If you recall from earlier weeks there are open source projects written in JavaScript that allow you to manage both unit and integration tests. Two of the more popular frameowrks that go well together are [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/). Chai has a number of [plugins](http://chaijs.com/plugins/) to help with developing tests for diverse environments.