class PersonalLoansController < ApplicationController
  before_action :set_personal_loan, only: [:show, :edit, :update, :destroy]

  # GET /personal_loans
  # GET /personal_loans.json
  def index
    @personal_loans = PersonalLoan.all
  end

  # GET /personal_loans/1
  # GET /personal_loans/1.json
  def show
  end

  # GET /personal_loans/new
  def new
    @personal_loan = PersonalLoan.new
  end

  # GET /personal_loans/1/edit
  def edit
  end

  # POST /personal_loans
  # POST /personal_loans.json
  def create
    @personal_loan = PersonalLoan.new(personal_loan_params)

    respond_to do |format|
      if @personal_loan.save
        format.html { redirect_to @personal_loan, notice: 'Personal loan was successfully created.' }
        format.json { render :show, status: :created, location: @personal_loan }
      else
        format.html { render :new }
        format.json { render json: @personal_loan.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /personal_loans/1
  # PATCH/PUT /personal_loans/1.json
  def update
    respond_to do |format|
      if @personal_loan.update(personal_loan_params)
        format.html { redirect_to @personal_loan, notice: 'Personal loan was successfully updated.' }
        format.json { render :show, status: :ok, location: @personal_loan }
      else
        format.html { render :edit }
        format.json { render json: @personal_loan.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /personal_loans/1
  # DELETE /personal_loans/1.json
  def destroy
    @personal_loan.destroy
    respond_to do |format|
      format.html { redirect_to personal_loans_url, notice: 'Personal loan was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_personal_loan
      @personal_loan = PersonalLoan.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def personal_loan_params
      params.require(:personal_loan).permit(:purpose, :amount, :user_id)
    end
end
