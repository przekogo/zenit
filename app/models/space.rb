class Space < ActiveRecord::Base
  belongs_to :building

  validates :floor, :available, :total, presence: true
end
