require 'sinatra'
require 'sinatra/reloader'


@bottles_wall = nil
@take_one = nil


get '/' do
  @num_bottles = 99
  @bottles_wall = "Bottles of beer on the wall"
  @take_one = "Take one"
  @deduct_one = @num_bottles - 1
  erb(:index)
end


get '/:name' do
  @num_bottles = params[:name].to_i
  @bottles_wall = "Bottles of beer on the wall"
  @take_one = "Take one"
  @deduct_one = @num_bottles - 1

  if @num_bottles == 0
    @bottles_wall = "No more beer on the wall"
    @take_one = "Start drinking again"
    @deduct_one = "99"
  end
  erb(:index)
end