FROM ruby:2.7.2
RUN mkdir /extended-browser-history
WORKDIR /extended-browser-history
COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install
COPY . /extended-browser-history

CMD ["bundle", "exec", "ruby", "app.rb"]
