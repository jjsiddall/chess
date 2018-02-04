require 'rails_helper'

RSpec.describe "exercises/new", type: :view do
  before(:each) do
    assign(:exercise, build(:exercise))
  end

  it "renders new exercise form" do
    render

    assert_select "form[action=?][method=?]", exercises_path, "post" do

      assert_select "input[name=?]", "exercise[title]"

      assert_select "textarea[name=?]", "exercise[summary]"

      assert_select "select[name=?]", "exercise[lesson_id]"

      # assert_select "textarea[name=?]", "exercise[setup]"

      assert_select "textarea[name=?]", "exercise[conclusion]"
    end
  end
end
