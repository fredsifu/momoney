require "application_system_test_case"

class BorrowerProfilesTest < ApplicationSystemTestCase
  setup do
    @borrower_profile = borrower_profiles(:one)
  end

  test "visiting the index" do
    visit borrower_profiles_url
    assert_selector "h1", text: "Borrower Profiles"
  end

  test "creating a Borrower profile" do
    visit borrower_profiles_url
    click_on "New Borrower Profile"

    fill_in "Assets", with: @borrower_profile.assets
    fill_in "Bankcruptcy", with: @borrower_profile.bankcruptcy
    fill_in "Credit Appreciation", with: @borrower_profile.credit_appreciation
    fill_in "Other Revenues", with: @borrower_profile.other_revenues
    fill_in "Ownership", with: @borrower_profile.ownership
    fill_in "User", with: @borrower_profile.user_id
    click_on "Create Borrower profile"

    assert_text "Borrower profile was successfully created"
    click_on "Back"
  end

  test "updating a Borrower profile" do
    visit borrower_profiles_url
    click_on "Edit", match: :first

    fill_in "Assets", with: @borrower_profile.assets
    fill_in "Bankcruptcy", with: @borrower_profile.bankcruptcy
    fill_in "Credit Appreciation", with: @borrower_profile.credit_appreciation
    fill_in "Other Revenues", with: @borrower_profile.other_revenues
    fill_in "Ownership", with: @borrower_profile.ownership
    fill_in "User", with: @borrower_profile.user_id
    click_on "Update Borrower profile"

    assert_text "Borrower profile was successfully updated"
    click_on "Back"
  end

  test "destroying a Borrower profile" do
    visit borrower_profiles_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Borrower profile was successfully destroyed"
  end
end
