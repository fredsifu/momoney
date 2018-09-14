require 'test_helper'

class PersonalLoansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @personal_loan = personal_loans(:one)
  end

  test "should get index" do
    get personal_loans_url
    assert_response :success
  end

  test "should get new" do
    get new_personal_loan_url
    assert_response :success
  end

  test "should create personal_loan" do
    assert_difference('PersonalLoan.count') do
      post personal_loans_url, params: { personal_loan: { amount: @personal_loan.amount, purpose: @personal_loan.purpose, user_id: @personal_loan.user_id } }
    end

    assert_redirected_to personal_loan_url(PersonalLoan.last)
  end

  test "should show personal_loan" do
    get personal_loan_url(@personal_loan)
    assert_response :success
  end

  test "should get edit" do
    get edit_personal_loan_url(@personal_loan)
    assert_response :success
  end

  test "should update personal_loan" do
    patch personal_loan_url(@personal_loan), params: { personal_loan: { amount: @personal_loan.amount, purpose: @personal_loan.purpose, user_id: @personal_loan.user_id } }
    assert_redirected_to personal_loan_url(@personal_loan)
  end

  test "should destroy personal_loan" do
    assert_difference('PersonalLoan.count', -1) do
      delete personal_loan_url(@personal_loan)
    end

    assert_redirected_to personal_loans_url
  end
end
