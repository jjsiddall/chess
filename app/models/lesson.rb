class Lesson < ApplicationRecord
  validates_presence_of :title

  has_many :exercises
end
