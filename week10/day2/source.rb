npm install -g phantomjs

group :development, :test do
  gem 'rspec-rails', '~> 3.5'
  gem 'capybara'
  gem 'poltergeist'
  gem 'database_cleaner'
end

bundle install

rails app:update:bin
bin/rails generate rspec:install

# if things go wrong then 
# bundle binstubs rspec-core

# run tests
rspec

# With the rspec-rails gem installed and configured 
# in your project, when you generate a new model 
# in this project it will automatically hook into 
# the model generation process and auto-generate a 
# corresponding spec file for that model.
rails g rspec:controller subreddits
rails g rspec:model subreddit