# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lessonPawn = Lesson.create({title: "seed-Pawns", summary: "seed-A lesson dedicated to Pawns"})
exercisePawn1 = Exercise.create({lesson: lessonPawn, title: "seed-Pawn1", summary: "seed-Pawn moves forward 1", setup: "",conclusion: "seed-The Pawn moved forward 1"})
exercisePawn2 = Exercise.create({lesson: lessonPawn, title: "seed-Pawn2", summary: "seed-Pawn moves forward 2", setup: "",conclusion: "seed-The Pawn moved forward 2"})
