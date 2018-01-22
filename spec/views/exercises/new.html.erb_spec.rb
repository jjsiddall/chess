require 'rails_helper'

RSpec.describe "exercises/new", type: :view do
  before(:each) do
    assign(:exercise, Exercise.new(
      :title => "MyString",
      :summary => "MyText",
      :lesson => nil,
      :setup => "",
      :conclusion => "MyText"
    ))
  end

  it "renders new exercise form" do
    render

    assert_select "form[action=?][method=?]", exercises_path, "post" do

      assert_select "input[name=?]", "exercise[title]"

      assert_select "textarea[name=?]", "exercise[summary]"

      assert_select "input[name=?]", "exercise[lesson_id]"

      assert_select "input[name=?]", "exercise[setup]"

      assert_select "textarea[name=?]", "exercise[conclusion]"
    end
  end
end
