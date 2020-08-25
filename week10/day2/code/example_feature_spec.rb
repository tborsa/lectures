require 'rails_helper'
# Capybara.default_max_wait_time = 5000

RSpec.feature "AddProductToCarts", type: :feature, js: true do
  before :each do
    @category = Category.create! name: 'Shoes'
    @category.products.create!(
      name: 'Scarpa Instincts',
      description: "aggressive shoes",
      price: "200$",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYfhzyWPPtBGI9HhMIRItB87z7lj4DpI6HIlH1wA09xgVQ_S3cp17MZ6II17cf_fJKIdHphG8dVDiZ&usqp=CAc",
      quantity: "10"
    )
  end

  scenario "A guest adds a product to their cart." do
    # vist the page
    visit '/'

    # hover over the first product and click add
    first("article.product").find_button('Add').click

    # Check that the number increased in my cart
    # visit the cart page
    find_link('My Cart (1)').click # takes time

    expect(page).to have_content "TOTAL:" 
    # will only fail if after 2 seconds the query has repeatedly failed
    
    page.save_screenshot
    # check to see that there is a product/ the correct product
  end

  scenario "A logged in user adds a product to their cart." do
    #  login in test logic
    #  call the add product method
    #  final assertion
  end

end
