class Move < ApplicationRecord
  validates_presence_of :piece
  belongs_to :exercise

  def piece_symbol
    pieces = {"k"=>"♚", "q"=>"♛","r"=>"♜","b"=>"♝", "n"=>"♞", "p"=>"♟"}
    return pieces[piece[1]]
  end

end
