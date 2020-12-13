FROM ubuntu:20.04

RUN apt-get update && apt-get install -y -q nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM ruby:2.7.2
RUN mkdir /docker-study
WORKDIR /docker-study
COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install
COPY . /docker-study

CMD ["bundle", "exec", "ruby", "app.rb"]
