class Move < ApplicationRecord
  validates_presence_of :piece
  belongs_to :exercise

  def piece_symbol
    pieces = {"k"=>"♚", "q"=>"♛","r"=>"♜","b"=>"♝", "n"=>"♞", "p"=>"♟"}
    return pieces[piece[1]]
  end
  def piece_symbol_number
    return piece_symbol+piece[2]
  end
  def piece_color
    return piece[0] == "w" ? "white" : "black"
  end

end
