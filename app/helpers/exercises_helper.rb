module ExercisesHelper
  def square(rank, file, setup)
    id = (file+96).chr + rank.to_s
    content_tag(:div, "", class: ["square", ('dark' if (rank+file) % 2 == 0)], id: id) do
      unless setup[id].nil?
        piece, color, piece_id = setup[id]
        content_tag(:div, piece.html_safe, class: "piece #{color}", id: piece_id)
      end
    end
  end
end
