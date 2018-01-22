require 'rails_helper'

RSpec.describe "exercises/index", type: :view do
  before(:each) do
    assign(:exercises, [
      Exercise.create!(
        :title => "Title",
        :summary => "MyText",
        :lesson => nil,
        :setup => "",
        :conclusion => "MyText"
      ),
      Exercise.create!(
        :title => "Title",
        :summary => "MyText",
        :lesson => nil,
        :setup => "",
        :conclusion => "MyText"
      )
    ])
  end

  it "renders a list of exercises" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
