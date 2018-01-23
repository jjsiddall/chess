require 'rails_helper'

RSpec.describe "moves/index", type: :view do
  before(:each) do
    assign(:moves, [create(:move),create(:move)])
  end

  it "renders a list of moves" do
    render
    assert_select "tr>td", :text => "wp1".to_s, :count => 2
    assert_select "tr>td", :text => "e4".to_s, :count => 2
    assert_select "tr>td", :text => "summary-text".to_s, :count => 2
  end
end
