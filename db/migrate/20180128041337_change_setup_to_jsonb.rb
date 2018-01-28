class ChangeSetupToJsonb < ActiveRecord::Migration[5.1]
  def change
    change_column :exercises, :setup, :jsonb
  end
end
