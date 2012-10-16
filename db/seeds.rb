# encoding: utf-8
# Autogenerated by the db:seed:dump task
# Do not hesitate to tweak this to your needs

Exercise.create([
  { :title => "Scholar's mate", :description => "http://en.wikipedia.org/wiki/Scholar%27s_mate\r\n\r\n", :moves => "e2-e4, e7-e5, d1-Qh5, b8-Nc6, f1-Bc4, g8-Nf6, h5-Qxf7", :created_at => "2012-10-08 01:45:05", :updated_at => "2012-10-08 01:59:23", :initial_setup => nil },
  { :title => "Fool's mate", :description => "http://en.wikipedia.org/wiki/Fool%27s_Mate", :moves => "f2-f3, e7-e5, g2-g4, d8-Qh4", :created_at => "2012-10-08 01:57:39", :updated_at => "2012-10-12 17:05:33", :initial_setup => "a8-black-♜,b8-black-♞,c8-black-♝,d8-black-♛,e8-black-♚,f8-black-♝,g8-black-♞,h8-black-♜,a7-black-♟,b7-black-♟,c7-black-♟,d7-black-♟,e7-black-♟,f7-black-♟,g7-black-♟,h7-black-♟,e3-white-♟,a2-white-♟,b2-white-♟,c2-white-♟,d2-white-♟,f2-white-♟,g2-white-♟,h2-white-♟,a1-white-♜,b1-white-♞,c1-white-♝,d1-white-♛,e1-white-♚,f1-white-♝,g1-white-♞,h1-white-♜,undefined-white-♟,undefined-white-♞,undefined-white-♝,undefined-white-♜,undefined-white-♛,undefined-white-♚,undefined-black-♟,undefined-black-♞,undefined-black-♝,undefined-black-♜,undefined-black-♛,undefined-black-♚" },
  { :title => "Pawn Movement", :description => "This is the description of how a pawn moves", :moves => "d4-d5, d5-d6, d6-e7", :created_at => "2012-10-09 04:24:30", :updated_at => "2012-10-15 02:35:21", :initial_setup => "e7-black-♟,d4-white-♟" }
], :without_protection => true )



Game.create([
  { :created_at => "2012-09-28 22:14:53", :updated_at => "2012-09-28 22:14:53" }
], :without_protection => true )


