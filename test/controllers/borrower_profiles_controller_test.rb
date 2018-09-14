require 'test_helper'

class BorrowerProfilesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @borrower_profile = borrower_profiles(:one)
  end

  test "should get index" do
    get borrower_profiles_url
    assert_response :success
  end

  test "should get new" do
    get new_borrower_profile_url
    assert_response :success
  end

  test "should create borrower_profile" do
    assert_difference('BorrowerProfile.count') do
      post borrower_profiles_url, params: { borrower_profile: { assets: @borrower_profile.assets, bankcruptcy: @borrower_profile.bankcruptcy, credit_appreciation: @borrower_profile.credit_appreciation, other_revenues: @borrower_profile.other_revenues, ownership: @borrower_profile.ownership, user_id: @borrower_profile.user_id } }
    end

    assert_redirected_to borrower_profile_url(BorrowerProfile.last)
  end

  test "should show borrower_profile" do
    get borrower_profile_url(@borrower_profile)
    assert_response :success
  end

  test "should get edit" do
    get edit_borrower_profile_url(@borrower_profile)
    assert_response :success
  end

  test "should update borrower_profile" do
    patch borrower_profile_url(@borrower_profile), params: { borrower_profile: { assets: @borrower_profile.assets, bankcruptcy: @borrower_profile.bankcruptcy, credit_appreciation: @borrower_profile.credit_appreciation, other_revenues: @borrower_profile.other_revenues, ownership: @borrower_profile.ownership, user_id: @borrower_profile.user_id } }
    assert_redirected_to borrower_profile_url(@borrower_profile)
  end

  test "should destroy borrower_profile" do
    assert_difference('BorrowerProfile.count', -1) do
      delete borrower_profile_url(@borrower_profile)
    end

    assert_redirected_to borrower_profiles_url
  end
end
