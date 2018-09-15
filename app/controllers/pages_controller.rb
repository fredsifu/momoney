class PagesController < ApplicationController
  def index
  end

  def personal
  end

  def create_personal
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Félicitations! Votre demande a été envoyée avec succès!' }
      format.json { render :home, status: 200, location: root_path }
      format.js {}
    end
  end

  def car
  end

  def home
  end

  def about
  end
end
