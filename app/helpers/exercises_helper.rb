module ExercisesHelper
  def board_square(rank, file, setup, edit) #creates a board square and puts a piece in it if setup says it should have one
    setup = eval(setup) if setup.is_a? String
    square_id = (file+96).chr + rank.to_s
    content_tag(:div, "", class: ["square", ('dark' if (rank+file) % 2 == 0)], id: square_id) do
      piece = setup[square_id]
      unless piece.nil?
        # piece, piece_id = setup[square_id]
        piece_id = piece["id"]
        piece_html = edit == true ? piece["html"]+piece_id[2] : piece["html"]
        color = piece_id[0] == 'w' ? 'white' : 'black'
        content_tag(:div, piece_html.html_safe, class: "piece #{color}", id: piece_id)
      end
    end
  end

  # builds a square for a piece to sit in
  def piece_square(piece_color, piece_id, piece_html, used_pieces)
    content_tag(:div, "", class: "square") do
      content_tag(:div, piece_html.html_safe+piece_id[2], class: "piece #{piece_color}", id: piece_id) unless used_pieces.include? piece_id
    end
  end

  def pieces_on_the_board(setup)
    setup = eval(setup) if setup.is_a? String
    pieces = []
    setup.each do |square|
      pieces << square.second['id']
    end
    return pieces
  end
end
