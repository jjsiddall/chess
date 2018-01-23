class CreateMoves < ActiveRecord::Migration[5.1]
  def change
    create_table :moves do |t|
      t.string :piece
      t.string :square
      t.text :summary
      t.belongs_to :exercise, foreign_key: true

      t.timestamps
    end
  end
end
