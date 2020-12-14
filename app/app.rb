require "rubygems"
require 'sinatra/base'
require 'sinatra/reloader'
class App < Sinatra::Base
  get '/' do
    'hello'
  end
  not_found do
    'not found'
  end
end
