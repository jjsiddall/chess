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

Move.create([
  # moves for exercisePawn1
  {exercise: exercisePawn1, piece: "wp1", square: "e4", summary: "forward-move"},
  {exercise: exercisePawn1, piece: "wp1", square: "e5", summary: "forward-move-2"},
  {exercise: exercisePawn1, piece: "wp1", square: "e6", summary: "forward-move-3"},
  # moves for exercisePawn2
  {exercise: exercisePawn2, piece: "wp2", square: "d6", summary: "backward-move"},
  {exercise: exercisePawn2, piece: "wp2", square: "d5", summary: "backward-move-2"},
  {exercise: exercisePawn2, piece: "wp2", square: "d4", summary: "backward-move-3"},
  ])
