FactoryBot.define do
  factory :exercise do
    title "title-string"
    summary "summary-text"
    lesson
    setup ""
    conclusion "conclusion-text"

    trait :invalid do
      title nil
    end
    trait :new do
      summary "summary-text-new"
    end

  end
end
