require 'rails_helper'

RSpec.describe Move, type: :model do
  it { should validate_presence_of(:piece) }
end
