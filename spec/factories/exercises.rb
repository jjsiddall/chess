FactoryBot.define do
  factory :exercise do
    title "title-string"
    summary "summary-text"
    lesson
    setup '{"a1"=>{"html"=>"♜","id"=>"wr1"}}'
    conclusion "conclusion-text"

    trait :invalid do
      title nil
    end
    trait :new do
      summary "summary-text-new"
    end

  end
end
