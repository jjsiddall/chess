require 'rails_helper'

RSpec.describe "moves/show", type: :view do
  before(:each) do
    @move = assign(:move, create(:move))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/wp1/)
    expect(rendered).to match(/e4/)
    expect(rendered).to match(/summary-text/)
    # expect(rendered).to match(//)
  end
end
