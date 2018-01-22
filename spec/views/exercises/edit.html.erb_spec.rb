require 'rails_helper'

RSpec.describe "exercises/edit", type: :view do
  before(:each) do
    @exercise = assign(:exercise, Exercise.create!(
      :title => "MyString",
      :summary => "MyText",
      :lesson => nil,
      :setup => "",
      :conclusion => "MyText"
    ))
  end

  it "renders the edit exercise form" do
    render

    assert_select "form[action=?][method=?]", exercise_path(@exercise), "post" do

      assert_select "input[name=?]", "exercise[title]"

      assert_select "textarea[name=?]", "exercise[summary]"

      assert_select "input[name=?]", "exercise[lesson_id]"

      assert_select "input[name=?]", "exercise[setup]"

      assert_select "textarea[name=?]", "exercise[conclusion]"
    end
  end
end
