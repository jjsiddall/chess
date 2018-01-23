FactoryBot.define do
  factory :lesson do
    title "MyString"
    summary "MyText"

    trait :invalid do
      title nil
    end
    trait :new do
      summary "summary-text-new"
    end

  end
end
