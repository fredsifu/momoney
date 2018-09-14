require "application_system_test_case"

class PersonalLoansTest < ApplicationSystemTestCase
  setup do
    @personal_loan = personal_loans(:one)
  end

  test "visiting the index" do
    visit personal_loans_url
    assert_selector "h1", text: "Personal Loans"
  end

  test "creating a Personal loan" do
    visit personal_loans_url
    click_on "New Personal Loan"

    fill_in "Amount", with: @personal_loan.amount
    fill_in "Purpose", with: @personal_loan.purpose
    fill_in "User", with: @personal_loan.user_id
    click_on "Create Personal loan"

    assert_text "Personal loan was successfully created"
    click_on "Back"
  end

  test "updating a Personal loan" do
    visit personal_loans_url
    click_on "Edit", match: :first

    fill_in "Amount", with: @personal_loan.amount
    fill_in "Purpose", with: @personal_loan.purpose
    fill_in "User", with: @personal_loan.user_id
    click_on "Update Personal loan"

    assert_text "Personal loan was successfully updated"
    click_on "Back"
  end

  test "destroying a Personal loan" do
    visit personal_loans_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Personal loan was successfully destroyed"
  end
end
