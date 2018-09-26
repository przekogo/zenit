class Building < ActiveRecord::Base
  has_many :spaces

  validates :name, presence: true
end
