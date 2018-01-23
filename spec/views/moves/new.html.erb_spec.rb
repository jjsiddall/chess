require 'rails_helper'

RSpec.describe "moves/new", type: :view do
  before(:each) do
    assign(:move, build(:move))
  end

  it "renders new move form" do
    render

    assert_select "form[action=?][method=?]", moves_path, "post" do

      assert_select "input[name=?]", "move[piece]"

      assert_select "input[name=?]", "move[square]"

      assert_select "textarea[name=?]", "move[summary]"

      assert_select "select[name=?]", "move[exercise_id]"
    end
  end
end
