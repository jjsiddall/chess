class AddInitialSetupToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :initial_setup, :string
  end
end
