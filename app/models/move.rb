class Move < ApplicationRecord
  validates_presence_of :piece
  belongs_to :exercise
end
