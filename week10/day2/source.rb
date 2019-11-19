npm install -g phantomjs

group :development, :test do
  gem 'rspec-rails', '~> 3.5'
  gem 'capybara'
  gem 'poltergeist'
  gem 'database_cleaner'
end

bundle install

# add to rails_helper.rb 
require "capybara/rails"
require "capybara/rspec"
require "capybara/poltergeist" # Add this line to require poltergeist

# Specs flagged with `js: true` will use Capybara's JS driver. Set
# that JS driver to :poltergeist
Capybara.javascript_driver = :poltergeist

#UNCOMMENT
Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

# --- Previously
# rails app:update:bin
# bin/rails generate rspec:install

# if things go wrong then 
# bundle binstubs rspec-core

# run tests
rspec


RSpec.feature "Visitor orders a product", type: :feature, js: true do

  scenario "They complete an order while logged in" do
    visit '/login'
  
    within 'form' do
      fill_in id: 'email', with: 'first@user.com'
      fill_in id: 'password', with: '123456'
  
      click_button 'Submit'
    end
  
    it{ expect(page).to have_content 'Thank you for your order first@user.com!' }
  end

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

  scenario "They complete an order while not logged in" do
    visit root_path
  
    add_product_and_checkout
  
    it{ expect(page).to have_content 'Thank you for your order!'  }
  end


end