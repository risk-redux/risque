FROM ruby:2.5-rc

MAINTAINER Karim Said <karim.a.said@nasa.gov>

# Throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

# Web application dependencies
RUN apt-get update -qq && apt-get install -y build-essential

# For nokogiri
RUN apt-get install -y libxml2-dev libxslt1-dev

# For a JS runtime
RUN apt-get install -y nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD Gemfile /usr/src/app/
ADD Gemfile.lock /usr/src/app/

ADD . /usr/src/app

RUN chmod -R 755 /usr/src/app

# Run all the application bootstrapping commands

RUN cd /usr/src/app

ARG DEPLOY=${DEPLOY}
ENV RAILS_ENV=${DEPLOY}

RUN bundle install

RUN bundle exec rails db:create
RUN bundle exec rails db:schema:load
RUN bundle exec rails db:seed

RUN bundle exec rails assets:precompile

EXPOSE 50801

CMD ["rails", "server", "-b", "0.0.0.0", "-p", "50801"]
