class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :title
      t.text :summary
      t.belongs_to :lesson, foreign_key: true
      t.json :setup
      t.text :conclusion

      t.timestamps
    end
  end
end
