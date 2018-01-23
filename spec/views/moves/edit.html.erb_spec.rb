require 'rails_helper'

RSpec.describe "moves/edit", type: :view do
  before(:each) do
    @move = assign(:move, create(:move))
  end

  it "renders the edit move form" do
    render

    assert_select "form[action=?][method=?]", move_path(@move), "post" do

      assert_select "input[name=?]", "move[piece]"

      assert_select "input[name=?]", "move[square]"

      assert_select "textarea[name=?]", "move[summary]"

      assert_select "select[name=?]", "move[exercise_id]"
    end
  end
end
