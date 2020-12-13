require 'sinatra'

configure do
  set :bind, '0.0.0.0'
end

get '/' do
  'hello'
end
