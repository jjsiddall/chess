FactoryBot.define do
  factory :move do
    piece "wp1"
    square "e4"
    summary "summary-text"
    exercise

    trait :invalid do
      piece nil
    end
    trait :new do
      summary "summary-text-new"
    end

  end
end
