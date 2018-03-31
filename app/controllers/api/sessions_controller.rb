class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      login!(user)

    else
      flash[:errors] = ["mope"]
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      flash.now[:errors] = ["not logged in"]
    end
  end
end
