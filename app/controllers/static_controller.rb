class StaticController < ApplicationController

  def index
    render action: "index", layout: "jumbotron"
  end

  def about
  end
end
