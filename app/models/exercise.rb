class Exercise < ApplicationRecord
  validates_presence_of :title
  belongs_to :lesson
  has_many :moves

  def standard_setup
    self.update(setup: {"a1":["&#9820;","white","wr1"],"b1":["&#9822;","white","wn1"],"c1":["&#9821;","white","wb1"],"d1":["&#9819;","white","wq1"],"e1":["&#9818;","white","wk1"],"f1":["&#9821;","white","wb2"],"g1":["&#9822;","white","wn2"],"h1":["&#9820;","white","wr2"],"a2":["&#9823;","white","wp1"],"b2":["&#9823;","white","wp2"],"c2":["&#9823;","white","wp3"],"d2":["&#9823;","white","wp4"],"e2":["&#9823;","white","wp5"],"f2":["&#9823;","white","wp6"],"g2":["&#9823;","white","wp7"],"h2":["&#9823;","white","wp8"],"a7":["&#9823;","black","bp1"],"b7":["&#9823;","black","bp2"],"c7":["&#9823;","black","bp3"],"d7":["&#9823;","black","bp4"],"e7":["&#9823;","black","bp5"],"f7":["&#9823;","black","bp6"],"g7":["&#9823;","black","bp7"],"h7":["&#9823;","black","bp8"],"a8":["&#9820;","black","br1"],"b8":["&#9822;","black","bn1"],"c8":["&#9821;","black","bb1"],"d8":["&#9819;","black","bq1"],"e8":["&#9818;","black","bk1"],"f8":["&#9821;","black","bb2"],"g8":["&#9822;","black","bn2"],"h8":["&#9820;","black","br2"]})
  end
  def empty_setup
    self.update(setup: {})
  end
end
