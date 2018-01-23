class Exercise < ApplicationRecord
  validates_presence_of :title
  belongs_to :lesson
end
