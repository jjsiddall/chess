require 'rails_helper'

RSpec.describe "exercises/show", type: :view do
  before(:each) do
    @exercise = assign(:exercise, create(:exercise))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/title-string/)
    expect(rendered).to match(/summary-text/)
    expect(rendered).to match(//)
    # expect(rendered).to match(/{"a1"=>["&#9820;","white","wr1"]}/)
    expect(rendered).to match(/conclusion-text/)
  end
end
