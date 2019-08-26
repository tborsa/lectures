$ rails new railsdemo -T --database=postgresql

$ rails s

# RUN
# No DB Error

$ rake db:setup 
#or rake db:create

# yay your on rails 
# plan in readme
# List of Topics
#   - List of Topics conversations
#generate a controller

resources :topics

$ rails g controller topics

# RUN
# No Index Method

def index 
  
end

# RUN
# Missing template error
#default tries to render views/topics/index.html.erb
#create views/topics/index.html.erb
# dont need head and body tags

<h1>Topics</h1>

# RUN
# Would like to render a list of topic names
# wishful code

# <% @topics.each do |topic| %>
#   <div>
#     <h2><%= topic.name %></h2>
#   </div>
# <% end %>

# RUN
# Undefined method each for topics
# Have to define topics in view 

@topics = Topic.all

# RUN
# Error cant find topic


$ rails g model topic name:string description:string image:string

# RUN
# migration needs to be run 

$ rake db: migrate

# RUn
# See all 0 topics
# could make a form to add topics
# could use rails console to add topics

Topic.create name: "Lighthouse", description: "what", image: ".png"

# Run
# add extra info to template
# <img style="height: 150px;" src="<%= topic.image %>" />      

# Run
# Works so now we want to add it to the seed file 

Topic.destroy_all
sports = Topic.create! name: 'Sports', description: 'gotta love sports!', image: 'https://www.capebretonpost.com/media/photologue/photos/cache/CB-23112018-Winter-Sports-SUB_large.jpg'
second = 

# Run
# Everything up to this point is review!
# We want nested resources!
# something like topics/id/posts

resources :posts

# Rake Routes
# posts not nested

resources :topics do 
  resources :posts
end

# Rake Routes
# run
# try nested route
# Error no controller

$ rails g controller posts index

# Run

# want to show conversation in topics
@topic = Topic.first

# add to posts show page

<h1> @topic.name <\h1>

# instead
puts params 
# then
@topic = Topic.find(params[:id])

# want @posts = topic.posts
# posts dosen't exist

$ rails g model post title:string

#edit schema
t.references :topic # foreign key
t.string :subject
t.string :comment

#
rake db:migrate

#try in console
 topic = Topic.first
Post.create topic: topic, subject: "something", comment: "asd"

# error no relation defined
# add relation to models
has_many :posts
belongs_to :topic

# to seed data
Post.destroy_all
Post.create topic: sports, subject: "something", comment: "asd"

#topics show controller
@posts = @topic.posts

# in template
# <% @posts.each do |post| 
#   <h2> <%= post.subject %> </h2>
#   <p> <%= post.comment %> </h2> 
# <% end %>

# path is chnageing when we reseed so lets 
# add a link to show page from index page

# could 
# <a href="/topics/<%= topic.id =>">topic.name</a>

# instead
<=% link_to "stuff", topic_url(topic)>

# using rake routes prefix from rake routes

# and in topic show a link to posts show

<=% link_to "stuff", topic_conversations_url(topic)>

# Namespace
admin/topics
admin/posts 

# similar to nested routes but without the need
# for a new resource/controller

namespace 'admin' do
  resources :topics
end

#rake routes
# have to do extra work to get same display

$ rails g controller admin/topics

# copy logic in methods over
# copy view to 

views/admin/topics/index.html.erb

#want to 
delete topics
create topics
delete posts

#
namespace :admin do 

end


#create topic
# could make html form by hand or use form helpers
# <%= form_for :topic, url: admin_topics_url do |f| %>
#   <%= f.label :name %>
#   <%= f.text_field :name %>
#   <%= f.label :description %>
#   <%= f.text_field :description %>
#   <%= f.label :image %>
#   <%= f.text_field :image %>
#   <%= f.submit "Create" %>
# <% end %>

#many form for helper methods, use this one. 
#error no create method


def create
  puts 'PARAMS!'
  puts params
  @topic = Topic.find(params[:topic_id])
  c = @topic.conversations.create!(allowed_params)
  
  redirect_to topic_conversations_path(@topic)
end

private
def allowed_params
  params.require(:topic).permit(:name, :description, :image)
end 

# DELETE
# in admin/topics show page
button_to "name",  admin_topc_url(topic), :method => :delete

# destroy method in admin topics controller
@topic = Topic.find(params[:id])
@topic.destroy
redirect_to topics_path

#Creating nested resources
# <%= form_for :post, url: topic_posts_url(@topic) do |f| %>
def create
  @topic = Topic.find(params[:topic_id])
  @topic.posts.create(allowed_params)
  redirect_to topic_path(@topic)    
end