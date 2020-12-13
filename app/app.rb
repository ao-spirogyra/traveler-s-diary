require "rubygems"
require 'sinatra/base'
require 'sinatra/reloader'
class App < Sinatra::Base
  get '/' do
    'hello'
  end
end
