module ExercisesHelper
  def square(rank, file, setup)
    setup = eval(setup) if setup.is_a? String
    square_id = (file+96).chr + rank.to_s
    content_tag(:div, "", class: ["square", ('dark' if (rank+file) % 2 == 0)], id: square_id) do
      piece = setup[square_id]
      unless piece.nil?
        # piece, piece_id = setup[square_id]
        piece_html = piece["html"]
        piece_id = piece["id"]
        color = piece_id[0] == 'w' ? 'white' : 'black'
        content_tag(:div, piece_html.html_safe, class: "piece #{color}", id: piece_id)
      end
    end
  end
end
