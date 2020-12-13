require 'sinatra'
require "http"
require 'sinatra/reloader'

configure do
  set :bind, '0.0.0.0'
end

get '/' do
  'hello'
end
