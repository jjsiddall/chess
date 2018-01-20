json.extract! lesson, :id, :title, :summary, :created_at, :updated_at
json.url lesson_url(lesson, format: :json)
