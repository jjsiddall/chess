require 'rails_helper'

RSpec.describe "exercises/index", type: :view do
  before(:each) do
    assign(:exercises, [ create(:exercise), create(:exercise) ])
  end

  it "renders a list of exercises" do
    render
    assert_select "tr>td", :text => "title-string".to_s, :count => 2
    assert_select "tr>td", :text => "summary-text".to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "conclusion-text".to_s, :count => 2
  end
end
