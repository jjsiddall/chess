class Exercise < ApplicationRecord
  validates_presence_of :title
  belongs_to :lesson
  has_many :moves

  def empty_setup
    self.update(setup: {})
  end
  def standard_setup
    self.update(setup: {
      a1:{html:"♜",id:"wr1"},
      b1:{html:"♞",id:"wn1"},
      c1:{html:"♝",id:"wb1"},
      d1:{html:"♛",id:"wq1"},
      e1:{html:"♚",id:"wk1"},
      f1:{html:"♝",id:"wb2"},
      g1:{html:"♞",id:"wn2"},
      h1:{html:"♜",id:"wr2"},
      a2:{html:"♟",id:"wp1"},
      b2:{html:"♟",id:"wp2"},
      c2:{html:"♟",id:"wp3"},
      d2:{html:"♟",id:"wp4"},
      e2:{html:"♟",id:"wp5"},
      f2:{html:"♟",id:"wp6"},
      g2:{html:"♟",id:"wp7"},
      h2:{html:"♟",id:"wp8"},
      a7:{html:"♟",id:"bp1"},
      b7:{html:"♟",id:"bp2"},
      c7:{html:"♟",id:"bp3"},
      d7:{html:"♟",id:"bp4"},
      e7:{html:"♟",id:"bp5"},
      f7:{html:"♟",id:"bp6"},
      g7:{html:"♟",id:"bp7"},
      h7:{html:"♟",id:"bp8"},
      a8:{html:"♜",id:"br1"},
      b8:{html:"♞",id:"bn1"},
      c8:{html:"♝",id:"bb1"},
      d8:{html:"♛",id:"bq1"},
      e8:{html:"♚",id:"bk1"},
      f8:{html:"♝",id:"bb2"},
      g8:{html:"♞",id:"bn2"},
      h8:{html:"♜",id:"br2"}})
  end
end
