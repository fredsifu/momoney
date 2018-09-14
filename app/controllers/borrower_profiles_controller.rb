class BorrowerProfilesController < ApplicationController
  before_action :set_borrower_profile, only: [:show, :edit, :update, :destroy]

  # GET /borrower_profiles
  # GET /borrower_profiles.json
  def index
    @borrower_profiles = BorrowerProfile.all
  end

  # GET /borrower_profiles/1
  # GET /borrower_profiles/1.json
  def show
  end

  # GET /borrower_profiles/new
  def new
    @borrower_profile = BorrowerProfile.new
  end

  # GET /borrower_profiles/1/edit
  def edit
  end

  # POST /borrower_profiles
  # POST /borrower_profiles.json
  def create
    @borrower_profile = BorrowerProfile.new(borrower_profile_params)

    respond_to do |format|
      if @borrower_profile.save
        format.html { redirect_to @borrower_profile, notice: 'Borrower profile was successfully created.' }
        format.json { render :show, status: :created, location: @borrower_profile }
      else
        format.html { render :new }
        format.json { render json: @borrower_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /borrower_profiles/1
  # PATCH/PUT /borrower_profiles/1.json
  def update
    respond_to do |format|
      if @borrower_profile.update(borrower_profile_params)
        format.html { redirect_to @borrower_profile, notice: 'Borrower profile was successfully updated.' }
        format.json { render :show, status: :ok, location: @borrower_profile }
      else
        format.html { render :edit }
        format.json { render json: @borrower_profile.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /borrower_profiles/1
  # DELETE /borrower_profiles/1.json
  def destroy
    @borrower_profile.destroy
    respond_to do |format|
      format.html { redirect_to borrower_profiles_url, notice: 'Borrower profile was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_borrower_profile
      @borrower_profile = BorrowerProfile.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def borrower_profile_params
      params.require(:borrower_profile).permit(:user_id, :bankcruptcy, :ownership, :other_revenues, :assets, :credit_appreciation)
    end
end
